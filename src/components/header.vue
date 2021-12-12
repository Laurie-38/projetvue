<template>
  <div class="row bg-light head">
    <div class="col-md-12">
      <div class="row align-items-center">
        <div class="col-md-2">
          <router-link to="/">
            <img id="logo" alt="Vue logo" src="./../assets/api_drink.png" />
          </router-link>
        </div>
        <div class="col-md-6 offset-md-1">
          <h2 class="recherche">
            <i class="fas fa-tint"></i>

            Recherche
          </h2>
          <div class="row buttons">
            <div class="col offset-md-1">
              <router-link to="/cocktail">
                <button
                  type="button"
                  class="btn btn-outline-light button-header"
                >
                  Par cocktail
                </button>
              </router-link>
            </div>
            <div class="col">
              <router-link to="/cocktail-letter">
                <button
                  type="button"
                  class="btn btn-outline-light button-header"
                >
                  Par 1ère lettre
                </button>
              </router-link>
            </div>
            <div class="col">
              <router-link to="/cocktail-ingredient" class="link">
                <button
                  type="button"
                  class="btn btn-outline-light button-header"
                >
                  Par ingrédient
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-3 random">
          <button
            v-on:click="greet"
            type="button"
            class="btn btn-outline-warning button-random"
          >
            <i class="fas fa-random"></i> &nbsp;
            <i class="fas fa-cocktail"></i>
          </button>
          <router-link v-bind:to="`/${idRandom}`" class="link">
            <img
              class="rounded mx-auto d-block"
              v-bind:src="imgRandom"
              alt=""
            />
            <p class="random-text">
              {{ random }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "HeaderApp",
  data() {
    return {
      random: "",
      imgRandom: "",
      idRandom: "",
    };
  },

  methods: {
    greet: function () {
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => {
          console.log(response);
          this.random = response.data.drinks[0].strDrink;
          console.log(this.random);
          this.imgRandom = response.data.drinks[0].strDrinkThumb;
          this.idRandom = response.data.drinks[0].idDrink;
        })
        .catch((error) => console.log(error));
    },
  },

  mounted() {
    this.greet();
  },
};
</script>
<style scoped>
h4 {
  font-family: "Fuzzy Bubbles", cursive;
}

.head {
  border-bottom: 4px solid #5b9fb9;
}

.link {
  text-decoration: none;
  color: black;
}

.button-header {
  color: #5b9fb9;
  border-color: #5b9fb9;
}

.button-header:hover {
  background-color: #5b9fb9;
  color: #ffc659;
  border: 1px solid #ffc659;
}
.buttons {
  margin-top: 20px;
  padding-bottom: 20px;
}

.random {
  margin-bottom: 0;
  padding-bottom: 0;
}
.random-text {
  color: #5b9fb9;
}

.recherche {
  color: #ffc659;
  font-weight: normal;
  letter-spacing: 10px;
  font-size: 40px;
}

.fa-tint{
     transform : rotate(-25deg);
}
</style>