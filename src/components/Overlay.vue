<template lang="html" >
  <div class="overlay">
    <input type="text" name="search" placeholder="Nom de la recette" list="meal-names" v-model:value="name">
    <datalist id="meal-names">
      <option v-for="meal in cookBook.cookBook" v-bind:value="meal.nom"/>
    </datalist>
    <br>
    <button type="button" name="randomMeal" @click.prevent="randomMeal()">Aleatoire</button>
    <button type="button" name="check" @click.prevent="validMeal()">Valider</button>
    <button type="button" name="cancel" @click.prevent="cancelOverlay()">Annulez</button>
  </div>

</template>

<script>

export default {
  data(){
    return{
      cookBook : this.$root.$data.store.state.cookBook,
      name: "",
      meal: {}
    }
  },
  methods: {
    validMeal(){

      let pres= false

      for(var x = 0; x<this.cookBook.cookBook.length; x++ ){
        if(this.cookBook.cookBook[x].nom === this.name){
          pres= true
          this.meal= this.cookBook.cookBook[x]
        }
      }

      if(!pres){
        return
      }
      console.log("Emmision validMeal")
      this.$emit("valid-meal", this.meal)
    },
    randomMeal(){
      var newName=this.cookBook.cookBook[Math.floor(Math.random() * this.cookBook.cookBook.length)].nom

      this.name= newName
    },
    cancelOverlay(){
      this.$emit("cancel-meal")
    }
  }
}
</script>

<style lang="css" scoped>
.overlay{
  display: block;
  position: relative;
  z-index: 2;
  border-style: solid;
  background-color: white;
}
</style>
