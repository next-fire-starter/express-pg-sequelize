## Express, Sequelize, PostgreSQL, JEST

##### ライブラリのインストール
```
npm install sequelize
npm install pg
npm install --save-dev sequelize-cli
```

##### config,migrations,models作成
```
npx sequelize init
```

##### database作成 config/config.jsonのdevelopmentより作成
```
npx sequelize db:create
```

#### models/memo.js migrations/YYYYMMDD130016-create-memo.js 作成 
##### テーブル名が複数形になる。　作成日と更新日が自動で追加される　キーが無い場合はid項目が追加される
```
npx sequelize model:generate --name 'memos' --attributes 'title:string, note:string'
```

##### memoテーブル作成
```
npx sequelize db:migrate
```

##### データ作成 seeders/memo.jsから作成される
```
npx sequelize db:seed:all
```

##### データ作成を戻す（テーブル初期化）
```
npx sequelize db:seed:undo:all
```
