<template lang="html">
  <div class="main">
    <ul>
      <li>Id : {{ meal.id }}</li>
      <li>Nom : {{ meal.nom }}</li>
      <li>Temps de préparation : {{ meal.prepareTime }}</li>
      <li>Temps de cuisson : {{ meal.cookTime }}</li>
      <div class="ui right floated small primary icon button" @click.prevent="changeMeal(meal)">
        <i class="exchange icon"></i>
      </div>
    </ul>
  </div>

</template>

<script>
export default {
  props:{
    meal: {
      type: Object,
      required: true
    }
  },
    methods:{
      changeMeal(meal){
        this.$emit("change-meal", meal)
      }
    }
}
</script>

<style lang="css" scoped>
</style>
