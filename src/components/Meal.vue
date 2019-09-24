<template lang="html">
  <div class="ui horizontal list" @click.prevent="changeMeal(meal)">
    <div class="item">
      <div class="content">
        <div class="header">
          Nom : {{ meal.nom }}
        </div>
        <i class="clock outline icon"></i>Préparation : {{ meal.prepareTime }} |
        <i class="clock outline icon"></i>Cuisson : {{ meal.cookTime }}
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
