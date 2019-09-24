<template lang="html">
  <div class="ui horizontal list" @click.prevent="changeMeal(meal)">
    <div class="item">
      <div class="content">
        <div class="header">
          Nom : {{ meal.nom }}
        </div>
        Temps de préparation : {{ meal.prepareTime }}
        Temps de cuisson : {{ meal.cookTime }}
      </div>
    </div>
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
