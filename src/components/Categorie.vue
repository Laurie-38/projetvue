<template>
  <div class="row">
    <p v-on="getCategory()">{{ categorieName }}</p>
    <div v-for="(one, index) in cateData" :key="index" class="col-md-2 bg-dark">
      <router-link v-bind:to="`/${one.idDrink}`" class="link">
        <div class="card" style="width: 18rem">
          <img v-bind:src="one.strDrinkThumb" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">{{ one.strDrink }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Categorie",
  props: {
    categorieName: String,
  },
  data() {
    return {
      cateData: null,
    };
  },

  methods: {
    getCategory() {
      let name = this.categorieName;

      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`)
        .then((response) => {
          let arrayByCate = response.data.drinks;
          this.cateData = arrayByCate;
        })
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getCategory();
  },
};
</script>

<style scoped>
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

.link {
  text-decoration: none;
  color: whitesmoke;
}
</style>
