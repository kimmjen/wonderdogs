# Thread Layout Components

쓰레드 방식 레이아웃을 위한 페이지별 컴포넌트 모음입니다.

## 📁 구조

```
thread/
├── home/                     - Home 페이지 컴포넌트
│   ├── HomeLeftSidebar.tsx
│   ├── HomeCenterContent.tsx
│   ├── HomeRightSidebar.tsx
│   └── index.ts
├── players/                  - Players 페이지 컴포넌트
│   ├── PlayersLeftSidebar.tsx
│   ├── PlayersCenterContent.tsx
│   ├── PlayersRightSidebar.tsx
│   └── index.ts
├── index.ts                  - 전체 Export
└── README.md                 - 이 문서
```

## 🏠 HomeThread

### Components

- **HomeLeftSidebar**: 프로그램 로고, 탭 네비게이션, 방송 정보
- **HomeCenterContent**: 프로그램 포스터, 최종 목표
- **HomeRightSidebar**: 선택된 탭에 따른 상세 정보

### Props

```typescript
// HomeLeftSidebar
interface HomeLeftSidebarProps {
  selectedTab: 'about' | 'ratings' | 'team'
  onTabChange: (tab: 'about' | 'ratings' | 'team') => void
}

### File Structure
- `home/HomeLeftSidebar.tsx` - ~80 lines
- `home/HomeCenterContent.tsx` - ~60 lines
- `home/HomeRightSidebar.tsx` - ~80 lines

// HomeCenterContent
// Props 없음

// 방법 1: thread에서 직접 import
// HomeRightSidebar
interface HomeRightSidebarProps {
// 방법 2: 하위 폴더에서 import
import { HomeLeftSidebar, HomeCenterContent, HomeRightSidebar } from './thread/home'

  selectedTab: 'about' | 'ratings' | 'team'
}
```

### Usage

```tsx
import { HomeLeftSidebar, HomeCenterContent, HomeRightSidebar } from './thread'

const [selectedTab, setSelectedTab] = useState<'about' | 'ratings' | 'team'>('about')

<ThreadLayout
  left={<HomeLeftSidebar selectedTab={selectedTab} onTabChange={setSelectedTab} />}
  center={<HomeCenterContent />}
  right={<HomeRightSidebar selectedTab={selectedTab} />}
/>
```

## 🏐 PlayersThread

### Components

- **PlayersLeftSidebar**: 포지션별 네비게이션
- **PlayersCenterContent**: 배구 코트, 코칭스태프, 지원스태프
- **PlayersRightSidebar**: 선택된 선수 상세 정보

### Props

```typescript
type PositionKey = 'OH' | 'OP' | 'S' | 'MB' | 'L' | 'COACH' | 'STAFF'

// PlayersLeftSidebar
interface PlayersLeftSidebarProps {
  selectedPosition: PositionKey
  onPositionChange: (position: PositionKey) => void
}

// PlayersCenterContent
interface PlayersCenterContentProps {
  selectedPosition: PositionKey
  players: Player[]
  selectedPlayer: Player | null
  onPlayerClick: (player: Player) => void
}

// PlayersRightSidebar
interface PlayersRightSidebarProps {
  selectedPlayer: Player | null
}
```

### Usage

```tsx
import { PlayersLeftSidebar, PlayersCenterContent, PlayersRightSidebar } from './thread'

const [selectedPosition, setSelectedPosition] = useState<PositionKey>('OH')
const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

<ThreadLayout
  left={
    <PlayersLeftSidebar 
      selectedPosition={selectedPosition}
      onPositionChange={(pos) => {
        setSelectedPosition(pos)
        setSelectedPlayer(null)
      }}
    />
  }
  center={
    <PlayersCenterContent
      selectedPosition={selectedPosition}
      players={players}
1. `thread/newpage/` 디렉토리 생성
2. 각 섹션별 파일 생성:
   - `NewPageLeftSidebar.tsx`
   - `NewPageCenterContent.tsx`
   - `NewPageRightSidebar.tsx`
   - `index.ts`
    />
  }
  right={<PlayersRightSidebar selectedPlayer={selectedPlayer} />}
### Template Structure

```
thread/
└── newpage/
    ├── NewPageLeftSidebar.tsx
    ├── NewPageCenterContent.tsx
    ├── NewPageRightSidebar.tsx
    └── index.ts
```

### Template Code
```

// newpage/NewPageLeftSidebar.tsx

1. **왼쪽(Left)**: 네비게이션 및 필터
2. **가운데(Center)**: 메인 컨텐츠 (포스터, 코트 등)
3. **오른쪽(Right)**: 선택된 항목의 상세 정보

## 📝 추가 페이지 가이드

새로운 쓰레드 페이지를 추가할 때:
// newpage/NewPageCenterContent.tsx

1. `thread/NewPageThread.tsx` 파일 생성
2. `LeftSidebar`, `CenterContent`, `RightSidebar` 컴포넌트 구현
3. `thread/index.ts`에 export 추가
// newpage/NewPageRightSidebar.tsx
4. 메인 페이지에서 import하여 사용

### Template

// newpage/index.ts
export { NewPageLeftSidebar } from './NewPageLeftSidebar'
export { NewPageCenterContent } from './NewPageCenterContent'
export { NewPageRightSidebar } from './NewPageRightSidebar'


### 장점
- 파일 크기 관리 용이 (각 파일 50-100줄)
- 컴포넌트별 독립적 수정
- 명확한 폴더 구조
- 재사용성 향상
```tsx
// NewPageThread.tsx
interface NewPageLeftSidebarProps {
  // props
}

export const NewPageLeftSidebar = (props: NewPageLeftSidebarProps) => {
  return <div>...</div>
}

export const NewPageCenterContent = () => {
  return <div>...</div>
}

export const NewPageRightSidebar = () => {
  return <div>...</div>
}
```

