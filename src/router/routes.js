import Auth from '@okta/okta-vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageTodo.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'auth',
        component: () => import('pages/PageAuth.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue')
      },
      {
        path: '/implicit/callback', component: Auth.handleCallback()
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
