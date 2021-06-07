<template>
  <div class="dishgrid">
     <div v-for="dish in dishes" :key="dish.id" class=dishitem>
      <!-- {{ fn_withIngredients("Sal").map((el) => (el.id)) }} -->
      {{ dish.id }}
    </div>
    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'DishGrid',
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
.dishitem {
  background-color:#FFCCFF;
}

.dishgrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 2fr));
  gap: 1em;
  align-items:flex-end;
}
</style>
