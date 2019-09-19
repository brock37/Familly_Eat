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
            <Meal :meal="mealForWeek[(y-1)+(x-1)*6]" v-on:change-meal="changeMeal((y-1)+(x-1)*6)"/>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
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
      let newMeal= this.randomMeal()

      do{
        newMeal= this.randomMeal()
      }while(this.inArray(newMeal.id))

      Vue.set(this.mealForWeek, index, newMeal)
    }
  },
  created(){
    for(let i= 0; i <13; i++){
      let tmp =this.randomMeal()
      //On evite les doublons de recette dans la semaine
      do{
        tmp= this.randomMeal()
      }while(this.inArray(tmp.id))

      this.mealForWeek.push(tmp)
    }
  }

}
</script>

<style lang="css" scoped>
</style>
