<template lang="html">
  <div class="weekmeal">
    <table class="ui celled padded table">
      <thead>
        <tr>
          <th colspan="8" class="ui center aligned header">Menu de la semaine</th>
        </tr>
        <tr>
          <th></th>
          <th v-for="jour in JourSemaine" class="center aligned"> {{ jour }}</th>
        </tr>

      </thead>
      <tbody>
        <tr v-for="x in 2">
          <td class="center aligned"> {{ repas[x-1] }}</td>
          <td v-for="y in 7">

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {


  data(){
    return{
      JourSemaine: [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ],
      repas: [ "Midi", "Soir"]
    }
  }

}
</script>

<style lang="css" scoped>
</style>
