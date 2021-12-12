<template>
  <div class="row bg-light searchby">
    <div class="col-md-12">
    
      <div class="col-md-12">
        <div class="row justify-content-md-center ">
          <div class="col-md-4">
            <div class="input-group mb-3">
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="Ingrédient à rechercher"
                aria-label="CocktailI"
                aria-describedby="basic-addon1"
              />
              <button
                v-on:click="searchCocktailByIngredient"
                type="button"
                class="btn btn-outline-warning"
              >
                Rechercher !
              </button>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center">
          <cocktail-card
            class="col-md-2 card"
            v-for="(item, index) in name"
            :key="index"
            :one="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import axios from "axios";
import CocktailCard from "./CocktailCard.vue";
export default {
  name: "CocktailByIngredient",
  components: { CocktailCard },
  data() {
    return {
      title: "Recherche par ingredient",
      name: null,
      imgName: null,
      idCocktail: null,
    };
  },
  methods: {
    searchCocktailByIngredient: function () {
      let ingredient = document.querySelector("#name").value;
      console.log(ingredient);
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
        )
        .then((response) => {
          this.name = response.data.drinks;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
<style scoped>
.list-group-horizontal {
  width: 100%;
  overflow-y: hidden;
}


</style>