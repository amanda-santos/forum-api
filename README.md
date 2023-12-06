<h1 align="center">
  Forum API
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/amanda-santos/forum-api">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/amanda-santos/forum-api">

  <a href="https://github.com/amanda-santos/forum-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/amanda-santos/forum-api">
  </a>

  <a href="https://github.com/amanda-santos/forum-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/amanda-santos/forum-api">
  </a>
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;
</p>

## 📝 About the project

<p>
  This is a forum application API where it's possible to sign up, login, and create and manage questions, answers, and comments.
</p>
<p>
  This project was built for study purposes, and it includes technologies such as NestJS, Node.js, Typescript, Prisma, Redis, and more. It was also developed using DDD (Domain Driven Design) and Clean Architecture principles, and it includes unit and E2E tests for the application's features.
</p>
<p>
  Developed as part of the Ignite Node.js course by <a href="https://www.rocketseat.com.br/">Rocketseat</a>.
</p>

## 👩🏻‍💻 Technologies

Technologies used to develop this project:

- Node.js
- Typescript
- NestJS
- Prisma
- Redis
- PostgreSQL
- Vitest
- AWS S3 with Tebi Storage

## ⌨ Getting started

### Installation

```bash
$ pnpm install
```

### Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork amanda-santos/forum-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd forum-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

---

Made with 💜 by Amanda Santos
