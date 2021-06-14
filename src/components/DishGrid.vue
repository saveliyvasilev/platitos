<template>
  <div class="dishgrid">
     <div v-for="dish in dishes" :key="dish.id" class=dish-item>
      <!-- {{ fn_withIngredients("Sal").map((el) => (el.id)) }} -->
      <div class="dish-caption">{{ dish.id }}</div>
      <figure>
        <img class="dish-image hidden" :src="hovered === dish.id ? dish.img_back : dish.img_front"
        @mouseover="hovered = dish.id"
        @mouseleave="hovered = null">
        <!-- <img class="dish-image" src="../assets/empty_dish_2.png"> -->
      </figure>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'DishGrid',
  data () {
    return {
      hovered: null,
    }
  },
  methods: {
    fn_withIngredients(a) {
      return this.withIngredients(a);
    }
  },
  computed: {
    ...mapState(["dishes"]),
    ...mapGetters(["withIngredients"]),
  },
}
</script>

<style type="scss">
figure {
  margin: 0;
}

.dish-caption {
  position: absolute;
  bottom: 5%;
  left: 30%;
  right: 30%;
  text-align: center;
  background: rgba(0, 0, 0, 0.75);
  color: white;
}

.dish-item {
  position: relative;
}

.dish-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.dishgrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 0.5em;
  align-items:flex-end;
}
</style>
