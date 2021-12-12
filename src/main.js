import Vue from 'vue'
import App from './App.vue'
import Home from './components/home.vue'
import Cocktail from './components/Cocktail.vue'
import CocktailDetails from './components/CocktailDetails.vue'
import CocktailsByFirstLetter from './components/CocktailsByFirstLetter.vue'
import CocktailsByIngredient from './components/CocktailsByIngredient.vue'
import VueRouter from 'vue-router'


//Vue.config.productionTip = false

Vue.use(VueRouter);
const routes = [
  {path: "/", component : Home},
  {path:"/cocktail", name : Cocktail, component : Cocktail},
  {path: "/cocktail-letter", name:CocktailsByFirstLetter, component: CocktailsByFirstLetter},
  {path: "/cocktail-ingredient", name:CocktailsByIngredient, component: CocktailsByIngredient},
  {path: "/:id", name:CocktailDetails, component: CocktailDetails},
];

const router = new VueRouter({
  mode : 'history',
  routes // raccourci pour `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
