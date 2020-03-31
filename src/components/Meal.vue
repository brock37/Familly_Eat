<template lang="html">
  <div class="meal ui horizontal list" >
    <div class="item">
      <div class="content">
        <div class="header">
          Nom : {{ meal.nom }}
          <i class="exchange icon" @click.prevent="showSearchOverlay()"></i>
        </div>
        <i class="clock outline icon"></i>Préparation : {{ meal.prepareTime }} |
        <i class="clock outline icon"></i>Cuisson : {{ meal.cookTime }}
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props:{
    meal: {
      type: Object,
      required: true
    },
    idmealweek: Number
  },
  data(){
    return{
      
    }
  },
    methods:{
      showSearchOverlay(){
        //this.showSearch = true
        this.$emit("show-overlay", this.idmealweek)
        console.log(this.$el.offsetTop);
        
      }
    }
}
</script>

<style lang="css" scoped>
</style>
