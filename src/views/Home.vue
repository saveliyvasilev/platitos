<template>
  <div id="main-layout">
    <div class="header">
      <h1>Qué comemos hoy?</h1>
    </div>
    <div class="about">
      ABOUT ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam totam velit cum. Ut rem debitis rerum. Vel, reiciendis cum.
    </div>
    <div class="dish-grid-container">
      <DishGrid />
    </div>
    <div class="footer">
      Footer Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Ex maiores tempore optio autem. Ratione reprehenderit exercitationem delectus ipsa, repellendus ut.
    </div>
    
  </div>
  
</template>

<script>
import DishGrid from "@/components/DishGrid.vue";

export default {
  name: "Home",
  components: {
    DishGrid,
  },
};
</script>
