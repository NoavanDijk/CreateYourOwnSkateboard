<template>
  <div class="productcard">
    <div
      class="columns"
      v-for="(bearings, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div
        class="column"
        v-for="(bearing, index) in bearings"
        v-bind:key="index"
      >
        <div class="card">
          <div class="card-content">
            <img
              class="skateboardimage"
              :src="bearing.src"
              :alt="bearing.alt"
            />
            <div class="content">
              <br />
              <p class="subtitle">{{ bearing.name }}</p>
              <p class="subtitle">{{ bearing.price }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <button class="addbutton" @click="changeShowDecks">
              <p class="card-footer-item">
                <span>Add</span>
              </p>
            </button>
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
      bearings: [
        {
          src: require("@/assets/images/bearings/blackbearrings.png"),
          name: "Andale Abec 7 Skateboard Bearings",
          price: "€49",
          alt: "Andale Abec 7 Skateboard Bearings"
        },
        {
          src: require("@/assets/images/bearings/greenbearrings.png"),
          name:
            "Aegis Green Skateboard Bearings",
          price: "€29",
          alt: "Aegis Green Skateboard Bearings"
        },
        {
          src: require("@/assets/images/bearings/rainbowbearrings.png"),
          name:
            "Aegis Rainbow Luxe Skateboard Bearings",
          price: "€29",
          alt:
            "Aegis Rainbow Luxe Skateboard Bearings"
        },
        {
          src: require("@/assets/images/bearings/redbearrings.png"),
          name: "Bones Reds Skateboard Bearings",
          price: "€32",
          alt: "Bones Reds Skateboard Bearings"
        }
      ]
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.bearings, 2);
    }
  },

  methods: {
    changeShowDecks() {
      this.$store.state.showBearings = false;
      this.$store.state.showBolts = true;
    }
  }
};
</script>

<style scoped>
.productcard {
  margin: 0.4em 1.2em 0 0;
}

.skateboardimage {
  width: 43.8%;
  margin: 0.5em 2.5em 0.5em 0.5em;
}

.card-content {
  display: flex;
}

.card {
  margin: 0.5em;
  width: 90;
}

.column {
  padding: 0.75rem 0 0 0rem;
}

.columns:not(:last-child),
.columns:not(:last-child) {
  margin-bottom: 0;
}

.addbutton {
  width: 50%;
  border: 0;
  background-color: white;
  cursor: pointer;
}
</style>
