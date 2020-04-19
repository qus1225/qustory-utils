# Qustory용 TypesScript Utils 모음 프로젝트

## 개발

- TypeScript용이므로 빌드 할 필요 없어 lint만 수행한다. (dist 폴더더 만들지 않음)
- husky로 git commit하면 commit전에 hook(lint & build)이 걸려있으므로 commit하고 배포 하면 됨

## 배포

```bash
# 1. 변경내역 커밋

# 2. 버전 업데이트

$ npm version patch[minor | major]

# 3. 배포
$ npm publish
$ git push
```
