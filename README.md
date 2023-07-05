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
json-server --watch db.json --delay 2000
json-server db.json --delay 2000 --middlewares ./hello.js
----------------

ng g m shared/components/skeleton
ng g c shared/components/skeleton

ng g m pages/admin/course --routing
ng g c pages/admin/course
ng g s pages/admin/course
ng g i pages/admin/course


https://blog.logrocket.com/angular-state-management-made-simple-with-ngrx/


- form create e detail em um so, duplicaçao de codigp
- renomer BOOK por Apps ver em services/store/index.actions.ts
- centralizar model em um so lugar ver em app-form-detail e app-form
- index.selectors.ts refatoras nomes de seletores mas significativos