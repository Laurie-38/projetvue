<template>
  <div class="row bg-light align-items-center searchby">
    <div class="col-md-12">
     
      <div class="col-md-12">
        <div class="row justify-content-md-center align-items-center">
          <div class="col-md-4">
            <div class="input-group mb-3">
              <input
                id="name"
                type="text"
                class="form-control"
                placeholder="Mon cocktail commence par ..."
                aria-label="CocktailFL"
                aria-describedby="basic-addon1"
              />
              <button
                v-on:click="searchCocktailByFirstLetter"
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
  name: "CocktailByFirstLetter",
  components: { CocktailCard },
  props: {
    one: Object,
  },
  data() {
    return {
      title: "Recherche par première lettre",
      name: null,
      imgName: null,
      idCocktail: null,
    };
  },
  methods: {
    searchCocktailByFirstLetter: function () {
      let letter = document.querySelector("#name").value;
      console.log(letter);
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
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
</style>