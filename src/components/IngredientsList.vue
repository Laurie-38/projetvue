<template>
  <div class="row bg-light">
    <div class="col-md-12">
      <h1>{{ title }}</h1>
      <div class="col-md-12">
        <div class="input-group mb-3">
          <p>{{ ingredients }}</p>
          <div v-for="(one, index) in picture" :key='index'>
            <img v-bind:src="one" alt="">
          </div>
          
          <div>{{ IngredientsRandom() }}</div>
          
            <div
              class="list-group-item one-cocktail"
              v-for="(one, index) in ingredients"
              :key="index"
              v-on:click="getCocktailRecipe"
            >
              <router-link v-bind:to="`cocktail-details/${one.idDrink}`">
                <div class="card" style="width: 18rem">
                  <img
                    v-bind:src="one.strDrinkThumb"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      {{ one.strDrink }} - {{ one.idDrink }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "IngredientsList",
  data() {
    return {
      title: "Ingrédients ...",
      ingredients: null,
      picture: null,
    };
  },
  methods: {
    IngredientsRandom: function () {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
        .then((response) => {
          let array = response.data.drinks;
          let newArray = [];

          array.forEach((element) => {
            console.log(element.strIngredient1);
            newArray.push(element.strIngredient1);
          });
          console.log(this.ingredients);
          console.log("toto");
          console.log(newArray.slice(0, 5));
          this.ingredients = newArray.slice(0, 5);
          let arraypicture = [];
          this.ingredients.forEach((ingredient) => {
            console.log(ingredient);
            axios
              .get(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
              )
              .then((data) => {
                let picture = data.strDrinkThumb;
                console.log(picture);
                arraypicture.push(picture);
              });
          });
          this.picture = arraypicture;
          console.log(arraypicture);
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
img {
  width: 160px;
  height: 160px;
  opacity: 1;
}
.card {
  width: 11rem !important;
  text-align: center;
  background-color: #fff0;
  border: none;
  position: relative;
  margin : 3px;
}

.card-body {
  text-decoration: none;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,0.19961488013174022) ;
  
}
</style>