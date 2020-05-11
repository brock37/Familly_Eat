<template lang="html">
  <div class="weekmeal ui center aligned segment container">

    <Overlay v-if="showSearch" @valid-meal="changeMeal" @close-overlay="showSearch = false"/>

    <div class="ui divided list">
      <div class="item" v-for="jour in JourSemaine" v-bind:key="jour">
        <div class="ui header">{{ jour }}</div>
          <div class="content" >

            <div class="ui horizontal list">
              <div class="item" v-for="r in repas" v-bind:key="r">
                <div class="content">
                  <div class="header">{{ r }}</div>
                  <Meal :meal="mealForWeek.mealSelected[JourSemaine.indexOf(jour) + repas.indexOf(r) * 7]"
                   :idmealweek="JourSemaine.indexOf(jour) + repas.indexOf(r) * 7"
                   @show-overlay="showOverlay"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    
</template>

<script>
import Meal from './Meal.vue'
import Overlay from './Overlay.vue'

export default {

  components:
  {
    Meal,
    Overlay
  },
  data(){
    return{
      cookBook : this.$root.$data.store.state.cookBook,
      mealForWeek : this.$root.$data.store.state.mealForWeek,
      JourSemaine: ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],
      repas: [ "Midi", "Soir"],
      showSearch : false,
      searchId : null
    }
  },
  computed:{
  },
  methods :{
    randomIndex(){
      return Math.floor(Math.random() * this.cookBook.cookBook.length)
    },
    randomMeal(){
      return this.cookBook.cookBook[this.randomIndex()]
    },
    uniqueMeal(){
      let newMeal= this.randomMeal()

      do{
        newMeal= this.randomMeal()
      }while(this.mealForWeek.mealSelected.some( ({id}) => id === newMeal.id))

      return newMeal
    },
    changeMeal(arg){
      //this.mealForWeek.mealSelected.splice(arg[0],1,arg[1])
      this.mealForWeek.mealSelected.splice(this.searchId,1,arg)
    },
    showOverlay(arg){
      this.showSearch = true
      this.searchId = arg
    }
  },
  created(){
    if (this.mealForWeek.mealSelected.length <= 0){
      for(let i= 0; i <14; i++){
        this.mealForWeek.mealSelected.push(this.uniqueMeal())
      }
    }

  }

}
</script>

<style lang="css" scoped>
</style>
