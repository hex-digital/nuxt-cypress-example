# example-nuxt-cypress-window

> My ace Nuxt.js project

## Cypress

Example tests are found in `~/cypress/integration`

- Install dependencies: `yarn`
- Start local server: `yarn dev` or `yarn build && yarn start`
- Start cypress: `yarn cypress open`
- Run tests

## Test Examples

- [Login](https://github.com/hex-digital/nuxt-cypress-example/blob/master/cypress/integration/login.spec.js)
  - Test user is currently logged out (Nuxt auth store has loggedIn equals false
  - Log the user in using Nuxt auth, then test they are logged in (Nuxt auth store has loggedIn equals true)

![Video of Cypress logging in](https://user-images.githubusercontent.com/2754728/74766109-ab34ad80-527c-11ea-983e-f9d28ee76df3.gif)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
