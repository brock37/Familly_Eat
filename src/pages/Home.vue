<template lang="html">
<div class="ui center aligned container">
  <main-layout>
  </main-layout>
  <h1>Bienvenue sur Familly eat!</h1>


  <div class="ui icon input container">
  <input type="text" placeholder="Chercher une recette ..." v-model="filter">
  <i class="circular search link icon"></i>
  </div>


  <div class="ui divider"></div>

  <div class="ui three stackable cards">
    <div v-for="meal in meals" v-bind:key='meal.id' class="olive card" >
      <div class="content">
        <div class="header"> {{ meal.nom }} </div>
      </div>
      <div class="content">
        <i class="clock outline icon"></i>Préparation : {{ meal.prepareTime }} min |
        <i class="clock outline icon"></i>Cuisson : {{ meal.cookTime }} min
      </div>
      <div class="extra content">
        Rating:
        <div class="ui rating" data-rating="4"></div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import MainLayout from "../layout/Main.vue"

export default {
  components : {
    MainLayout,
  },
  data () {
    return{
      filter : "",
      meals : [],
    }
  },
  watch:{
    filter : function(newfilter) {
      this.meals = []
      this.$root.$data.store.state.cookBook.cookBook.forEach(element => {
          if (element.nom.toLowerCase().includes(newfilter.toLowerCase())){
          this.meals.push(element)
        }
      })
    },
  }
}
</script>

<style lang="css" scoped>
</style>
