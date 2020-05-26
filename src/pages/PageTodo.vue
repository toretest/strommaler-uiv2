<template>
  <q-page class="q-pa-md">
    <b>todo</b>
      <q-list
        bordered
        separator>
      <task v-for="(task,index) in getAll"
            :key="index"
            :id="index",
            :task="task"
      >hello
      </task>
   </q-list>
  </q-page>
</template>

<script>
import task from '../components/Task.vue'

export default {
  components: task,

  methods: {
    getAll () {
      return {
        1: {
          name: 'Registerer strøm for april 2020',
          completed: false,
          duoDate: '2020/03/29',
          duoTime: '23:59'
        },
        2: {
          name: 'Registrer pris for mars 2020',
          completed: true,
          duoDate: '2020/03/20',
          duoTime: '12:00'
        },
        3: {
          name: 'Registrer pris for april 2020',
          completed: false,
          duoDate: '2019/05/20',
          duoTime: '18:30'
        }
      }
    }
  }

}
</script>

<style>

</style>
