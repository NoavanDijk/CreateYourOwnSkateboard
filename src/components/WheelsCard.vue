<template>
  <div class="productcard">
    <div class="columns">
      <div class="column" v-for="(wheel, index) in wheels" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="wheel.src" :alt="wheel.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ wheel.name }}</p>
              <p class="subtitle">€ {{ wheel.price }}</p>
              <br /><br />
              <p class="subtitle is-6">Maat: {{ wheel.size }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <button class="addbutton" @click="changeShowDecks(index)">
              <p class="card-footer-item">
                Voeg toe aan <pre><i class="fas fa-shopping-cart"></i></pre>
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
      wheels: [
        {
          src: require("@/assets/images/wheels/blackwheels.png"),
          name: "Speedlab Sirens Skateboard Wheels",
          price: 68,
          size: "55mm",
          alt: "Speedlab Sirens Skateboard Wheels",
          id: 8,
        },
        {
          src: require("@/assets/images/wheels/bluewheels.png"),
          name: "Bones 100's Sidecuts White Skateboard Wheels",
          price: 48,
          size: "53mm",
          alt: "Bones 100's Sidecuts White Skateboard Wheels",
          id: 9,
        },
        {
          src: require("@/assets/images/wheels/redwheels.png"),
          name: "Bones 100's Sidecuts Black Skateboard Wheels",
          price: 48,
          size: "52mm",
          alt: "Bones 100's Sidecuts Black Skateboard Wheels",
          id: 10,
        },
        {
          src: require("@/assets/images/wheels/whitewheels.png"),
          name: "Bones STF Sidecut Oats Skateboard Wheels",
          price: 64,
          size: "53mm",
          alt: "Bones STF Sidecut McClung Oats Skateboard Wheels",
          id: 11,
        },
      ],
    };
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showWheels = false;
      this.$store.state.showBearings = true;

      this.$store.state.disableBearings = false;
      this.$store.state.disableWheels = true;

      this.$store.state.showCheckWheels = false;

      axios
        .post(
          "https://createyourownskateboard.firebaseio.com/decks.json",
          this.wheels[index]
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

@media (min-width: 320px) and (max-width: 635px) {
  .productcard {
    margin: 0 0.7em 0 0;
    column-count: 1;
  }

  .card-footer-item{
  font-size: 15px;
}

  .columns{
    margin: -0.75rem -0.75rem 0 0;
  }

  .skateboardimage {
    width: 50%;
  }
}
</style>
