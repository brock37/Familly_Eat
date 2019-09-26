<template lang="html">
<div class="ui center aligned container">
  <main-layout>
  </main-layout>
  <h1>Menu de la semaine</h1>
  <WeekMeal/>
</div>
</template>

<script>
import MainLayout from "../layout/Main.vue"
import WeekMeal from "../components/WeekMeal.vue"

export default {
  components : {
    MainLayout,
    WeekMeal
  }
}
</script>

<style lang="css" scoped>
</style>
