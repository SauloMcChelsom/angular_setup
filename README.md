estudar mais rxjs

atualizar o store para versão mais robusta

colocar as rotinas do coração consentrado na pasta ./services

como redirecionamento, ....


https://www.npmjs.com/package/json-server#add-custom-routes


Install JSON Server
npm install -g json-server

Create a db.json file with some data
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

Start JSON Server
json-server --watch db.json
json-server db.json --delay 2000 --middlewares ./hello.js