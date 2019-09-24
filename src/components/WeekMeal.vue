<template lang="html">
  <div class="weekmeal ui center aligned segment container">
    <h1>Menu de la semaine</h1>
    <div class="ui celled list">
      <div class="item" v-for="jour in JourSemaine">
        <div class="ui header">{{ jour }}</div>
          <div class="content" >

            <div class="ui horizontal list">
              <div class="item" v-for="r in repas">
                <div class="content">
                  <div class="header">{{ r }}</div>
                  <Meal :meal="mealForWeek[JourSemaine.indexOf(jour) + repas.indexOf(r) * 7]" v-on:change-meal="changeMeal(JourSemaine.indexOf(jour) + repas.indexOf(r) * 7)"/>
                </div>
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
import BookMeal from '../assets/recettes.json'
export default {

  components:
  {
    Meal
  },
  data(){
    return{
      bookMeal : BookMeal,
      mealForWeek : [],
      JourSemaine: ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],
      repas: [ "Midi", "Soir"]
    }
  },
  methods :{
    randomIndex(){
      return Math.floor(Math.random() * this.bookMeal.length)
    },
    randomMeal(){
      return this.bookMeal[this.randomIndex()]
    },
    uniqueMeal(){
      let newMeal= this.randomMeal()

      do{
        newMeal= this.randomMeal()
      }while(this.inArray(newMeal.id))

      return newMeal
    },
    inArray(id){
      let res= false
      for(var x = 0; x<this.mealForWeek.length; x++ ){
        if(this.mealForWeek[x].id == id){
          res= true
        }
      }
      return res
    },
    changeMeal(index){
      this.mealForWeek.splice(index,1,this.uniqueMeal())
    }
  },
  created(){
    for(let i= 0; i <14; i++){
      this.mealForWeek.push(this.uniqueMeal())
    }
  }

}
</script>

<style lang="css" scoped>
</style>
