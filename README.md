<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

This is a Backend application built in Nestjs that uses a Graphql API implemented with Apollo Server.The application was developed using some of Nestjs advanced characteristics, including microservices, monorepos, authentication and authorization with JWT.

The application also uses some of the advanced Nestjs characteristics, including the implementation of microservices, which allows communication between different application services, and the implementation of monorepos, which facilitates the management of multiple projects within a single application.

### GraphQL
The GRAPHQL API is used to provide an interface so that the customers of the application make Queries and Mutations in the Mongo database.The API is implemented using Apollo Server, which allows the integration of multiple data origins and the implementation of complex graphql schemes.


### Authentication
Authentication in this application is managed by using Nestjs  JwtService. JwtService is a tool that allows the creation and validation of tokens JWT (JSON Web tokens) for user authentication. When a user logs in the application, a token jwt is generated that contains user information, such as its id and role. This token is used to authenticate the user in each subsequent request made in the application.  JwtService also provides functions to validate and decode JWT tokens, which helps to ensure that only authenticated users have access to application resources.The use of  JwtService in this application is a recommended practice in user authentication and is an effective way to ensure application security.

### Authorization
Authorization in this application is managed by the use of RBAC (Role-Based Access Control).RBAC is an access control model that defines roles and permits for each role in an application.In this application, different roles are defined, such as "administrator" and "user", and specific permits are assigned to each role.When a user logs in the application, their role is checked and the corresponding permits are granted.This guarantees that users can only access resources for those who have permission and help to avoid security problems.The use of RBAC in this application is a recommended practice in the design of security systems and is an effective way to ensure that users only have access to adequate resources.

In summary, this is an advanced backend application built in Nestjs that uses a Graphql API implemented with Apollo Server, and takes advantage of some of the advanced Nestjs features, including microservices, monorepos and authentication and authorization with JWT.

## Installation

```bash
# Install nestjs client globally
$ yarn add --global @nestjs/cli

# Install dependencies
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

## Interest Resources for Nestjs

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
```

The scope is optional and can be related to the application directory or the module that is being modified.
The message must be brief and concise, and must be written in infinitive.

The types of commit are:

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
