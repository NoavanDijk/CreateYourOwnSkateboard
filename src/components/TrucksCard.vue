<template>
  <div class="productcard">
    <div class="columns">
      <div class="column" v-for="(truck, index) in trucks" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="truck.src" :alt="truck.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ truck.name }}</p>
              <p class="subtitle">€ {{ truck.price }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <button class="addbutton" @click="changeShowDecks(index)">
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
import axios from "axios";

export default {
  data() {
    return {
      trucks: [
        {
          src: require("@/assets/images/trucks/blacktruck.png"),
          name: "Independent Forged Titanium 139 Skateboard Trucks Black",
          price: 124,
          alt: "Independent Forged Titanium 139 Skateboard Trucks Black",
          id: 4,
        },
        {
          src: require("@/assets/images/trucks/bluetruck.png"),
          name: "Independent Forged Hollow 159 Anodised Blue Skateboard Trucks",
          price: 112,
          alt: "Independent Forged Hollow 159 Anodised Blue Skateboard Trucks",
          id: 5,
        },
        {
          src: require("@/assets/images/trucks/redtruck.png"),
          name:
            "Independent Forged Hollow 144 Vintage Cross Red Skateboard Trucks",
          price: 112,
          alt:
            "Independent Forged Hollow 144 Vintage Cross Red Skateboard Trucks",
          id: 6,
        },
        {
          src: require("@/assets/images/trucks/silvertruck.png"),
          name: "Independent 139 STD Silver Skateboard Trucks",
          price: 89,
          alt: "Independent 139 STD Silver Skateboard Trucks",
          id: 7,
        },
      ],

      choices: [],
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.trucks, 2);
    },
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showTrucks = false;
      this.$store.state.showWheels = true;

      axios
        .post(
          "https://createyourownskateboard.firebaseio.com/decks.json",
          this.trucks[index]
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
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
  width: 40%;
  margin: 1.2em 2.5em 1em 0.5em;
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
</style>
