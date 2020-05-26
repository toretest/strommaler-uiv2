<template>
  <q-page class="q-pa-md">
      <q-list
        bordered
        separator>
      <task v-for="(task,index) in getAll"
            :key="index"
            :index="index",
            :task="task"
      >
      </task>
   </q-list>
  </q-page>
</template>

<script>
</script>

<style>

</style>
