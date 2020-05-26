<template>
  <q-item
        clickable
        @click="updateTask"
        v-bind:class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strikethrough' : task.completed}"
          >{{task.name}}</q-item-label>
         </q-item-section>
        <q-item-section side>
          <div class="row">
          <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
          <div class="column">
          <q-item-label class="row justify-end" caption>{{task.duoDate}}</q-item-label>
          <q-item-label class="row justify-end" caption>{{task.duoTime}}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
</template>

<script>
// import { mapActions } from 'Vuex'
export default {
  // props: ['id', 'completed', 'name', 'duoDate', 'duoTime'],
  props: ['task', 'id']
  // computed: {
  //   tasks () {
  //     return this.$store.getters['tasks/getAll']
  //   }
  // },
  // methods: {
  //   ...mapActions('tasks', ['updateTask'])
//  }
}

</script>

<style>

</style>
