import Auth from '@okta/okta-vue'

export default async ({ router, Vue }) => {
  Vue.use(Auth, {
    issuer: 'https://dev-207979.okta.com/oauth2/default',
    clientId: '0oaaoxkde6Rv10fXu4x6',
    redirectUri: window.location.origin + '/implicit/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true
  })
  console.log('********* process env:' + await Vue.prototype.$auth.getAccessToken())
  await router.beforeEach(Vue.prototype.$auth.authRedirectGuard())
}
