<template>
  <div class="productcard">
    <div
      class="columns"
      v-for="(griptapes, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div
        class="column"
        v-for="(griptape, index) in griptapes"
        v-bind:key="index"
      >
        <div class="card">
          <div class="card-content">
            <img
              class="skateboardimage"
              :src="griptape.src"
              :alt="griptape.alt"
            />
            <div class="content">
              <br>
              <p class="subtitle">{{ griptape.name }}</p>
              <p class="subtitle">{{ griptape.price }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <p class="card-footer-item">
              <span>Add</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var chunk = require("chunk");
export default {
  data() {
    return {
      griptapes: [
        {
          src: require("@/assets/images/griptape/basementgriptape.png"),
          name: "Basement Mini Logo Griptape Sheet",
          price: "€7",
          alt: "Basement Mini Logo Griptape Sheet"
        },
        {
          src: require("@/assets/images/griptape/blackbasementgriptape.png"),
          name: "Basement Skate Logo Black Griptape Sheet",
          price: "€14",
          alt: "Basement Skate Logo Black Griptape Sheet"
        },
        {
          src: require("@/assets/images/griptape/diamondgriptape.png"),
          name: "Diamond Brilliant Blue Printed Griptape Sheet",
          price: "€14",
          alt: "Diamond Brilliant Blue Printed Griptape Sheet"
        },
        {
          src: require("@/assets/images/griptape/pandagriptape.png"),
          name: "Enjoi Astro Panda Skateboard Griptape Sheet",
          price: "€21",
          alt: "Enjoi Astro Panda Skateboard Griptape Sheet"
        }
      ]
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.griptapes, 2);
    }
  }
};
</script>

<style scoped>
.productcard{
  margin: 0.4em 1.2em 0 0;
}

.skateboardimage {
  width: 47%;
}

.card-content{
  display: flex;
}

.card{
  margin: 0.5em;
  width: 90
}

.column{
  padding: .75rem 0 0 0rem;
}

.columns:not(:last-child), .columns:not(:last-child){
  margin-bottom: 0;
}
</style>
