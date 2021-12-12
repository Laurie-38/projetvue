<template>
  <div class="row categorylist">
    
      <div class="col-md-12">
        <button
          v-for="(one, index) in categories"
          :key="index"
          v-on:click="getCategoryList2(one)"
          type="button"
          class="btn"
          :class="{isActive:index == selected}" @click="selected = index"
        >
          {{ one }}
        </button>
        <div class="row">
          <div class="col">
            <Categorie :categorie-name="name" />
          </div>
        </div>
      </div>
   
  </div>
</template>

<script>
import axios from "axios";
import Categorie from "./Categorie.vue";
export default {
  name: "CategoryList",
  components: { Categorie },
  data() {
    return {
      title: "Catégories",
      categories: null,
      name: null,
      selected : undefined,
    };
  },
  methods: {
    getCategoryList() {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
        .then((response) => {
          let categories = response.data.drinks;
          let arrayCategories = [];
          categories.forEach((element) => {
            arrayCategories.push(element.strCategory);
          });
          this.categories = arrayCategories;
        })
        .catch((error) => console.log(error));
    },
    getCategoryList2(cat) {
      this.name = cat;
    },

    activeCard: function () {
      this.isActive = !this.isActive;
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>
<style scoped>
.list-group-horizontal {
  width: 100%;
  overflow-y: hidden;
}
button {
  margin: 8px;
  background-color : #5b9fb9 !important;
  color: whitesmoke;
}
.row{
    padding: 0;
}

.isActive{
    color:#FFC659
}
.categorylist{
    background-color: rgba(0,0,0,0);
    margin-top: 30px;
}
</style>