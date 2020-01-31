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
    <div class="fields">
      <div class="field">
        <div class="ui primary submit button" @click.prevent="submitMeal()">Submit</div>
      </div>
      <div class="field">
        <div class="ui primary submit button" @click.prevent="saveFile()">Download</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import MainLayout from "../layout/Main.vue"

export default {
  components : {
    MainLayout
  },
  data (){
    return {
      nom : "",
      prepareTime: undefined,
      cookTime: undefined,
      kcal : undefined,
      arr:[],
      cookBook : this.$root.$data.store.state.cookBook
    }
  },
  computed :{
    lastIndex(){
      return this.cookBook.cookBook[this.cookBook.cookBook.length - 1].id + 1
    }
  },
  methods : {
    saveFile: function() {
      const data = JSON.stringify(this.cookBook.cookBook)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "recettes.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },
    submitMeal(){
      if(this.nom === ""){
        console.log("Pas de nom")
        return
      }
      if(this.prepareTime === undefined){
        console.log("Pas de temps de preparation")
        return
      }
      if(this.kcal === undefined){
        console.log("Pas de Kcal")
        return
      }
      if(this.cookTime === undefined){
        this.cookTime = 0
      }

      this.prepareTime = Number(this.prepareTime)
      this.cookTime = Number(this.cookTime)
      this.kcal = Number(this.kcal)
      this.cookBook.addMeal({"id": this.lastIndex, nom : this.nom, prepareTime : this.prepareTime, cookTime : this.cookTime, kcal : this.kcal})
    }
  }

}
</script>

<style lang="css" scoped>
</style>
