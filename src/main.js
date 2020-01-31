import Vue from 'vue'
import routes from './routes.js'
import BookMeal from './assets/recettes.json'

Vue.config.productionTip = true

const app = new Vue({
  el: '#app',
  data: {
    currentRoute : window.location.pathname,
    store: {
      state: {
        cookBook: {
          cookBook : BookMeal,
          addMeal : function (newMeal) {
            this.cookBook.push(newMeal)
          }
        }
      },
    }

  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
      ? require('./pages/' + matchingView + '.vue').default
      : require('./pages/404.vue').default
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname

})
