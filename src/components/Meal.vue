<template lang="html">
  <div class="meal ui horizontal list" >
    <div class="item">
      <div class="content">
        <div class="header">
          Nom : {{ meal.nom }}
        </div>
        <i class="clock outline icon"></i>Préparation : {{ meal.prepareTime }} |
        <i class="clock outline icon"></i>Cuisson : {{ meal.cookTime }}
      </div>
    </div>
  </div>

</template>

<script>
import Overlay from './Overlay.vue'
export default {
  components:{
    Overlay
  },
  props:{
    cookbook: Array,
    meal: {
      type: Object,
      required: true
    },
    idmealweek: Number
  },
  data(){
    return{
      showSearch: false
    }
  },
    methods:{
      showSearchOverlay(){
        this.showSearch = true
      },
      validMeal: function(newMeal){
        console.log("Reception validMeal")
        this.$emit("change-meal", [this.idmealweek, newMeal])
        this.closeOverlay()
      },
      closeOverlay(){
        this.showSearch = false
      }
    }
}
</script>

<style lang="css" scoped>
</style>
