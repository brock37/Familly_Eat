<template lang="html">
<div class="ui center aligned container">
  <main-layout/>
  <h1>Ajouter une recette</h1>
  <div class="ui segment form">
    <div class="fields">
      <div class="field">
        <label>ID</label>
        <input type="text" readonly="true" name="id" :value="lastIndex">
      </div>
      <div class="field">
        <label>Nom de la recette</label>
        <input type="text" name="nom" placeholder="Nom Recette" v-model="nom">
      </div>
    </div>
    <div class="fields">
      <div class="field">
        <label>Temps de préparation</label>
        <input type="number" name="prepareTime" placeholder="0" v-model="prepareTime">
      </div>
      <div class="field">
        <label>Temps de cuisson</label>
        <input type="number" name="cookTime" placeholder="0" v-model="cookTime">
      </div>
      <div class="field">
        <label>Kcal</label>
        <input type="number" name="kcal" placeholder="0" v-model="kcal">
      </div>
    </div>
    <div class="field">
      <div class="ui primary submit button" @click.prevent="submitMeal()">Submit</div>
    </div>
  </div>
</div>
</template>

<script>
import MainLayout from "../layout/Main.vue"
import BookMeal from '../assets/recettes.json'


export default {
  components : {
    MainLayout
  },
  data (){
    return {
      cookBook : BookMeal,
      nom : "",
      prepareTime: undefined,
      cookTime: undefined,
      kcal : undefined
    }
  },
  computed :{
    lastIndex(){
      return this.cookBook[this.cookBook.length - 1].id + 1
    }
  },
  }
}
</script>

<style lang="css" scoped>
</style>
