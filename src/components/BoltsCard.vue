<template>
  <div class="productcard">
    <div class="columns">
      <div class="column" v-for="(bolt, index) in bolts" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="bolt.src" :alt="bolt.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ bolt.name }}</p>
              <p class="subtitle">€ {{ bolt.price }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <button class="addbutton" @click="changeShowDecks(index)">
              <p class="card-footer-item">
                Selecteer <i class="fas fa-check checkmark"></i>
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
      bolts: [
        {
          src: require("@/assets/images/bolts/bluebolts.png"),
          name: "Aegis Anodised Blue Allen Deck Bolts",
          price: 9,
          alt: "Aegis Anodised Blue Allen Deck Bolts",
          id: 16
        },
        {
          src: require("@/assets/images/bolts/bronzebolts.png"),
          name: "Aegis Anodised Bronze Allen Deck Bolts",
          price: 9,
          alt: "Aegis Anodised Bronze Allen Deck Bolts",
          id: 17
        },
        {
          src: require("@/assets/images/bolts/goldbolts.png"),
          name: "Aegis Anodised Gold Allen Deck Bolts",
          price: 9,
          alt: "Aegis Anodised Gold Allen Deck Bolts",
          id: 18
        },
        {
          src: require("@/assets/images/bolts/redbolts.png"),
          name: "Aegis Anodised Red Allen Deck Bolts",
          price: 9,
          alt: "Aegis Anodised Red Allen Deck Bolts",
          id: 19
        }
      ],
    };
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showBolts = false;
      this.$store.state.showGriptape = true;

      this.$store.state.disableGriptape = false;
      this.$store.state.disableBolts = true;

      this.$store.state.showCheckBolts = false;

      this.$store.state.boltsName = this.bolts[index].name;
      this.$store.state.boltsImage = this.bolts[index].src;
      this.$store.state.boltsPrice = this.bolts[index].price;
      
      // axios
      //   .post(
      //     "https://createyourownskateboard.firebaseio.com/decks.json",
      //     this.bolts[index]
      //   )
      //   .then(res => console.log(res))
      //   .catch(error => console.log(error));
    },
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
  width: 50%;
  border: 0;
  background-color: white;
  cursor: pointer;
}

.card-footer-item{
  font-size: 15px;
}

.checkmark {
  margin-left: 0.7em;
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
