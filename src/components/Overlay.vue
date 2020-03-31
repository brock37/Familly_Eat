<template lang="html" >
  <div class="overlay">
    <div class="content">
      <input type="text" name="search" placeholder="Nom de la recette" list="meal-names" v-model="name">
      <datalist id="meal-names">
        <option v-for="meal in cookBook.cookBook" :key="meal.id" v-bind:value="meal.nom"/>
      </datalist>
      <br>
      <button type="button" name="randomMeal" @click.prevent="randomMeal()">Aleatoire</button>
      <button type="button" name="check" @click.prevent="validMeal()">Valider</button>
      <button type="button" name="cancel" @click.prevent="closeOverlay()">Annulez</button>
  
    </div>

  </div>

</template>

<script>

export default {
  data(){
    return{
      cookBook : this.$root.$data.store.state.cookBook,
      name: ""
    }
  },
  methods: {
    validMeal(){

      /*Verifie si le nom de la recette existe dans le livre de recette*/
      for(var x = 0; x<this.cookBook.cookBook.length; x++ ){
        if(this.cookBook.cookBook[x].nom === this.name){
          this.$emit("valid-meal", this.cookBook.cookBook[x])
        }
      }
      this.closeOverlay()

    },
    randomMeal(){
      var newName=this.cookBook.cookBook[Math.floor(Math.random() * this.cookBook.cookBook.length)].nom

      this.name= newName
    },
    closeOverlay(){
      this.$emit("close-overlay")
    }
  }
}
</script>

<style lang="css" scoped>
.overlay{
  position: absolute;
  z-index: 2;
  border-style: solid;
  background-color: rgba(0, 0, 0, 0.5);


  padding: 5px;
  width: 100%;
  height: 100%;

}
</style>
