<template>
  <div id="app" class="container-xxl">
    <header-app />
    <router-view></router-view>
    <category-list />
  </div>
</template>

<script>
import CategoryList from "./components/CategoryList.vue";
import HeaderApp from "./components/header.vue";
export default {
  name: "App",
  components: {
    CategoryList,
    HeaderApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  opacity: 80%;
  font-family: "Fuzzy Bubbles", cursive;


}


img.rounded {
  width: 120px;
  height: 120px;
  margin: 3px;
}

.searchby{
  padding-top:20px
}


</style>
