<template>
  <div>
    <div
      class="columns"
      v-for="(skateboards, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div
        class="column"
        v-for="(skateboard, index) in skateboards"
        v-bind:key="index"
      >
        <div class="card">
          <div class="card-content">
            <img
              class="skateboardimage"
              :src="skateboard.src"
              :alt="skateboard.alt"
            />
            <p class="subtitle">{{ skateboard.name }}</p>
            <p class="subtitle">{{ skateboard.price }}</p>
            <p class="subtitle">Maat: {{ skateboard.size }}</p>
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
      skateboards: [
        {
          src: require("@/assets/images/alien.png"),
          name: "Alien Skateboard Deck",
          price: "€112",
          size: "8.25",
          alt: "Alien Skateboard Deck"
        },
        {
          src: require("@/assets/images/firstskateboard.png"),
          name: "My First Skateboard Deck",
          price: "€50",
          size: "6.8",
          alt: "My First Skateboard Deck"
        },
        {
          src: require("@/assets/images/superorange.png"),
          name: "Super Orange Skateboard Deck",
          price: "€65,95",
          size: "7.6",
          alt: "Super Orange Skateboard Deck"
        },
        {
          src: require("@/assets/images/outerspace.png"),
          name: "Outerspace Skateboard Deck",
          price: "€89,99",
          size: "8.0",
          alt: "Outerspace Skateboard Deck"
        }
      ]
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.skateboards, 2);
    }
  }
};
</script>

<style scoped>
.skateboardimage {
  width: 50%;
}
</style>
