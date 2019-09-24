<template lang="html">
  <div class="ui center aligned container">
    <ul>
      <li>
        <v-link href="/">Home</v-link>
        <v-link href="/add">AJouter recette</v-link>
      </li>
    </ul>

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

<style lang="css" scoped>
</style>
