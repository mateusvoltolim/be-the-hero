# Be The Hero

#### Projeto desenvolvido durante a Semana OmniStack 11.0, realizada pela [Rocketseat](https://rocketseat.com.br/) :rocket::seat: e ministrada por @diego3g.

**Be The Hero**, disponibiliza às ONG's a possibilidade de divulgar um caso (incidente) e pedir ajuda à comunidade, carinhosamente :heart: chamados de **heróis** :muscle:, com os custos :moneybag:

O foco do projeto são para as ONG's que cuidam de animais :cat: :dog: :hatched_chick:, mas nada impede que outros tipos de ONG's utilizem a plataforma. No final, o que importa é ajudar a todas elas em suas causas.

## Sobre o projeto:

Foi dividido em 3 partes, back-end, front-end e mobile. Tudo feito com **JavaScript***.

### back-end :hammer:

O back-end foi feito utilizando [Noje.js](https://nodejs.org/en/) e nele implementamos algumas funcionalidades:

* Cadastro de ONG's
* Cadastro de Casos (incidentes)

Nessa parte do projeto, utilizamos como dependências:

* [**nodemon**](https://nodemon.io/) :arrows_counterclockwise:, para não precisarmos reiniciar o servidor node a cada alteração. Usado apenas no contexto de desenvolvimento.
* [**knex**](http://knexjs.org/) :electric_plug:, para a integração com o banco de dados.
  * Vale ressaltar que utilizei o PostgreSQL como banco de dados durante o desenvolvimento, diferente do @diego3g que utilizou o SQLite3. Utilizar o PgSQL foi uma escolha pessoal, para esse primeiro momento, mas logo em seguida, na implementação dos testes de integração, fiz uso do SQLite3.
* [**express**](http://expressjs.com/) :computer::repeat::computer:, para criação das rotas.
* [**cors**](https://github.com/expressjs/cors) :rose:, para melhorar as respostas de erro de cada rota.
* [**celebrate**](https://github.com/arb/celebrate) :sparkles:, para criar validações nas rotas mais críticas, como de update e delete.
* [**cross-env**](https://github.com/kentcdodds/cross-env) :office:, para permitir identificar que ambiente está rodando, de desenvolvimento ou de testes.
* [**jest**](https://jestjs.io/) :heavy_check_mark:, para os testes de unitários e de integração.
* [**supertest**](https://github.com/visionmedia/supertest) :muscle::heavy_check_mark:, também para os testes, mas mais especificamente para os testes de integração, assim pudemos realizar chamadas as rotas criadas em cada controller.

### front-end :chart_with_upwards_trend:

No front-end, a tecnologia utilizada foi [ReactJS](https://reactjs.org/). Ao todo, criamos 4 páginas:
* Login
* Cadastro de ONG's
* Cadastro de Casos
* Listagem dos Casos

### mobile :iphone:
