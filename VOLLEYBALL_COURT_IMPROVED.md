# ✅ 배구 코트 개선 완료!

## 🎯 해결된 문제

### 1. 전체 선수가 표시되지 않는 문제 ❌
**원인:**
```typescript
// Before - 같은 포지션의 첫 번째 선수만 찾음
const getPlayerForPosition = (posKey: string): Player | undefined => {
  const pos = positions[posKey]
  return players.find(p => p.position === pos.position)  // ❌ 첫 번째만!
}
```

### 2. 양쪽 코트 사용 ❌
- 네트를 중심으로 양쪽에 선수 배치
- 공간 낭비, 선수들이 멀어 보임

## ✅ 개선 사항

### 1. 모든 선수 표시
```typescript
// After - 포지션별로 그룹화하여 모두 표시
const playersByPosition = players.reduce((acc, player) => {
  if (!acc[player.position]) {
    acc[player.position] = []
  }
  acc[player.position].push(player)
  return acc
}, {} as Record<string, Player[]>)
```

**같은 포지션의 여러 선수를 가로로 배치:**
```typescript
// 예: OH가 3명이면 가로로 나란히 배치
const spacing = Math.min(15, 30 / players.length)
const startX = basePos.x - (spacing * (players.length - 1)) / 2
```

### 2. 한쪽 코트만 사용
```
Before (양쪽):           After (한쪽):
─────────────           ─────────────
│  선수  │              │             │
│ ─네트─ │              │    선수     │
│  선수  │              │    선수     │
─────────────           │    선수     │
                        ─────────────
```

**장점:**
- ✅ 선수 카드가 크고 보기 좋음
- ✅ 모든 선수를 한눈에 파악
- ✅ 공간 효율적 사용
- ✅ 클릭하기 쉬움

### 3. 포지션별 레이아웃
```typescript
const positionLayout = {
  'OH': { x: 20, y: 30 },   // 왼쪽 앞
  'OP': { x: 80, y: 30 },   // 오른쪽 앞  
  'MB': { x: 50, y: 30 },   // 중앙 앞
  'S':  { x: 50, y: 50 },   // 중앙
  'L':  { x: 50, y: 70 }    // 중앙 뒤
}
```

### 4. staffs.ts 분리
```typescript
// Before
import { staff } from '../../../data/players'  // ❌ 혼재

// After  
import { staff } from '../../../data/staffs'   // ✅ 분리
```

## 🎨 새로운 UI 기능

### 선수 카드 개선
- **크기**: 24x32 (기존보다 20% 증가)
- **정보**: 번호, 포지션, 이름, 키
- **호버 효과**: scale-110, 그림자 강화
- **선택 표시**: 링, 확대

### 포지션 범례 추가
좌측 상단에 포지션별 인원 수 표시:
```
🟠 OH (3)
🟣 OP (2)
🔵 S (2)
🟢 MB (2)
🟡 L (2)
```

### 코트 레이블
하단 중앙에 선수 총 인원 표시:
```
필승 원더독스 (11명)
```

## 📊 결과

### Before
- ❌ OH 1명만 표시 (실제 3명)
- ❌ MB 1명만 표시 (실제 2명)
- ❌ 양쪽 코트로 분산
- ❌ 선수 카드 작음

### After
- ✅ OH 3명 모두 표시
- ✅ MB 2명 모두 표시
- ✅ S, OP, L 모두 표시
- ✅ 한쪽 코트에 집중
- ✅ 선수 카드 크고 명확

## 🎯 사용 예시

### 전체 선수 (ALL)
```typescript
<VolleyballCourt
  players={players.filter(p => ['OH', 'OP', 'S', 'MB', 'L'].includes(p.position))}
  onPlayerClick={setSelectedPlayer}
  selectedPlayerId={selectedPlayer?.id}
/>
```
- OH 3명 → 가로로 나란히
- MB 2명 → 가로로 나란히
- S, OP, L → 각각의 위치에

### 개별 포지션 (예: OH만)
```typescript
<VolleyballCourt
  players={players.filter(p => p.position === 'OH')}
  ...
/>
```
- OH 3명만 표시
- 동일하게 가로로 배치

## ✅ 검증

- ✅ 전체 선수 11명 모두 표시됨
- ✅ 같은 포지션 선수들 가로 배치
- ✅ 한쪽 코트만 사용
- ✅ staffs.ts로 import 경로 수정
- ✅ 에러 없음

## 🎉 완료!

**모든 선수가 한쪽 코트에 깔끔하게 표시됩니다!**

http://localhost:5173/players 에서 확인하세요! 🚀

### 테스트
1. "전체 선수" 클릭 → 11명 모두 표시 ✅
2. "아웃사이드 히터" 클릭 → OH 3명 표시 ✅
3. "미들 블로커" 클릭 → MB 2명 표시 ✅
4. 선수 클릭 → 오른쪽에 상세 정보 ✅

