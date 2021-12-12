<template>
  <div class="row bg-light">
    <div>
      {{ searchCocktailById() }}
    </div>

    <div class="col-md-12">
      <div class="row align-items-center">
        <div class="col-md-4">
          <h1>{{ name }}</h1>
          <img v-bind:src="imgName" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="row justify-content-center">
            <div class="col-md-3">

              <h5>Ingrédients</h5>
              <p v-for="(ingre, index) in ingredient" :key="index">
                {{ ingre }}
              </p>
            </div>
            <div class="col-md-3">

              <h5>Dosage</h5>
              <p v-for="(dose, index) in dosage" :key="index">
                {{ dose }}
              </p>
            </div>

            <div class="col-md-8">
              <h5>Recette</h5>
              <p class="card-text">
                <small class="text-muted">{{ instructions }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 retour">
      <router-link to="/">
        <button type="button" class="btn btn-outline-warning">
          Retour à la page d'accueil
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CocktailDetails",
  props: {
  },
  data() {
    return {
      title: "Détails du cocktail",
      name: null,
      currentCocktail: null,
      imgName: null,
      ingredient: null,
      dosage: null,
      instructions: null,
      id: null,
    };
  },
  methods: {
    searchCocktailById: function () {
      let id = this.$route.params.id;
      console.log(id);

      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => {
          this.name = response.data.drinks[0].strDrink;
          this.imgName = response.data.drinks[0].strDrinkThumb;
         
          //Pour strIngredient1/2/3... => boucle foreach pour push in array la liste d'ingredients
          let currentCocktail = response.data.drinks[0];
          let ingredients = [];
          const asArray = Object.entries(currentCocktail);
          asArray.forEach(([key, value]) => {
            if (key.startsWith("strIngredient") == true && value !== null) {
              ingredients.push(value);
            }
          });

          console.log(ingredients);
          this.ingredient = ingredients;

          //Pour strMeasure => meme principe mais avec la longueur du tableau de strIngredient
          console.log(ingredients.length);
          let measures = [];
          let ingredientsLenght = ingredients.length;
          asArray.forEach(([key, value]) => {
            if (key.startsWith("strMeasure") == true) {
              measures.push(value);
            }
          });
          console.log(measures.slice(0, ingredientsLenght));

          //Dans la vue => strIngredient1 => strMeasure1
          var arrayForInstructions = [];
          let ingredientKey;
          let measureValue;
          let i;
          for (i = 0; i < ingredients.length; i++) {
            ingredientKey = ingredients[i];
            measureValue = measures[i];
            var array2 = (arrayForInstructions[ingredientKey] = measureValue);
            arrayForInstructions.push(array2);
          }
          console.log(arrayForInstructions);
          this.dosage = arrayForInstructions;

          //Pour strInstructionsFR => Dans la vue : if strInstructionsFR == null alors strInstructions
          if (currentCocktail.strInstructionsFR == null) {
            this.instructions = currentCocktail.strInstructions;
          } else {
            this.instructions = currentCocktail.strInstructionsFR;
          }
          console.log(currentCocktail);
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.searchCocktailById();
  },
};
</script>
<style scoped>
.list-group-horizontal {
  width: 100%;
  overflow-y: hidden;
}
h1 {
  margin: 8px;
  color: #5b9fb9;
}

h5 {
  color: #5b9fb9;
  margin: 10px;
}

.retour {
  text-align: center;
}
</style>