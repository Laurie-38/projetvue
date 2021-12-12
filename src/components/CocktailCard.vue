<template>
  <div>
    <router-link v-bind:to="`/${one.idDrink}`" class="link">
      <div class="card" style="width: 18rem">
        <img v-bind:src="one.strDrinkThumb" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">{{ one.strDrink }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CocktailCard",
  props: {
    one: Object,
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
  margin: 3px;
}

.card-body {
  text-decoration: none;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.19961488013174022);
}
.link {
  text-decoration: none;
  color: whitesmoke;
}
</style>
