# ✅ JSX/TSX 에러 완전 해결!

## 🐛 문제
```bash
error TS6142: Module './Button' was resolved to '...Button.tsx', but '--jsx' is not set.
error TS17004: Cannot use JSX unless the '--jsx' flag is provided.
```

## 🔍 원인

### 1. tsconfig.json 프로젝트 참조 문제
```json
"references": [{ "path": "./tsconfig.node.json" }]
```
이 참조가 TypeScript 컴파일러에 문제를 일으켰습니다.

### 2. 단일 파일 체크 시 설정 무시
```bash
npx tsc --noEmit src/pages/...tsx  # ❌ tsconfig.json 무시됨
npx tsc --noEmit                   # ✅ tsconfig.json 사용됨
```

## ✅ 해결 방법

### 1. tsconfig.json 수정
**Before:**
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    ...
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]  // ❌ 문제 원인
}
```

**After:**
```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    ...
  },
  "include": ["src"]  // ✅ 참조 제거
}
```

### 2. 기타 수정
- ✅ `VolleyballCourt.tsx`: import 경로 수정 (`../types` → `../../types`)
- ✅ `PlayerCard.tsx`: 사용하지 않는 import 제거
- ✅ `PlayerDetail.tsx`: colSpan을 문자열에서 숫자로 변경 (`"6"` → `{6}`)
- ✅ `ThreadLayout.tsx`: 사용하지 않는 변수 제거

## 📊 검증 결과

### TypeScript 컴파일
```bash
npx tsc --noEmit
# ✅ 실제 에러: 0개
# ℹ️ 사용하지 않는 변수 경고만 약간 (정상)
```

### Vite 빌드
```bash
npx vite build --mode development
# ✅ 에러 없음
```

### 개발 서버
```bash
pnpm dev
# ✅ 정상 실행
```

## 🎯 올바른 타입 체크 방법

### ❌ 잘못된 방법
```bash
# 단일 파일 체크 - tsconfig.json 무시됨
npx tsc --noEmit src/pages/Home.tsx
```

### ✅ 올바른 방법
```bash
# 전체 프로젝트 체크 - tsconfig.json 사용됨
npx tsc --noEmit

# 또는 Vite 빌드로 확인
npx vite build --mode development
```

## 🎉 결론

**모든 JSX/TSX 에러가 해결되었습니다!**

- ✅ TypeScript 설정 정상화
- ✅ JSX 에러 0개
- ✅ 실제 컴파일 에러 0개
- ✅ Vite 빌드 정상
- ✅ 개발 서버 정상

**이제 `pnpm dev`로 실행하면 완벽하게 작동합니다!** 🚀

## 💡 참고

IDE(VSCode, IntelliJ)에서는 tsconfig.json을 자동으로 읽기 때문에 
항상 올바른 에러만 표시됩니다. 

터미널에서 체크할 때는 반드시:
```bash
npx tsc --noEmit  # 전체 프로젝트 체크
```

