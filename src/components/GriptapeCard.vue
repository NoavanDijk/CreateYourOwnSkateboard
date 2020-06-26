<template>
  <div class="productcard">
    <div class="columns">
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
              <br />
              <p class="subtitle">{{ griptape.name }}</p>
              <p class="subtitle">€ {{ griptape.price }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <router-link to="/orderform">
              <button class="addbutton" @click="changeShowDecks(index)">
                <p class="card-footer-item">
                Voeg toe aan <pre><i class="fas fa-shopping-cart"></i></pre>
              </p>
              </button>
            </router-link>
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
      griptapes: [
        {
          src: require("@/assets/images/griptape/basementgriptape.png"),
          name: "Basement Mini Logo Griptape Sheet",
          price: 7,
          alt: "Basement Mini Logo Griptape Sheet",
          id: 20,
        },
        {
          src: require("@/assets/images/griptape/blackbasementgriptape.png"),
          name: "Basement Skate Logo Black Griptape Sheet",
          price: 14,
          alt: "Basement Skate Logo Black Griptape Sheet",
          id: 21,
        },
        {
          src: require("@/assets/images/griptape/diamondgriptape.png"),
          name: "Diamond Brilliant Blue Printed Griptape Sheet",
          price: 14,
          alt: "Diamond Brilliant Blue Printed Griptape Sheet",
          id: 22,
        },
        {
          src: require("@/assets/images/griptape/pandagriptape.png"),
          name: "Enjoi Astro Panda Skateboard Griptape Sheet",
          price: 21,
          alt: "Enjoi Astro Panda Skateboard Griptape Sheet",
          id: 23,
        },
      ],
    };
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showGriptape = false;
      this.$store.state.showOrderform = true;

      this.$store.state.gripTapeClicked = true;
      this.$store.state.showCheckGriptape = false;

      this.$store.state.griptapeName = this.griptapes[index].name;
      this.$store.state.griptapeImage = this.griptapes[index].src;
      this.$store.state.griptapePrice = this.griptapes[index].price;

      // axios
      //   .post(
      //     "https://createyourownskateboard.firebaseio.com/decks.json",
      //     this.griptapes[index]
      //   )
      //   .then((res) => console.log(res))
      //   .catch((error) => console.log(error));
    }
  }
};
</script>

<style scoped>
.productcard {
  margin: 0.4em 1.2em 0 0;
  column-count: 2;
}

.skateboardimage {
  width: 47%;
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
  border: 0;
  background-color: white;
  cursor: pointer;
}

a {
  width: 50%;
  text-align: center;
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
