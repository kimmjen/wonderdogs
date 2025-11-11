# Pages Directory Structure

프로젝트의 모든 페이지 컴포넌트를 레이아웃 방식에 따라 구조화했습니다.

## 📁 디렉토리 구조

```
pages/
├── Home.tsx                    - ThreadLayout 사용 (홈)
├── Players.tsx                 - ThreadLayout 사용 (선수단)
├── main/                       - MainLayout 사용 페이지들
│   ├── PlayerDetailPage.tsx   - 선수 상세
│   ├── Schedule.tsx           - 경기 일정
│   ├── Stats.tsx              - 통계
│   ├── ComponentLibrary.tsx   - 컴포넌트 라이브러리
│   └── index.ts               - Export
└── thread/                     - ThreadLayout 컴포넌트들
    ├── home/                   - Home 페이지 컴포넌트
    │   ├── HomeLeftSidebar.tsx
    │   ├── HomeCenterContent.tsx
    │   ├── HomeRightSidebar.tsx
    │   └── index.ts
    ├── players/                - Players 페이지 컴포넌트
    │   ├── PlayersLeftSidebar.tsx
    │   ├── PlayersCenterContent.tsx
    │   ├── PlayersRightSidebar.tsx
    │   └── index.ts
    ├── index.ts
    └── README.md
```

## 🎯 레이아웃별 분류

### ThreadLayout (쓰레드 방식)
**특징**: Left Sidebar + Center Content + Right Sidebar

**페이지**:
- `Home.tsx` - 프로그램 소개
- `Players.tsx` - 선수단 & 배구 코트

**컴포넌트 위치**: `thread/`

### MainLayout (기본 방식)
**특징**: Header + Content + Footer

**페이지**:
- `PlayerDetailPage.tsx` - 선수 상세 정보
- `Schedule.tsx` - 경기 일정
- `Stats.tsx` - 통계
- `ComponentLibrary.tsx` - 컴포넌트 라이브러리

**컴포넌트 위치**: `main/`

## 📦 Import 방법

### Thread 페이지 (Home, Players)
```tsx
// 페이지 자체
import Home from './pages/Home'
import Players from './pages/Players'

// 페이지 내부 컴포넌트
import { HomeLeftSidebar, HomeCenterContent, HomeRightSidebar } from './pages/thread'
```

### Main 페이지
```tsx
// 한 번에 import
import { PlayerDetailPage, Schedule, Stats, ComponentLibrary } from './pages/main'

// 개별 import
import PlayerDetailPage from './pages/main/PlayerDetailPage'
```

## 🔄 App.tsx 라우팅 구조

```tsx
<Routes>
  {/* ThreadLayout 페이지 */}
  <Route path="/" element={<Home />} />
  <Route path="/players" element={<Players />} />
  
  {/* MainLayout 페이지 */}
  <Route path="/players/:id" element={<MainLayout><PlayerDetailPage /></MainLayout>} />
  <Route path="/schedule" element={<MainLayout><Schedule /></MainLayout>} />
  <Route path="/stats" element={<MainLayout><Stats /></MainLayout>} />
  <Route path="/components" element={<MainLayout><ComponentLibrary /></MainLayout>} />
</Routes>
```

## 📊 파일 개수

- **Thread 페이지**: 2개 (Home, Players)
- **Thread 컴포넌트**: 6개 (각 페이지당 3개)
- **Main 페이지**: 4개
- **Total**: 12개 페이지/컴포넌트

## ✨ 장점

### 1. 명확한 구조
- 레이아웃별로 폴더 분리
- 페이지 역할이 명확

### 2. 관리 용이
- 관련 파일들이 함께 위치
- 찾기 쉬운 구조

### 3. 확장성
- 새 페이지 추가가 쉬움
- 레이아웃별로 그룹화

### 4. Import 간소화
- `main/index.ts`로 통합 export
- `thread/index.ts`로 통합 export

## 🚀 새 페이지 추가 방법

### ThreadLayout 페이지 추가
1. `pages/NewPage.tsx` 생성 (State 관리)
2. `pages/thread/newpage/` 폴더 생성
3. Left/Center/Right 컴포넌트 생성
4. `thread/index.ts`에 export 추가

### MainLayout 페이지 추가
1. `pages/main/NewPage.tsx` 생성
2. `main/index.ts`에 export 추가
3. `App.tsx`에 라우팅 추가

## 📝 컨벤션

### 파일 네이밍
- 페이지: PascalCase (`Home.tsx`, `Players.tsx`)
- 컴포넌트: PascalCase + 설명 (`HomeLeftSidebar.tsx`)
- Export 파일: `index.ts`

### 폴더 네이밍
- 레이아웃 타입: lowercase (`main/`, `thread/`)
- 페이지별: lowercase (`home/`, `players/`)

### Import 패턴
```tsx
// ✅ 권장: 통합 import
import { PlayerDetailPage } from './pages/main'

// ✅ 가능: 직접 import
import PlayerDetailPage from './pages/main/PlayerDetailPage'

// ❌ 비권장: 상대 경로가 길 때
import PlayerDetailPage from '../../../pages/main/PlayerDetailPage'
```

## 🎉 결론

**완벽한 구조화!**
- ✅ ThreadLayout 페이지 → `thread/` 폴더
- ✅ MainLayout 페이지 → `main/` 폴더
- ✅ 각 페이지 컴포넌트 모듈화
- ✅ 명확한 import 경로
- ✅ 확장 가능한 구조

