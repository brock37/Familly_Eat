<template lang="html">
<div class="">
  <main-layout>
  </main-layout>
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
