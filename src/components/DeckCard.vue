<template>
  <div class="productcard">
    <div
      class="columns"
      v-for="(decks, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div class="column" v-for="(deck, index) in decks" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="deck.src" :alt="deck.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ deck.name }}</p>
              <p class="subtitle">{{ deck.price }}</p>
              <br /><br /><br />
              <p class="subtitle is-6">Maat: {{ deck.size }}</p>
            </div>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item"></p>
            <button class="addbutton" @click="changeShowDecks">
              <p class="card-footer-item">
                Add
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
      decks: [
        {
          src: require("@/assets/images/decks/alien.png"),
          name: "Alien Skateboard Deck",
          price: "€112",
          size: "8.25",
          alt: "Alien Skateboard Deck"
        },
        {
          src: require("@/assets/images/decks/firstskateboard.png"),
          name: "My First Skateboard Deck",
          price: "€50",
          size: "6.8",
          alt: "My First Skateboard Deck"
        },
        {
          src: require("@/assets/images/decks/superorange.png"),
          name: "SO Skateboard Deck",
          price: "€65,95",
          size: "7.6",
          alt: "SO Skateboard Deck"
        },
        {
          src: require("@/assets/images/decks/outerspace.png"),
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
      return chunk(this.decks, 2);
    }
  },

  methods: {
    changeShowDecks() {
      this.$store.state.showDecks = false;
      this.$store.state.showTrucks = true;
    }
  }
};
</script>

<style scoped>
.productcard {
  margin: 0.4em 1.2em 0 0;
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
