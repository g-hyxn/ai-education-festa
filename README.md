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
    page.tsx        # 홈페이지 (메인 화면 디자인 초안)
    globals.css     # Tailwind 및 전역 스타일
  components/       # 홈페이지 섹션 컴포넌트 (헤더/히어로/일정/사전신청 등)
```

현재 홈페이지는 "AI미래교육박람회" 메인 화면 디자인 초안이며, 장소·주최기관 등 미확정 정보는 "추후 공지"로 표기했습니다.
학생마당·교사마당·사전신청 등 세부 페이지와 실제 등록/실시간 기능 구현은 이후 별도 작업(worktree)에서 진행합니다.
