# note

```sh
mkdir lerna-repo
cd lerna-repo
git init
lerna init
npm i
mkdir packages/simple-nlp packages/simple-service
cd packages/simple-nlp && npm init -y && cd -
cd packages/simple-service && npm init -y && cd -
lerna exec "cp ../../.gitignore ."
lerna add jest --dev
lerna add typescript --dev
lerna add @types/natural packages/simple-nlp
```