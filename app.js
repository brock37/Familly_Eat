var recetteComponent= {
  props: ['recette'],
  template: `
    <div>
      <ul>
        <li>Nom : {{ recette.nom }}</li>
        <li>Temps de préparation : {{ recette.prepareTime }}</li>
        <li>Temps de cuisson : {{ recette.cookTime }}</li>
      </ul>
    </div>
  `
}

let vm = new Vue({
  el: "#app",
  components: {
    'recette-component': recetteComponent
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.recettes.length)
    }
  },
  data: {
    recettes: [
      {id: 1, nom: "Riz au lait", prepareTime: 15, cookTime: 5},
      {id: 2, nom: "Hamburger", prepareTime: 25, cookTime: 1},
      {id: 3, nom: "Jambbon nouilles", prepareTime: 5, cookTime: 3},
      {id: 4, nom: "Cookies", prepareTime: 15, cookTime: 5},
      {id: 5, nom: "Salade de pomme de terre", prepareTime: 25, cookTime: 1},
      {id: 6, nom: "steak frites", prepareTime: 5, cookTime: 3},
      {id: 7, nom: "Pudding", prepareTime: 15, cookTime: 5},
      {id: 8, nom: "Sandwich", prepareTime: 25, cookTime: 1},
      {id: 9, nom: "Cordon bleu haricots vert", prepareTime: 5, cookTime: 3},
      {id: 10, nom: "Salami", prepareTime: 15, cookTime: 5},
      {id: 11, nom: "Goiave", prepareTime: 25, cookTime: 1},
      {id: 12, nom: "Yaourt", prepareTime: 15, cookTime: 5},
      {id: 13, nom: "Saucisse purée", prepareTime: 25, cookTime: 1},
      {id: 14, nom: "Pates au thons", prepareTime: 5, cookTime: 3}
    ],
    JourSemaine: [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche"
    ]
  }
})
