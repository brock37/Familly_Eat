<template lang="html">
  <div class="weekmeal">
    <table class="ui celled padded table">
      <thead>
        <tr>
          <th colspan="8" class="ui center aligned header">Menu de la semaine</th>
        </tr>
        <tr>
          <th></th>
          <th v-for="jour in JourSemaine" class="center aligned"> {{ jour }}</th>
        </tr>

      </thead>
      <tbody>
        <tr v-for="x in 2">
          <td class="center aligned"> {{ repas[x-1] }}</td>
          <td v-for="y in 7">
            <Meal :meal="mealForWeek[(y-1)+(x-1)*7]" v-on:change-meal="changeMeal((y-1)+(x-1)*7)"/>
          </td>
        </tr>
      </tbody>
    </table>
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
