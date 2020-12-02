# pre-commit hook のおためし

* GitHub Desktop だとエラーが出てダメ
  * .\node_modules\pre-commit\hook を開こうとして File not found. が発生している。ファイル自体は存在しているため、GitHub Desktop のパス参照が怪しい。
* コマンドプロンプトで git commit は成功。
* bash in Ubuntu で git commit も成功。

# はじめかた

```CMD
yarn init
yarn install --dev pre-commit
```

# LINK
* https://github.com/observing/pre-commit/
