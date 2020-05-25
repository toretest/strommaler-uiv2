# strommalerApp (strommaler-ui)

Admin current use and payments in your house

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

# Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

## Using dotenv to define environment varibables
https://github.com/quasarframework/app-extension-dotenv/tree/dev/app-extension
```
quasar ext add @quasar/dotenv
```
That means that environments spesifies by files in root.
dev.development files so on including dev can be changed  under CD....docker

Any data in a .env will be placed in _**process.env**_ at the browser level.

If you specified a common root object, say MyData, then the data will be placed at _**process.env.MyData**_.
```
.dev
.dev.development
.dev.stage
.dev.production
```
add .gitignore
```
.env.development
.env.production
```

Example file content
```
MY_DOTENV_TEST="This should work!"
```

# Okta

## Viktig
- https://help.okta.com/en/prod/Content/Topics/Security/API_Access.htm?cshid=create-scopes#create-scopes
- https://www.npmjs.com/package/@okta/okta-vue
- admin okta vue https://developer.okta.com/blog/2020/05/15/vue-login
- 0https://jwt.io/
- https://oidcdebugger.com/


```
npm i @okta/okta-vue@2.0.0 @types/okta__okta-vue@1.2.0
```

**@okta/okta-vue 2.0.0**
https://www.npmjs.com/package/@okta/okta-vue

**@okta/okta-vue 1.2.0**
https://www.npmjs.com/package/@okta/okta-vue/v/1.2.0

Example :

https://developer.okta.com/blog/2019/05/30/vue-pwa-typescript


- Okta Vue SDK
https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue?spm=a2c6h.14275010.0.0.1c297a11Jcx1zG
- Okta Vue SDK should include TypeScript types (see Problem 1)
https://developer.aliyun.com/mirror/npm/package/@types/okta__okta-vue
- https://github.com/okta/okta-oidc-js/issues/352
- Examples : https://developer.okta.com/docs/guides/sign-into-spa/vue/configure-the-sdk/
- Example for bug: https://github.com/oktadeveloper/spring-boot-vue-example/tree/okta
- https://github.com/okta/samples-js-vue/tree/master/okta-hosted-login

## Problems with typescripts (NB This project IS not typescript, so no need to change)

Problem 1 Try : import Auth from '@okta/okta-vue'
Error:
```
TS7016: Could not find a declaration file for module '@okta/okta-vue'.
../strommaler-ui/node_modules/@okta/okta-vue/dist/okta-vue.js' implicitly has an 'any' type.   
Try `npm install @types/okta__okta-vue`
if it exists or add a new declaration (.d.ts) file containing `declare module '@okta/okta-vue';
```
Fix:
- https://developer.aliyun.com/mirror/npm/package/@types/okta__okta-vue
```
//This package contains type definitions for okta-vue
//(https://github.com/okta/okta-oidc-js/tree/master/packages/okta-vue).

// NB! In the doc there where no --save-dev. Examples show that this should be un dev!!
npm install --save @types/okta__okta-vue --save-dev
```

## example login ur

https://dev-207979.okta.com/oauth2/default/v1/authorize?client_id=0oaaoxkde6Rv10fXu4x6&code_challenge=-DAg5vaA9hHWUjsP1OihBOmO4Fqg9Cjw4AAYX7YFUek&code_challenge_method=S256&nonce=nxvYzhdYXwwFOQP1PeewAyl2axWwb6C6dbEoXeoEldxuHAQ8F8s2ieCfJ1Ho0R03&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback&response_type=code&state=EZ8MlNMvelrLaTpgAG3xZQwcWWcQbTxs8RNdOnAffEcibL2TiWuZCwhKnqU2S4FH&scope=openid%20email%20profile
```
https://dev-207979.okta.com/oauth2/default/v1/authorize?
client_id=0oaaoxkde6Rv10fXu4x6&code_challenge=-DAg5vaA9hHWUjsP1OihBOmO4Fqg9Cjw4AAYX7YFUek
&
code_challenge_method=S256&nonce=nxvYzhdYXwwFOQP1PeewAyl2axWwb6C6dbEoXeoEldxuHAQ8F8s2ieCfJ1Ho0R03
&
redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback
&
response_type=code
&
state=EZ8MlNMvelrLaTpgAG3xZQwcWWcQbTxs8RNdOnAffEcibL2TiWuZCwhKnqU2S4FH&scope=openid%20email%20profile
```

## styling
- https://material.io/design
- https://quasar.dev
- https://material.io/resources/icons/?style=baseline

# Heroku deploy env
When checking into github, automatic build and deploy to stage.
Heroku support github out of the box!
(NB! Okta support)
## Nice commands https://help.heroku.com/UMAUQ4UF/why-am-i-seeing-application-error
```
npm audit // SIkkerhet på pakker https://blog.npmjs.org/post/173719309445/npm-audit-identify-and-fix-insecure
heroku create (first time)
heroku restart
heroku logs --tail --app <not needed when current>
```

https://dashboard.heroku.com/apps/desolate-temple-13672/activity/builds/faf99ec4-6e87-4297-9422-4d3d1e91e8bc

## Config notes using quasar

1. Seems that we need to install quasar locally (added as an dev dependency in package.json) , to get it available under build process
```
npm i @quasar/cli -D
   or
npm install @quasar/cli --save-dev

```
This give use new lines in package.json:
```
 "dependencies": {
    "@quasar/cli": "^1.0.7",


```

2. heroku-run-build-script, see **build**, **start** and **heroku-postbuild**
```
"scripts": {
    "lint": "eslint --ext .js,.ts,.vue --ignore-path .gitignore ./",
    "test": "echo \"No test specified\" && exit 0",
    "build": "quasar build",
    "start": "node server.js",
    "heroku-postbuild": "npm install && quasar build"
  },
```
and **heroku-run-build-script** set to _**true**_

```
.
.
  ],
  "resolutions": {
    "@babel/parser": "7.7.5"
  },
  "heroku-run-build-script": true
}
```



# Tips
- Quasar typescripts https://dev.to/xkonti/creating-quasar-framework-project-with-typescript-support-51ge
- https://dev.to/xkonti/creating-quasar-framework-project-with-typescript-support-51ge
- vuex https://medium.com/js-dojo/vuex-2638ba4b1d76
- typescript 5 min.: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- typescript vue starter: https://github.com/Microsoft/TypeScript-Vue-Starter
- https://quasar.dev/


- Intelli Idea https://forum.quasar-framework.org/topic/1934/quasar-dev-to-intellij-run-debug-configuration
- Video https://www.youtube.com/watch?v=C-v262YhYvw
- ports settings https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
- move dependencies to dev depenencies and versa  https://stackoverflow.com/questions/46903002/move-a-module-from-devdependencies-to-dependencies-in-npm-package-json
- Bootiful Development with Spring Boot and Vue https://developer.okta.com/blog/2018/12/03/bootiful-spring-boot-java-vue-typescript

Danny sight
- https://www.youtube.com/channel/UC6eR_ndNgaTeE5t2Ud4ZiHw
- https://www.youtube.com/watch?v=pzoyvPxNyYI
# AWS Amplify Console
https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html
https://eu-central-1.console.aws.amazon.com/amplify/home?region=eu-central-1&code=287db6f5da6e37b3b42d#/
https://eu-central-1.console.aws.amazon.com/amplify/home?region=eu-central-1&code=287db6f5da6e37b3b42d#/d2560lcmcqv27r/settings/rewrites

https://github.com/jonashackt/spring-boot-vuejs

https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489
