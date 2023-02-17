<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Test Backend Application.

## Installation

## Instalacion

```bash
# Instalar el cliente de nestjs globalmente
$ yarn add --global @nestjs/cli

#Instalar las dependencias
$ yarn install
```

## Running the app

```bash
# development (watch mode)
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Recursos de interes para Nestjs

- [ Nestjs Docs ](https://docs.nestjs.com/) - Official Documentation of Nestjs
- [Modulos](https://www.instintoprogramador.com.mx/2020/12/nestjs-modulos.html) - Explanation of modules in Nestjs
- [Nestjs-monorepo](https://www.youtube.com/watch?v=xlGNn3vJ-lQ) - Monorepo project structure with Nestjs

## Stay in touch

- Author - [ArielGuillen](https://github.com/ArielGuillen)

## How to contribute

Commit's message must follow the structure of conventional commits:

```bash
# <type>(<scope>): <message>
$ feat(users): add login endpoint

#[optional body: A long Description]
$ Added Authentication module for users

#[optional footer(s)]
$ Reviewed-by: Z
$ Refs: #123

The scope is optional and can be related to the application directory or the module that is being modified.
The message must be brief and concise, and must be written in infinitive.

Los tipos de commit son:

- **feat**: new functionality
- **fix**: error correction
- **docs**: changes in documentation
- **style**: changes in code style
- **refactor**: changes in the code that do not correct errors or add functionalities
- **perf**: changes in the code that improve performance
- **test**: changes in the tests
- **build**: changes in the compilation system
- **ci**: changes in the continuous integration system
- **chore**: changes in the construction process or auxiliary tools
- **revert**: revert an commit
- **graphql**: changes in the graphql schema

## License

Nest is [MIT licensed](LICENSE).
```
