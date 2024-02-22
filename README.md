<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository. Project made by Ikrame, Lucas B, Theotime and Lucas M.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 1 - CONTEXTE
Le H.C.C, club de handball de la ville de Comines, était un petit club local avec seulement 
quelques adhérents. Les informations étaient échangées de manière informelle, par le biais 
d'appels téléphoniques et de messages textes. Mais depuis, le club a connu un développement 
rapide, avec l'arrivée de nouveaux joueurs et l'expansion de son champ d’action.
Avec cette croissance, le club a besoin d'un système plus organisé pour gérer ses adhérents et 
ses événements, tels que les matchs hebdomadaires. Il souhaite donc mettre en place un site 
internet et un application mobile pour promouvoir ses activités, avec un fil d'actualités et un 
espace membre pour les adhérents.

## 2 - BESOINS 
Le H.C.C a pris la décision de mettre en place une API REST afin de de fournir des informations 
en temps réel sur les matchs et les événements, ainsi que des mises à jour régulières sur les 
actualités du club. Public et adhérents, pourront ainsi s’informer sur club à travers son futur site 
internet et son application mobile.

## 3 - EXIGENCES TECHNIQUES
L'API sera développée en utilisant NestJS et une base de données SQLite en local pour faciliter 
les tests et les démo. Les interactions avec la base de données se fera à l’aide de TypeORM.
L’API doit prendre en compte 3 aspects fonctionnelles : gestion de l’authentification, gestion des 
actualités, gestion des matchs.
Concernant l’authentification, l’API doit être en mesure de fournir des tokens jwt aux utilisateurs. 
C’est grâce à ces tokens que l’accès aux différentes parties des ressources est possible (notion 
de scope et de rôles).

## 4 - SPÉCIFICATIONS FONCTIONNELLES ET RÈGLES DE GESTION 
### 4.1 Authentification 
• Un adhérent peut avoir soit le rôle « coach », « contributeur », « joueur »
• Un utilisateur peut se créer un compte adhérent, son compte sera validé par le club, son 
compte aura soit le rôle « coach », soit « contributeur », soit « joueur »
• Les adhérents du club peuvent s’authentifier avec un email et un mot de passe. Il reçoit un 
token JWT pour accéder aux fonctionnalités réservées aux adhérents
### 4.2 Gestion des adhérents 
• Seuls les adhérents ayant le rôle « joueur » peuvent s’inscrire aux matchs
• Les adhérents peuvent s’inscrire à plusieurs matchs
• Les adhérents peuvent se désinscrire des matchs auxquels il se sont inscrits.
• L’API doit être capable de retourner les infos de l’ensemble des adhérents (nom, prénom, date 
d’inscription, matchs auxquels ils participent)
• L’API doit être capable de retourner les infos d’un adhérent particulier (nom, prénom, date 
d’inscription, matchs auxquels il participe)
### 4.3 Gestion des actualités 
• Seul les adhérents ayant le rôle « contributeur » peuvent publier des actualités.
• L’API doit être capable de retourner l’ensembles des actualités (toutes les infos + auteur).
• L’API doit être capable de retourner une actualité particulière (toutes les infos + auteur).
### 4.4 Gestion des matchs 
• Seul un adhérent « coach » peut saisir des matchs
• Seul un adhérent « coach » peut modifier les matchs (ex: scores)
• Un match doit aussi contenir un adversaire et un score final
• Il ne peut pas y avoir un match le même jour
• L'API doit être capable de retourner les infos de l’ensemble des matchs + liste des participan
