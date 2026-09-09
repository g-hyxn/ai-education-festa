# ai-education-festa

AI 교육 페스타 디자인 페이지 프로젝트.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- [Pretendard](https://github.com/orioncactus/pretendard) 웹폰트 (`next/font/local`로 self-host)

## Getting Started

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 열어 확인합니다.

## Scripts

- `npm run dev` — 개발 서버 실행
- `npm run build` — 프로덕션 빌드
- `npm run start` — 프로덕션 서버 실행
- `npm run lint` — ESLint 검사

## Project Structure

```
src/
  app/
    fonts/          # 로컬 폰트 파일 (Pretendard Variable)
    layout.tsx      # 루트 레이아웃, 폰트/메타데이터 설정
    page.tsx        # 홈페이지 (현재 플레이스홀더)
    globals.css     # Tailwind 및 전역 스타일
```

현재는 초기 프로젝트 세팅 단계이며, 상세 디자인/기능 구현은 이후 별도 작업(worktree)에서 진행합니다.
