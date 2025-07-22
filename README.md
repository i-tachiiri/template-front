## Typescript の有効化

npm init -y
npm install -D typescript
npx tsc --init
npm install -D copyfiles

npx tsc
package.json は pages のビルド用に書き換えておく

```
npx wrangler pages dev dist

```
