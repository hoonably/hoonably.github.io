---
layout: post
title: "PixArt-Σ: Weak-to-Strong Training of Diffusion Transformer for 4K Text-to-Image Generation"
description:
date: 2025-02-09 16:09:52 +09:00
tags: AI
categories: Paper
giscus_comments: true
related_posts: false

featured: false
pretty_table: true

toc:
  beginning: false  # 맨 앞에 목차
  sidebar: left  # 목차가 사이드바 왼쪽에 붙어있음
---

Authors: Junsong Chen, Chongjian Ge, Enze Xie, Yue Wu, Lewei Yao, Xiaozhe Ren, Zhongdao Wang, Ping Luo, Huchuan Lu, Zhenguo Li
Venue & Year: 24, ArXiv
날짜: 2025년 2월 9일

| ArXiv | https://arxiv.org/abs/2403.04692 |
| --- | --- |
| Project Page | https://pixart-alpha.github.io/PixArt-sigma-project/ |
| Github Code | https://github.com/PixArt-alpha/PixArt-sigma |

[250213_JeonghoonPark_PixArt-Σ_ Weak-to-Strong_Training.pptx](/files/2025-02-09-pixart-sigma/250213_JeonghoonPark_PixArt-__Weak-to-Strong_Training.pptx)

[250213_JeonghoonPark_PixArt-Σ_ Weak-to-Strong_Training.pdf](/files/2025-02-09-pixart-sigma/250213_JeonghoonPark_PixArt-__Weak-to-Strong_Training.pdf)

[**PixArt-α: Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis**](https://www.notion.so/PixArt-Fast-Training-of-Diffusion-Transformer-for-Photorealistic-Text-to-Image-Synthesis-198451cf7b798018891cfb85e1cd3523?pvs=21) 

> 💡
> 
> **Key Differentiator**
> 
> - 기존 연구였던 PixArt-α에서 최적화를 통해 4K 초고해상도까지 가능하도록 연구
> - 4K를 transformer를 활용해 directly로 한번에 생성
{: .block-warning }

# 2. Related Work

### **1️⃣ PixArt-α (ICLR 2024 Spotlight)**

- **최초의 Transformer 기반 Diffusion Model (DiT)로 1024×1024 해상도까지 생성 가능**

### **2️⃣ Stable Diffusion XL (SDXL, 2023)**

- **Latent Diffusion Model (LDM) 구조를 활용하여 1024×1024 이상의 고해상도 이미지 생성 가능**

### **3️⃣ GigaGAN (Adobe, 2023)**

- **GAN 기반 초고해상도 이미지 생성 모델 (1024px 이상 지원)**

### **4️⃣ LLaVA (Visual Instruction Tuning, 2023)**

- **이미지-텍스트 정렬을 학습하여 이미지에 대한 설명(캡션)을 자동으로 생성하는 모델**

### **5️⃣ DALL·E 3 (OpenAI, 2023)**

- **GPT-4 기반 텍스트 이해력을 활용하여 프롬프트를 더 정밀하게 반영**

# 3. Framework

## 3.1 Data Analysis

|  | **Data** |  |
| --- | --- | --- |
| Internal-α | 14M |  |
| **Internal-Σ** | **33M** | >=1K (33M)<br>real photo 4K (8M) |
| SD v1.5<br>(open-source) | 2B |  |

a 때보다 데이터가 많이 늘었고, 4K real photo도 추가함.

하지만 SD v1.5가 2B 데이터인걸 감안하면 아주 제한적인 데이터.

하지만 효과적으로 training함.

이미지의 예술적 품질을 평가하는 Aesthetic Scoring Model(AES)을 사용하여 **2M(200만 장)의 고품질 이미지 선별**.

 → 해상도가 높아질수록 모델의 충실도(프레셰 초점 거리(FID) [18])와 의미적 정렬(CLIP 점수)이 향상

### Better Text-Image Alignment

➡ **텍스트 프롬프트(설명)와 생성된 이미지가 얼마나 일치하는지**

**즉, 사용자가 입력한 텍스트(prompt)와 모델이 생성한 이미지가 얼마나 정확하게 대응하는지를 평가하는 개념**

---

PixArt-α 는 LLaVa를 사용하였고, PixArt-Σ는 Share-Captioner 사용

| 항목 | LLaVA | Share-Captioner |
| --- | --- | --- |
| **기반 모델** | CLIP + LLaMA | GPT-4V (GPT-4 with Vision) |
| **텍스트 생성** | 비교적 단순 | 더 길고 세밀한 설명 |
| **정확도** | 가끔 환각 문제 발생 | 더 높은 정확도 |
| **이미지 디테일 반영** | 제한적 (단순 설명) | 더 정밀한 객체 및 관계 설명 |
| **캡션 품질** | 일반적인 설명 수준 | 고품질, 구체적인 묘사 가능 |

다음과 같은 환각 (Hallucinations)가 발생했었음

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image.png" class="img-fluid rounded z-depth-1" zoomable=true %}

| **항목** | **PixArt-α** | **PixArt-Σ** |
| --- | --- | --- |
| **텍스트 해석 길이** | 120 토큰 | **300 토큰 (2.5배 증가)** |
| **캡션 생성 모델** | LLaVA (단순함) | **Share-Captioner (정확한 설명)** |
| **CLIP Score** | 0.2787 | **0.2797 (향상됨)** |
| **환각 문제 해결** | 일부 존재 | **환각 감소 (더 정밀한 캡션 사용)** |

➡ **PixArt-Σ는 더 긴 문장을 해석하고, 더 정교한 캡션을 사용하여 텍스트-이미지 정렬 성능을 높였음**.

➡ **Share-Captioner를 사용하여 텍스트와 이미지 간 정보 일치도를 개선**함.

### 평가 데이터셋 구성 (High-Quality Evaluation Dataset)

- 기존 모델들이 사용하는 **MSCOCO 데이터셋은 예술적 품질과 텍스트-이미지 정렬을 평가하기에 충분하지 않음**.
- 따라서 PixArt-Σ는 **새로운 평가 데이터셋(30,000개 샘플) 구축**.
- 평가 항목:
    1. **Fréchet Inception Distance (FID)** → 이미지 품질 평가
    2. **CLIP Score** → 텍스트-이미지 정렬 성능 평가

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%201.png" class="img-fluid rounded z-depth-1" zoomable=true %}

## 3.2 Efficient DiT Design

### **Key-Value (KV) Token Compression 기법**

**🔹 기존 Attention 연산 문제**

- Self-Attention은 **Query(Q), Key(K), Value(V)의 곱을 계산**하는 방식이므로,토큰 개수가 많아질수록 **연산량이 O(N²)으로 증가**함.
- **해결 방법**: Key와 Value 토큰을 압축하여 연산량을 줄임.

**🔹 PixArt-Σ의 KV Token Compression 방식**

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%202.png" class="img-fluid rounded z-depth-1" zoomable=true %}

- **PixArt-Σ (토큰 압축 적용)**:
    - Key(K)와 Value(V)를 **Stride 2의 Group Convolution**을 사용해 압축
    - 이를 통해 토큰 개수를 **N → N/R^2 으로 줄임**
    - 정확도가 크게 떨어지지 않는 선에서 R을 조정 (1~4)하기
    - 최종적으로 **연산량을 기존 대비 약 34% 절감**

 **핵심 효과**

- **4K 해상도 이미지 생성 속도 향상** (연산량 감소)
- **메모리 사용량 감소 → 더 작은 GPU에서도 실행 가능**
- **기존 PixArt-α 모델에서 자연스럽게 업그레이드 가능** (기존 모델의 가중치를 활용)

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%203.png" class="img-fluid rounded z-depth-1" zoomable=true %}

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%204.png" class="img-fluid rounded z-depth-1" zoomable=true %}

## 3.3 Weak-to-Strong Training Strategy

PixArt-Σ의 Weak-to-Strong Training은 **기존 모델의 가중치를 활용하여 빠르게 적응하도록 설계됨**.

이 과정에서 **3단계의 학습 전략**이 적용됨.

### **(1) VAE 적응 (VAE Adaptation)**

- PixArt-α에서 사용하던 기존 VAE를 **Stable Diffusion XL(SDXL)의 VAE로 교체**
- **VAE 교체 후 빠른 적응을 위해 2K Training Steps 만에 수렴하도록 학습 전략 적용**.
- 새로운 VAE 적용 후에도 **기존 모델의 가중치를 재사용하여 빠르게 학습 가능**.

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%205.png" class="img-fluid rounded z-depth-1" zoomable=true %}

### **(2) 해상도 업그레이드 (Resolution Upscaling)**

- 256px → 512px → 1024px → 4K로 점진적으로 해상도를 증가시키며 학습.

- **PE Interpolation**(위치 임베딩 보간법)을 적용하여, 기존 해상도의 가중치를 새 해상도에서도 자연스럽게 사용 가능하도록 조정.
    - 보간법 (Interpolation)은 **알려진 값을 기반으로 값을 계산하는 프로세스**
    - Transformer 기반 모델(예: DiT, ViT 등)은 **입력 이미지의 각 위치 정보를 표현하기 위해 위치 임베딩을 사용**.
    - 모델이 256×256에서 학습되었다면, **256×256 해상도에 최적화된 위치 임베딩을 학습함**.
    - 하지만 해상도를 1024×1024로 증가시키면, **기존 256×256 위치 임베딩과 구조가 달라져 모델 성능이 급격히 저하됨**.
    - 기존 위치 임베딩을 1024×1024 크기로 보간(interpolation)
    - 즉, 256개의 값을 1024개로 확장하는 과정에서 자연스럽게 매끄러운 값으로 변환됨.
    - 이를 통해 새로운 해상도에서도 기존 모델의 공간 정보가 유지됨.

- **단 1000 Training Steps만으로도 해상도 증가에 적응 가능**.

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%206.png" class="img-fluid rounded z-depth-1" zoomable=true %}

### **(3) KV Token Compression 도입 (연산 최적화)**

- PixArt-Σ 모델은 KV Token Compression을 적용했음
- 하지만 **기존 모델과 구조가 달라서 성능 저하 위험이 있음**.
- PixArt-Σ에서는 **기존 모델에서 자연스럽게 적응하도록 "Conv Avg Init." 전략 적용**.

### **평균 연산(Averaging) 기반 초기화**

- **Conv Avg Init은 가중치 값을 `1/R²`로 설정하여, 기존 정보를 최대한 유지하면서 부드럽게 전환함**.
- **즉, 단순히 압축하는 것이 아니라 기존 공간 정보를 최대한 보존하는 방식**.

- 초기에는 압축 없이 학습 후, **학습이 안정화되면 KV Compression을 적용하여 연산량 감소**.
- **4K 이미지 생성 시 연산량 34% 절감**.

 **결과적으로, 기존 PixArt-α 대비 적은 연산량과 빠른 학습으로 4K 이미지 생성이 가능해짐.**

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%207.png" class="img-fluid rounded z-depth-1" zoomable=true %}

# 4. Experiment

## 4.1 Implementation Details (구현 세부사항)

### **1. 모델 구성**

 **텍스트 인코더**

- **Flan-T5-XXL 사용** (Imagen 및 PixArt-α와 동일)
- 기존 모델에서 **120개 토큰**을 사용하던 것을 **300개 토큰까지 확장**하여 더 정밀한 텍스트-이미지 정렬 가능.

 **VAE (Variational Autoencoder) 적용**

- **Stable Diffusion XL(SDXL)의 VAE 사용**
- **더 높은 품질의 이미지 디코딩 가능** → 세밀한 디테일 보존

 **기반 모델**

- **PixArt-α를 베이스 모델로 사용**
- **256px 사전 학습된 체크포인트를 활용하여 4K까지 확장**

 **KV Token Compression 적용**

- **연산량 34% 절감**
- **초고해상도(4K) 이미지 생성을 가능하게 함**

---

### **2. 학습 환경 및 하드웨어**

 **훈련 GPU 환경**

- **1K 모델 학습: 32 V100 GPUs 사용**
- **2K & 4K 모델 학습: 16 A100 GPUs 사용**

 **최적화 알고리즘**

- **CAME Optimizer 사용** (AdamW 대신)
- **학습률: 2e-5 (고정 Learning Rate 사용)**
- **Weight Decay: 0**

 **Position Embedding Interpolation (PE Interp.) 적용**

- 낮은 해상도에서 학습된 모델을 고해상도로 변환할 때 **위치 임베딩을 보간(interpolation)하여 적용**.
- 이를 통해 **고해상도로 확장 시 성능 저하 없이 빠르게 적응 가능**.

---

### **3. 학습 데이터 및 훈련 과정**

 **훈련 데이터셋**

- **총 33M(3,300만 개)의 고해상도 이미지 사용**
- **1K 해상도 이상의 데이터만 포함**
- **4K 해상도 이미지 2.3M(230만 개) 포함**
- **Aesthetic Scoring Model(AES) 적용하여 고품질 이미지 선별**

 **훈련 과정**

- **256px → 512px → 1024px → 4K 해상도로 점진적 업스케일링 적용**
- **VAE 교체 후 2K Training Steps 내 빠르게 적응**
- **PE Interpolation을 적용하여 고해상도에서 추가 학습 비용 절감**

 **학습 비용 절감**

- 기존 PixArt-α 대비 **훈련 비용 9%만 사용하여 1K 생성 가능**
- **KV Compression과 Weak-to-Strong Training을 결합하여 GPU 비용 절감**

## 4.2 실험 결과

## **1. 이미지 품질 비교 (Qualitative Evaluation)**

PixArt-Σ는 **포토리얼리즘(Photorealism), 디테일 수준, 스타일 다양성 측면에서 이전 모델보다 개선됨**.

아래와 같은 모델들과 비교됨:

{% include figure.liquid loading="eager" path="files/2025-02-09-pixart-sigma/image%208.png" class="img-fluid rounded z-depth-1" zoomable=true %}

## PixArt-α vs PixArt-Σ

| 항목 | PixArt-α (기존) | PixArt-Σ (개선) |
| --- | --- | --- |
| **최대 해상도** | 1K (1024×1024) | **4K (3840×2160) 지원** |
| **연산량 최적화** | 없음 | **KV Token Compression 적용 (연산량 34% 감소)** |
| **VAE 모델** | 기본 VAE | **SDXL VAE로 변경 (고품질 이미지 생성 가능)** |
| **학습 전략** | 일반 학습 | **Weak-to-Strong Training (기존 모델 활용하여 빠르게 학습)** |
| **텍스트 길이** | 120 토큰 | **300 토큰으로 확장 (더 정밀한 텍스트-이미지 정렬 가능)** |
| **훈련 비용** | 높음 | **기존 대비 GPU 비용 9%로 절감** |

### **PixArt-Σ vs. MobileDiffusion 비교표**

| 항목 | **PixArt-Σ** | **MobileDiffusion** | 비교 |
| --- | --- | --- | --- |
| **목표** | **4K 초고해상도 이미지 생성** | **모바일에서 실시간 생성 가능하도록 최적화** | PixArt-Σ는 초고해상도 생성, MobileDiffusion은 On-Device 최적화 |
| **모델 구조** | **Diffusion Transformer (DiT)** 기반 | **Latent Diffusion + Optimized UNet** | PixArt-Σ는 Transformer 기반, MobileDiffusion은 UNet 기반 |
| **텍스트 인코더** | **Flan-T5-XXL (300 토큰까지 가능)** | **CLIP-ViT/L14 (텍스트-이미지 효율성 극대화)** | PixArt-Σ가 더 긴 텍스트 입력 가능, MobileDiffusion은 가벼움 |
| **이미지 해상도** | **4K (3840×2160) 직접 생성 가능** | **512×512 (On-Device에서 빠르게 생성)** | PixArt-Σ는 초고해상도, MobileDiffusion은 저해상도 최적화 |
| **KV Token Compression** | **Self-Attention 연산량 34% 절감 (R=2, R=4 적용)** | ❌ 사용하지 않음 | PixArt-Σ는 4K 최적화, MobileDiffusion은 경량 모델이라 필요 없음 |
| **모델 크기** | **0.6B 파라미터 (SDXL: 2.6B 대비 작음)** | **386M (SD-1.5 대비 55% 축소)** | MobileDiffusion이 더 작음 |
| **VAE (Autoencoder)** | **SDXL VAE 사용 (고품질 이미지 복원 가능)** | **경량화된 VAE 적용 (512px에서 최적화됨)** | PixArt-Σ는 품질 우선, MobileDiffusion은 속도 우선 |
| **해상도 업스케일링 기법** | **PE Interpolation (기존 모델을 고해상도로 자연스럽게 변환)** | **512px 고정 (Upscaling 없음)** | PixArt-Σ는 해상도 확장 가능, MobileDiffusion은 저해상도 고정 |
| **연산 최적화** | **Weak-to-Strong Training (기존 모델 재사용으로 학습 비용 절감)** | **Transformer 블록 제거 + Convolution 기반 최적화** | PixArt-Σ는 기존 모델 활용, MobileDiffusion은 경량화 모델 |
| **On-Device 실행 가능 여부** | ❌ 불가능 (고성능 GPU 필요) |  가능 (iPhone 15 Pro에서 0.2초 생성) | MobileDiffusion이 훨씬 가벼움 |
| **학습 데이터 크기** | **33M (4K 데이터 포함, SD v1.5의 1.65%)** | **150M (모바일 최적화된 데이터)** | MobileDiffusion이 더 큰 데이터셋 사용 |
| **이미지 품질 평가 (FID Score)** | **8.23 (PixArt-α 대비 개선됨)** | **11.67 (1-step) / 8.65 (50-step DDIM)** | PixArt-Σ가 품질 우수, MobileDiffusion은 속도 최적화 |
| **텍스트-이미지 정렬 (CLIP Score)** | **0.2797 (PixArt-α 대비 향상됨)** | **0.320 (1-step) / 0.325 (50-step DDIM)** | MobileDiffusion이 더 나은 정렬 성능 |
| **생성 속도** | ❌ 느림 (4K 생성에 고사양 GPU 필요) |  0.2초 (iPhone 15 Pro에서 실시간 생성) | MobileDiffusion이 훨씬 빠름 |