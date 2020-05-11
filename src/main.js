import Vue from 'vue'
import axios from 'axios'
import routes from './routes.js'
import * as api from './lib/axios.js'

Vue.config.productionTip = true

const app = new Vue({
  el: '#app',
  data: {
    test: undefined,
    currentRoute : window.location.pathname,
    store: {
      state: {
        cookBook: {
          cookBook : null,
          addMeal : function (newMeal) {
            this.cookBook.push(newMeal)
          }
        },
        mealForWeek: {
          mealSelected : []
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
  },
  mounted () {
    axios.get("http://127.0.0.1:8000/meal")
    .then(response =>{
      this.store.state.cookBook.cookBook = response.data.response
    })

    console.log(api.default.getAllMeal())
    
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname

})
