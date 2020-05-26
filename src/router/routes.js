import Auth from '@okta/okta-vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/PageHome.vue'),
        meta: {
          requiresAuth: false
        }
      },
      {
        path: 'todo',
        component: () => import('pages/PageTodo.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue'),
        meta: {
          requiresAuth: true
        }
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
