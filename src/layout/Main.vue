<template lang="html">
  <div class="ui three item menu">
    <v-link class="item active" href="/">Home</v-link>
    <v-link class="item active" href="/add">AJouter recette</v-link>

    <slot></slot>
  </div>


</template>

<script>
import VLink from '../components/VLink.vue'

export default {
  components:{
    VLink
  }
}
</script>

<style lang="css" src="../assets/Semantic-UI-CSS-master/semantic.css">
</style>
