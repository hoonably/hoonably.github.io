# Notion에서 export한 html 파일을 Jekyll 블로그 포스트로 변환하는 스크립트

# 사용법
# 1. Notion에서 export한 html 파일과 이미지 폴더가 들어있는 zip 파일을 이 스크립트와 같은 폴더에 넣습니다.
# 2. 스크립트를 실행합니다.
# 3. 카테고리를 선택합니다.
# 4. 변환된 Markdown 파일이 _posts 폴더에 생성됩니다.
# 5. 해제됐던 폴더는 사라지고, zip 파일은 남아있습니다.
# 6. 확인 후 zip 파일을 직접 삭제합니다.

import os
import re
from datetime import datetime
from urllib.parse import unquote, quote
import shutil
import zipfile
from PIL import Image
from bs4 import BeautifulSoup

current_time = ""  # 현재 시간 (YYYY-MM-DD HH:MM:SS)
current_date = ""  # 날짜 (YYYY-MM-DD)
old_filename = ""  # 기존 html 파일명 ()
new_filename = ""  # 마크다운 파일명과 폴더명 (YYYY-MM-DD-Data-Structure)

import unicodedata

def safe_filename(filename):
    filename = unicodedata.normalize("NFKD", filename)
    return filename.encode("ascii", "ignore").decode("ascii")

def merge_paragraphs_inside_callouts(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")

    for fig in soup.find_all("figure", class_=lambda c: c and "callout" in c):
        div = fig.find("div", style=lambda s: s and "width:100%" in s)
        if not div:
            continue

        # 콜아웃 내부 <p>들을 <br>로 연결하여 한 단락처럼 만들기
        parts = []
        for p in div.find_all("p"):
            parts.append("".join(str(x) for x in p.contents))
        div.clear()
        div.append(BeautifulSoup("<br>".join(parts), "html.parser"))

    return str(soup)

# html 파일 내에 있는 src, href 속성의 경로를 변경하는 함수
def rewrite_image_paths_soup(html: str, old_filename: str, new_filename: str) -> str:
    soup = BeautifulSoup(html, "html.parser")

    old_paths = [old_filename, quote(old_filename), quote(old_filename).replace("%2B", "+")]

    for tag in soup.find_all(["img", "a"]):
        for attr in ["src", "href"]:
            if tag.has_attr(attr):
                for old in old_paths:
                    if tag[attr].startswith(old) or f"./{old}" in tag[attr]:
                        tag[attr] = tag[attr].replace(old, f"/files/{new_filename}")

    # 확장자 교체
    for img in soup.find_all("img"):
        for ext in [".png", ".jpg", ".jpeg"]:
            if img["src"].endswith(ext):
                img["src"] = img["src"].replace(ext, ".webp")

    return str(soup)



def convert_figure_images(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")

    for figure in soup.find_all("figure", class_="image"):
        a_tag = figure.find("a")
        img_tag = a_tag.find("img") if a_tag else None
        if img_tag is None:
            continue

        # 새 img 태그 생성
        new_img = soup.new_tag("img")

        # 기존 img 속성 복사
        for attr, value in img_tag.attrs.items():
            new_img[attr] = value

        # al-folio 확대용 속성 추가
        new_img["class"] = "img-fluid rounded z-depth-1"
        new_img["data-zoomable"] = ""
        new_img["loading"] = "eager"
        new_img["onerror"] = "this.onerror=null; $('.responsive-img-srcset').remove();"

        # <picture>로 감싸기
        picture_tag = soup.new_tag("picture")
        picture_tag.append(new_img)

        # 기존 <a> → <picture>로 대체
        a_tag.replace_with(picture_tag)

    return str(soup)

# 마크다운 파일 수정 및 생성하는 함수
def write_markdown_file(filepath, html_content):
    global new_filename  # 전역변수 변경해야하므로

    # 제목 추출
    title = html_content.split("<title>")[1].split("</title>")[0].strip()

    # <div class="page-body"> 이전 내용 제거
    marker = '<div class="page-body">'
    marker_index = html_content.find(marker)
    if marker_index != -1:
        html_content = html_content[marker_index:]

    # 마지막 줄 </article> 이후 제거
    end_marker = '</article>'
    end_index = html_content.find(end_marker)
    if end_index != -1:
        html_content = html_content[:end_index]

    # <details> 태그 수정 (기본적으로 열려있는 상태가 아니도록)
    html_content = html_content.replace("<details open=\"\">", "<details>")
    html_content = html_content.replace("<details open>", "<details>")

    # <figure> 태그내 줄바꿈 중복 제거
    html_content = merge_paragraphs_inside_callouts(html_content)


    print(f"⭐️ {title}.html 변환작업을 시작합니다.")

    # .html 파일명과 이미지 등이 들어있는 폴더명 사용자가 지정
    new_filename = input("파일명을 영어로 입력해주세요 (공백은 '-'으로 자동 변경됩니다): ").strip()

    # 허용: 알파벳(a-zA-Z), 숫자(0-9), 공백, 하이픈(-)만 → 그 외는 모두 거부
    while not new_filename or not re.fullmatch(r"[a-zA-Z0-9 \-]+", new_filename):
        if not new_filename:
            print("❌ 비워둘 수 없습니다.")
        else:
            print("❌ 영어, 숫자, 공백, 하이픈(-)만 사용할 수 있습니다.")
        new_filename = input("다시 입력해주세요: ").strip()
    new_filename = new_filename.replace(" ", "-")  # 공백을 '-'로 변경
    new_filename = f"{current_date}-{new_filename}"  # 날짜 추가

    # ⭐️ 태그 입력 (여러 개 가능)
    raw_tags = input("태그를 띄어쓰기로 입력해주세요 (CS, AI, PS ...): ").strip()
    tags = [tag.strip() for tag in raw_tags.split() if tag.strip()]
    tag_str = ", ".join(tags) if tags else ""

    # ⭐️ 카테고리 입력 (하나만)
    category = input("카테고리를 하나 입력해주세요 (Talk, Tip, Study, Paper): ").strip()

    # YAML 프론트 매터 생성
    yaml_front_matter = f"""---
layout: notion
title: "{title}"
description:
date: {current_time} +09:00
tags: {tag_str}
categories: {category}
giscus_comments: true
related_posts: false

featured: false
pretty_table: true

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: left  # 목차가 사이드바 왼쪽에 붙어있음
---
"""

    # 이미지 경로 수정
    html_content = rewrite_image_paths_soup(html_content, old_filename, new_filename)
    html_content = convert_figure_images(html_content)


    # ⭐️ .md 수정본 생성 후 저장
    final_content = yaml_front_matter + html_content
    script_dir = os.path.dirname(os.path.abspath(__file__))
    posts_dir = os.path.join(os.path.dirname(script_dir), "_posts")
    os.makedirs(posts_dir, exist_ok=True)
    new_filepath = os.path.join(posts_dir, f"{new_filename}.md")
    with open(new_filepath, 'w', encoding='utf-8') as file:
        file.write(final_content)
    print(f"⭐️ 마크다운 파일 생성 완료: {new_filepath}")

# 이미지 파일을 webp로 변환하는 함수
def convert_to_webp(input_path, output_path, quality=80):
    try:
        img = Image.open(input_path)

        ext = os.path.splitext(input_path)[1].lower()
        if ext in [".jpg", ".jpeg"]:
            img = img.convert("RGB")   # JPG/JPEG → RGB (불투명)
        elif ext == ".png":
            img = img.convert("RGBA")  # PNG → RGBA (투명도 유지)

        img.save(output_path, "webp", quality=quality)

        # 변환 성공한 경우 원본 삭제
        os.remove(input_path)

    except Exception as e:
        print(f"❌ 이미지 변환 실패: {input_path} → {output_path}\n에러: {e}")



# 이미지가 들어있는 폴더를 "files/" 안으로 복사하는 함수
def copy_folder(html_path):
    """
    html_path: 원본 html 경로
    new_filename: 예시 - '2025-04-04-MLOps.md'
    """

    # 원본 이미지 폴더: html 파일 옆에 있는 동일 이름 폴더
    html_dir = os.path.dirname(html_path)
    html_filename = os.path.splitext(os.path.basename(html_path))[0]
    original_image_folder = os.path.join(html_dir, html_filename)

    if not os.path.exists(original_image_folder):
        print(f"🌉 이미지가 존재하지 않습니다.")
        return

    # 타겟 경로: files/{new_filename_without_ext}/
    script_dir = os.path.dirname(os.path.abspath(__file__))
    root_dir = os.path.dirname(script_dir)
    folder_name = os.path.splitext(new_filename)[0]  # .md 제거
    target_folder = os.path.join(root_dir, "files", folder_name)
    os.makedirs(target_folder, exist_ok=True)

    # 이미지 복사
    for item in os.listdir(original_image_folder):
        src_path = os.path.join(original_image_folder, item)
        dst_path = os.path.join(target_folder, item)
        if os.path.isfile(src_path):
            base, _ = os.path.splitext(item)
            dst_filename = base + ".webp"
            dst_path = os.path.join(target_folder, dst_filename)
            convert_to_webp(src_path, dst_path)

    print(f"⭐️ 이미지 복사 완료 → {target_folder}")

def process_html_file(filepath):
    global current_time, current_date

    while True:
        raw_date = input(f"📅 [{os.path.basename(filepath)}] 게시 날짜를 입력하세요 (형식: YYMMDD, 엔터 시 오늘 날짜 사용): ").strip()

        if raw_date == "":
            dt = datetime.now()
            current_date = dt.strftime("%Y-%m-%d")
            break
        if not re.fullmatch(r"\d{6}", raw_date):
            print("❌ 날짜 형식이 잘못되었습니다. YYMMDD 형식으로 6자리 숫자를 입력해주세요. (예: 250206)")
            continue
        try:
            # "25" → "2025"
            full_date = "20" + raw_date
            dt = datetime.strptime(full_date, "%Y%m%d")
            current_date = dt.strftime("%Y-%m-%d")
            break
        except ValueError:
            print("❌ 존재하지 않는 날짜입니다.")


    # ✅ 사용자 입력 날짜 + 현재 시각 조합으로 date 고정
    current_time = f"{current_date} {datetime.now().strftime('%H:%M:%S')}"



    # 파일 읽기
    with open(filepath, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # 마크다운 파일 생성
    write_markdown_file(filepath, html_content)

    # 이미지 들어있는 폴더 옮기기
    copy_folder(filepath)

    # ⭐️ 변환 완료 메시지
    print(f"⭐️ 모든 작업 완료 → {new_filename}\n")


if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))

    for filename in os.listdir(script_dir):
        if filename.endswith(".zip"):
            zip_path = os.path.join(script_dir, filename)
            extract_dir = os.path.join(script_dir, os.path.splitext(filename)[0])

            # 압축 해제
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(extract_dir)

            # .html 파일 찾기
            html_file = None
            for root, _, files in os.walk(extract_dir):
                for f in files:
                    if f.endswith(".html"):
                        html_file = os.path.join(root, f)
                        old_filename = os.path.splitext(f)[0]
                        break

            if html_file:
                process_html_file(html_file)

            # 해제된 폴더 삭제
            shutil.rmtree(extract_dir)

            # zip 파일 삭제
            # os.remove(zip_path)

