<template>
  <div class="productcard">
    <div
      class="columns"
      v-for="(trucks, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div class="column" v-for="(truck, index) in trucks" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="truck.src" :alt="truck.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ truck.name }}</p>
              <p class="subtitle">{{ truck.price }}</p>
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
      trucks: [
        {
          src: require("@/assets/images/trucks/blacktruck.png"),
          name: "Independent Forged Titanium 139 Skateboard Trucks Black",
          price: "€124",
          alt: "Independent Forged Titanium 139 Skateboard Trucks Black"
        },
        {
          src: require("@/assets/images/trucks/bluetruck.png"),
          name: "Independent Forged Hollow 159 Anodised Blue Skateboard Trucks",
          price: "€112",
          alt: "Independent Forged Hollow 159 Anodised Blue Skateboard Trucks"
        },
        {
          src: require("@/assets/images/trucks/redtruck.png"),
          name:
            "Independent Forged Hollow 144 Vintage Cross Red Skateboard Trucks",
          price: "€112",
          alt:
            "Independent Forged Hollow 144 Vintage Cross Red Skateboard Trucks"
        },
        {
          src: require("@/assets/images/trucks/silvertruck.png"),
          name: "Independent 139 STD Silver Skateboard Trucks",
          price: "€89",
          alt: "Independent 139 STD Silver Skateboard Trucks"
        }
      ]
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.trucks, 2);
    }
  },

  methods: {
    changeShowDecks() {
      this.$store.state.showTrucks = false;
      this.$store.state.showWheels = true;
    }
  }
};
</script>

<style scoped>
.productcard {
  margin: 0.4em 1.2em 0 0;
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
