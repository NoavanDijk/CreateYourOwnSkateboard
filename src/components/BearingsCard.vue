<template>
  <div class="productcard">
    <div class="columns">
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
              <p class="subtitle">€ {{ bearing.price }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <button class="addbutton" @click="changeShowDecks(index)">
              <p class="card-footer-item">
                Voeg toe aan winkelmandje<pre><i class="fas fa-shopping-cart"></i></pre>
              </p>
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bearings: [
        {
          src: require("@/assets/images/bearings/blackbearrings.png"),
          name: "Andale Abec 7 Skateboard Bearings",
          price: 49,
          alt: "Andale Abec 7 Skateboard Bearings",
          id: 12
        },
        {
          src: require("@/assets/images/bearings/greenbearrings.png"),
          name: "Aegis Green Skateboard Bearings",
          price: 29,
          alt: "Aegis Green Skateboard Bearings",
          id: 13
        },
        {
          src: require("@/assets/images/bearings/rainbowbearrings.png"),
          name: "Aegis Rainbow Luxe Skateboard Bearings",
          price: 29,
          alt: "Aegis Rainbow Luxe Skateboard Bearings",
          id: 14
        },
        {
          src: require("@/assets/images/bearings/redbearrings.png"),
          name: "Bones Reds Skateboard Bearings",
          price: 32,
          alt: "Bones Reds Skateboard Bearings",
          id: 15
        }
      ],
    };
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showBearings = false;
      this.$store.state.showBolts = true;

      this.$store.state.disableBolts = false;
      this.$store.state.disableBearings = true;

      this.$store.state.showCheckBearings = false;

      axios
        .post(
          "https://createyourownskateboard.firebaseio.com/decks.json",
          this.bearings[index]
        )
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
  },
};
</script>

<style scoped>
.productcard {
  margin: 0.4em 1.2em 0 0;
  column-count: 2;
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

.columns {
  display: flex;
  flex-direction: column;
  padding: 0.4em;
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

pre{
  background-color: white;
  padding: 0 1em 0 1em;
  color: black;
}

.card-footer-item{
  font-size: 15px;
}

@media (min-width: 320px) and (max-width: 635px) {
  .productcard {
    margin: 0 0.7em 0 0;
    column-count: 1;
  }

  .columns{
    margin: -0.75rem -0.75rem 0 0;
  }
}
</style>
