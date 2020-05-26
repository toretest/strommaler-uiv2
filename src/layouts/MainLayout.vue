<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title >
          Strøm og pris app
        </q-toolbar-title>
        <q-btn
          v-on:click="login()"
          v-show="!authenticated"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />
         <q-btn
          v-on:click="logout()"
          v-show="authenticated"
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
        />
        <!--        <div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab v-for="link in essentialLinks"
                     :key="link.title"
                     :icon="link.icon"
                     :label="link.title"
                     :to="link.to"/>
      </q-tabs>
    </q-footer>

    <q-drawer
      :width="160"
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list class="dark">
        <q-item-label
          header
          class="text-grey-4"
        >Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',
  created () {
    this.isAuthenticated()
  },
  watch: {
    // Everytime the route changes, check for auth status
    $route: 'isAuthenticated'
  },
  components: {
    EssentialLink
  },
  methods: {
    async isAuthenticated () {
      this.authenticated = await this.$auth.isAuthenticated()
    },
    async logout () {
      await this.$auth.logout()
      await this.isAuthenticated()
      await this.$router.push({ path: '/home' })
    },
    async login () {
      console.log('login......')
      await this.$auth.login()
      await this.isAuthenticated()
    }
  },
  data () {
    return {
      authenticated: false,
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          icon: 'home',
          to: '/home'
        },
        {
          title: 'Todo',
          icon: 'list',
          to: '/todo'
        },
        {
          title: 'Settings',
          icon: 'settings',
          to: '/settings'
        }

      ]
    }
  }
}
</script>

<style>
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
