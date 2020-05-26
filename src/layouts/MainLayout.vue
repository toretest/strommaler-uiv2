<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title >
          Strøm og pris app
        </q-toolbar-title>
        <q-btn
          to="/auth"
          flat
          icon-right="account_circle"
          label="Account"
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

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Login',
          icon: 'account_circle',
          to: '/auth'
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
