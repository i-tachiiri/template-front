## テンプレート作成時

Typescript と copyfile をインストールしておく。

```
npm init -y
npm install -D typescript
npx tsc --init
npm install -D copyfiles
npx tsc
```

## プロジェクト作成時

基本的にはテンプレートで開発を進め、概ね完成した時点で独立させる。
package.json の name を変更する事でデプロイ先を変更できる。
