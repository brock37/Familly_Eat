<template lang="html">
  <a v-bind:href="href"
     v-bind:class="{active :isActive}"
     v-on:click.prevent="go"

  ></a>

</template>

<script>
import routes from "../routes.js"
export default {
  props:{
    href:{
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute
    }
  },
  methods: {
    go () {
      this.$root.currentRoute = this.href
      window.history.pushState(
        null,
        routes[this.href],
        this.href
      )
    }
  }
}
</script>

<style lang="css" scoped>
</style>
