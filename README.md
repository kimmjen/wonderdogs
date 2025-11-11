# 🐕 필승 원더독스 (Wonderdogs)

> MBC 배구 예능 "신인감독 김연경"의 여자 배구단 공식 웹사이트

## 📋 프로젝트 개요

필승 원더독스는 신인감독 김연경이 이끄는 여자 배구단의 정보를 제공하는 웹 애플리케이션입니다. 선수단 소개, 경기 일정, 통계 등을 확인할 수 있습니다.

## 🚀 기술 스택

### Frontend
- **TypeScript 5.9.3** - 타입 안정성
- **React 19.2.0** - UI 라이브러리
- **React Router DOM 7.9.5** - 라우팅
- **Vite 7.2.2** - 빌드 도구
- **Tailwind CSS 4.1.17** - 스타일링
- **pnpm** - 패키지 매니저

## 📁 프로젝트 구조

```
wonderdogs/
├── data/                      # 데이터 및 이미지
│   ├── images/               # 선수 및 로고 이미지
│   └── example.md           # 선수단 데이터 예시
│
└── frontend/                 # React 애플리케이션
    ├── public/
    ├── src/
    │   ├── components/      # 재사용 컴포넌트
    │   │   │   ├── Alert.tsx
    │   │   │   ├── Avatar.tsx
    │   │   │   ├── Badge.tsx
    │   │   │   ├── Button.tsx
    │   │   │   ├── Card.tsx
    │   │   │   ├── Input.tsx
    │   │   │   ├── Loading.tsx
    │   │   │   ├── Modal.tsx
    │   │   │   ├── PlayerCard.tsx
    │   │   │   ├── PlayerDetail.tsx
    │   │   │   └── Tabs.tsx
    │   │   │   └── Tabs.jsx
    │   │       ├── Header.tsx
    │   │       ├── Footer.tsx
    │   │       └── MainLayout.tsx
    │   │       └── MainLayout.jsx
    │   │   └── ThemeContext.tsx
    │   │   └── ThemeContext.jsx
    │   │   └── players.ts  # 선수단 데이터
    │   │   └── players.js  # 선수단 데이터
    │   │   ├── Home.tsx
    │   │   ├── Players.tsx
    │   │   ├── PlayerDetailPage.tsx
    │   │   ├── Schedule.tsx
    │   │   ├── Stats.tsx
    │   │   └── ComponentLibrary.tsx
    │   ├── types/          # TypeScript 타입 정의
    │   │   └── index.ts
    │   ├── App.tsx
    │   └── main.tsx
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 👥 선수단 구성

### 코칭스태프
- **감독**: 김연경 (4개국 리그 MVP, 2012 런던 올림픽 MVP)
- **수석코치**: 김태영
- **코치**: 이연주, 정우성

### 선수 포지션
- **아웃사이드 히터(OH)**: 표승주(주장), 백채림, 한송희, 타미라, 인쿠시
- **아포짓 스파이커(OP)**: 윤영인
- **세터(S)**: 이나연, 이진, 구솔
- **미들 블로커(MB)**: 문명화, 김나희(부주장), 김현정
- **리베로(L)**: 최수빈, 구혜인

### 지원 스태프
- 트레이너: 정종일, 이상화, 박예진
- 전력분석관: 채상민, 남예린
- 팀 매니저: 이경하, 부승관

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: `#0047AB` - 진한 파랑
- **Secondary**: `#00A3E0` - 밝은 파랑
- **Accent**: `#FFD700` - 골드/노랑
- **Dark**: `#001F3F` - 다크 네이비
- **Light**: `#E6F2FF` - 연한 파랑

- ✅ **TypeScript** - 완전한 타입 안정성
### 주요 기능
- ✅ 다크 모드 지원 (완벽한 구현)
- ✅ 다크 모드 지원
- ✅ 선수 상세 정보 및 통계
- ✅ 경기 일정 및 결과
- ✅ 재사용 가능한 컴포넌트 라이브러리

## 🛠️ 시작하기

### 설치

```bash
cd frontend
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
pnpm build
```

### 프리뷰

```bash
pnpm preview
```

## 📱 주요 페이지

1. **홈 (`/`)**: 팀 소개 및 최근 경기 결과
2. **선수단 (`/players`)**: 전체 선수 및 코칭스태프 목록
3. **선수 상세 (`/players/:id`)**: 개별 선수 정보 및 통계
4. **경기일정 (`/schedule`)**: 시즌 경기 일정 및 결과
5. **통계 (`/stats`)**: 팀 및 선수 통계
6. **컴포넌트 라이브러리 (`/components`)**: UI 컴포넌트 쇼케이스

## 📊 선수 데이터 구조

각 선수는 다음 정보를 포함합니다:
- 기본 정보: 이름, 등번호, 포지션, 생년월일
- 신체 정보: 키, 몸무게
- 소속팀 및 경력
- 경기 통계: 공격, 수비, 서브 등

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 라이선스

This project is licensed under the MIT License.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 등록해주세요.

---

**필승 원더독스!** 🏐✨

