<template>
  <div class="productcard">
    <div class="columns">
      <div class="column" v-for="(deck, index) in decks" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="deck.src" :alt="deck.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ deck.name }}</p>
              <p class="subtitle">€ {{ deck.price }}</p>
              <br /><br /><br />
              <p class="subtitle is-6">Maat: {{ deck.size }}</p>
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
      decks: [
        {
          src: require("@/assets/images/decks/alien.png"),
          name: "Alien Skateboard Deck",
          price: 112,
          size: "8.25",
          alt: "Alien Skateboard Deck",
          id: 0
        },
        {
          src: require("@/assets/images/decks/firstskateboard.png"),
          name: "My First Skateboard Deck",
          price: 50,
          size: "6.8",
          alt: "My First Skateboard Deck",
          id: 1
        },
        {
          src: require("@/assets/images/decks/superorange.png"),
          name: "SO Skateboard Deck",
          price: 65.95,
          size: "7.6",
          alt: "SO Skateboard Deck",
          id: 2
        },
        {
          src: require("@/assets/images/decks/outerspace.png"),
          name: "Outerspace Skateboard Deck",
          price: 89.99,
          size: "8.0",
          alt: "Outerspace Skateboard Deck",
          id: 3
        }
      ],
    };
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showDecks = false;
      this.$store.state.showTrucks = true;

      this.$store.state.disableTrucks = false;
      this.$store.state.disableDeck = true;

      this.$store.state.showCheckDeck = false;

      this.$store.state.decksName = this.decks[index].name;
      this.$store.state.decksImage = this.decks[index].src;
      this.$store.state.decksPrice = this.decks[index].price;

      // axios
      //   .post(
      //     "https://createyourownskateboard.firebaseio.com/decks.json",
      //     this.deck4
      //   )
      //   .then(res => console.log(res))
      //   .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped lang="scss">
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

pre{
  background-color: white;
  padding: 0 1em 0 1em;
  color: black;
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

  .skateboardimage {
    width: 60%;
  }
}
</style>
