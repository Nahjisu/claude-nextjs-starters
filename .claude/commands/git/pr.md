---
description: '현재 브랜치의 변경사항을 분석해 PR을 생성합니다'
allowed-tools:
  [
    'Bash(git status:*)',
    'Bash(git diff:*)',
    'Bash(git log:*)',
    'Bash(git branch:*)',
    'Bash(git push:*)',
    'Bash(gh pr create:*)',
    'Bash(gh pr view:*)',
    'Bash(gh repo view:*)',
  ]
---

# Claude 명령어: PR

현재 브랜치가 base 브랜치(main)에서 분기된 이후의 변경사항을 분석해 잘 정리된 PR을 생성합니다.

## 사용법

```
/pr
```

## 프로세스

1. 현재 브랜치 확인, base 브랜치(main)와 같으면 새 브랜치 생성 필요 여부 확인
2. `git status`로 미커밋 변경사항 확인 — 있으면 먼저 커밋할지 사용자에게 확인
3. 원격 추적 브랜치 여부 확인, 없거나 뒤처져 있으면 push 여부 확인 후 `-u`로 push
4. `git log main..HEAD`, `git diff main...HEAD`로 분기 이후의 전체 커밋 분석 (마지막 커밋만 보지 않음)
5. 제목과 본문 작성
6. `gh pr create`로 PR 생성, 생성된 PR URL 반환

## PR 제목 포맷

`<이모지> <타입>: <설명>` (커밋 컨벤션과 동일, [[git/commit]] 참고)

- 70자 미만
- 여러 타입이 섞여 있으면 가장 핵심적인 변경을 대표하는 타입 선택

## PR 본문 포맷

```markdown
## Summary

- 변경사항 핵심 내용 1~3개 bullet

## Test plan

- [ ] 테스트 체크리스트
```

## 규칙

- base 브랜치는 기본적으로 `main`
- 분기 이후 **모든 커밋**을 분석 (최신 커밋만 보고 작성하지 않음)
- 본문은 "무엇"보다 "왜"에 집중
- **PR 본문에 Claude 서명 절대 추가하지 않음**
- push, PR 생성 전 사용자에게 확인
