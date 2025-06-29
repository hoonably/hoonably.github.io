# Notion에서 export한 md 파일을 Jekyll 블로그 포스트로 변환하는 스크립트

# 사용법
# 1. Notion에서 export한 md 파일과 이미지 폴더가 들어있는 zip 파일을 이 스크립트와 같은 폴더에 넣습니다.
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

current_time = ""  # 현재 시간 (YYYY-MM-DD HH:MM:SS)
current_date = ""  # 날짜 (YYYY-MM-DD)
old_filename = ""  # 기존 md 파일명 ()
new_filename = ""  # 마크다운 파일명과 폴더명 (YYYY-MM-DD-Data-Structure)

import unicodedata  # ← 너가 말한 이 줄 포함

def safe_filename(filename):
    filename = unicodedata.normalize("NFKD", filename)
    return filename.encode("ascii", "ignore").decode("ascii")

# ![]() 형태의 이미지 마크다운을 {% include figure.liquid %}로 변환하는 함수
def replace_markdown_images_with_include(md_text):
    pattern = re.compile(r'!\[[^\]]*\]\(([^)]+)\)')

    def replacer(match):
        img_path = match.group(1)
        filename = os.path.basename(img_path)
        base, _ = os.path.splitext(filename)
        safe_name = safe_filename(base + ".webp")
        encoded_filename = quote(unquote(safe_name))
        return (
            '{% include figure.liquid loading="eager" '
            f'path="files/{new_filename}/{encoded_filename}" '
            'class="img-fluid rounded z-depth-1" zoomable=true %}'
        )

    return pattern.sub(replacer, md_text)


# 일반 URL을 자동으로 링크로 변환하는 함수
def autolink_bare_urls(md_text):
    pattern = re.compile(
        r'(?<!\]\()(?<!\]: )(?<!\]\()\bhttps?://[^\s<>()\[\]]+',
        re.IGNORECASE
    )

    def replacer(match):
        url = match.group(0)
        return f"[{url}]({url})"

    return pattern.sub(replacer, md_text)

# []() 형태의 일반 링크를 /files/{new_filename}/ 폴더로 이동시키는 함수
def replace_regular_links(md_text):
    pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')

    def replacer(match):
        link_text = match.group(1)
        link_path = match.group(2)

        # 이미지 제외, 외부 링크 제외
        if link_text.startswith("!") or link_path.startswith("http"):
            return match.group(0)

        filename = os.path.basename(link_path)
        safe_name = safe_filename(filename)
        encoded_filename = quote(unquote(safe_name))
        return f'[{link_text}](/files/{new_filename}/{encoded_filename})'

    return pattern.sub(replacer, md_text)

# 테이블에서 셀 내 줄바꿈을 <br>로 바꾸는 함수
def fix_table_multiline_cells(md_text):
    fixed_lines = []
    inside_table = False

    for line in md_text.splitlines():
        if re.match(r"^\|", line):  # 테이블 줄
            inside_table = True
            fixed_lines.append(line)
        elif inside_table and line.strip() == "":
            inside_table = False
            fixed_lines.append(line)
        elif inside_table:
            # 이전 줄과 연결되는 셀 내 줄바꿈 → <br>로 바꾸기
            fixed_lines[-1] += "<br>" + line.strip()
        else:
            fixed_lines.append(line)

    return "\n".join(fixed_lines)

# <aside> 태그를 block-warning로 변환하는 함수
def convert_aside_to_block_warning(md_text):
    lines = md_text.splitlines()
    output = []
    inside_aside = False
    buffer = []

    for line in lines:
        if line.strip().startswith("<aside"):
            inside_aside = True
            buffer = []
        elif line.strip() == "</aside>":
            inside_aside = False
            for b in buffer:
                output.append(f"> {b}")
            output.append("{: .block-warning }")
        elif inside_aside:
            buffer.append(line.rstrip())
        else:
            output.append(line)

    return "\n".join(output)



# 마크다운 파일 수정 및 생성하는 함수
def write_markdown_file(filepath, md_content):
    global new_filename  # 전역변수 변경해야하므로

    # ⭐️ 제목 추출 + 첫 줄 제거
    lines = md_content.strip().split("\n")
    if lines[0].startswith("# "):
        title = lines[0][2:].strip()
        md_content = "\n".join(lines[1:])  # 첫 줄 제거
    else:
        title = "Untitled"

    print(f"⭐️ {title}.md 변환작업을 시작합니다.")

    # .md 파일명과 이미지 등이 들어있는 폴더명 사용자가 지정
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
layout: post
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
    
    # <aside> → block-warning 처리
    md_content = convert_aside_to_block_warning(md_content)

    # 표 셀 줄바꿈 보정
    md_content = fix_table_multiline_cells(md_content)

    # 이미지 변환
    md_content = replace_markdown_images_with_include(md_content)

    # 링크 변환
    md_content = replace_regular_links(md_content)

    # 텍스트 URL 자동 링크 감싸기
    md_content = autolink_bare_urls(md_content)


    # ⭐️ .md 수정본 생성 후 저장
    final_content = yaml_front_matter + md_content
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
        img = img.convert("RGB")  # 투명 배경 없도록 보정
        img.save(output_path, "webp", quality=quality)
    except Exception as e:
        print(f"❌ 이미지 변환 실패: {input_path} → {output_path}\n에러: {e}")


# 이미지가 들어있는 폴더를 "files/" 안으로 복사하는 함수
def copy_folder(md_path):
    """
    md_path: 원본 md 경로
    new_filename: 예시 - '2025-04-04-MLOps.md'
    """

    # 원본 이미지 폴더: md 파일 옆에 있는 동일 이름 폴더
    md_dir = os.path.dirname(md_path)
    md_filename = os.path.splitext(os.path.basename(md_path))[0]
    original_image_folder = os.path.join(md_dir, md_filename)

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

def process_md_file(filepath):
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
        md_content = file.read()

    # 마크다운 파일 생성
    write_markdown_file(filepath, md_content)

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

            # .md 파일 찾기
            md_file = None
            for root, _, files in os.walk(extract_dir):
                for f in files:
                    if f.endswith(".md"):
                        md_file = os.path.join(root, f)
                        old_filename = os.path.splitext(f)[0]
                        break

            if md_file:
                process_md_file(md_file)

            # 해제된 폴더 삭제
            shutil.rmtree(extract_dir)

            # zip 파일 삭제
            # os.remove(zip_path)

