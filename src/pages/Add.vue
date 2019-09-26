<template lang="html">
<div class="ui center aligned container">
  <main-layout/>
  <h1>Ajouter une recette</h1>
  <div class="ui segment form">
    <div class="field">
      <label>Nom de la recette</label>
      <input type="text" name="" placeholder="Nom Recette">
    </div>
    <div class="fields">
      <div class="field">
        <label>Temps de préparation</label>
        <input type="text" name="" placeholder="0">
      </div>
      <div class="field">
        <label>Temps de cuisson</label>
        <input type="text" name="" placeholder="0">
      </div>
      <div class="field">
        <label>Kcal</label>
        <input type="text" name="" placeholder="0">
      </div>
    </div>
    <div class="field">
      <div class="ui primary submit button">Submit</div>
    </div>
  </div>
</div>
</template>

<script>
import MainLayout from "../layout/Main.vue"

export default {
  components : {
    MainLayout
  }
}
</script>

<style lang="css" scoped>
</style>
