<template lang="html">
  <div class="weekmeal ui center aligned segment container">
    <div class="ui divided list">
      <div class="item" v-for="jour in JourSemaine">
        <div class="ui header">{{ jour }}</div>
          <div class="content" >

            <div class="ui horizontal list">
              <div class="item" v-for="r in repas">
                <div class="content">
                  <div class="header">{{ r }}</div>
                  <Meal :cookbook="cookBook" :meal="mealForWeek[JourSemaine.indexOf(jour) + repas.indexOf(r) * 7]" :idmealweek="JourSemaine.indexOf(jour) + repas.indexOf(r) * 7" @change-meal="changeMeal"/>
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
      cookBook : BookMeal,
      mealForWeek : [],
      JourSemaine: ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],
      repas: [ "Midi", "Soir"]
    }
  },
  methods :{
    randomIndex(){
      return Math.floor(Math.random() * this.cookBook.length)
    },
    randomMeal(){
      return this.cookBook[this.randomIndex()]
    },
    uniqueMeal(){
      let newMeal= this.randomMeal()

      do{
        newMeal= this.randomMeal()
      }while(this.inArray(newMeal.id))

      return newMeal
    },
    inArray(id){  //Regarde si la recette est deja utiliser dans la liste du menu de la semaine
      let res= false
      for(var x = 0; x<this.mealForWeek.length; x++ ){
        if(this.mealForWeek[x].id == id){
          res= true
        }
      }
      return res
    },
    changeMeal(arg){
      console.log(arg);
      this.mealForWeek.splice(arg[0],1,arg[1])
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
