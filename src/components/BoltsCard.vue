<template>
  <div class="productcard">
    <div
      class="columns"
      v-for="(bolts, index) in chunkedSkateboards"
      v-bind:key="index"
    >
      <div class="column" v-for="(bolt, index) in bolts" v-bind:key="index">
        <div class="card">
          <div class="card-content">
            <img class="skateboardimage" :src="bolt.src" :alt="bolt.alt" />
            <div class="content">
              <br />
              <p class="subtitle">{{ bolt.name }}</p>
              <p class="subtitle">{{ bolt.price }}</p>
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
      bolts: [
        {
          src: require("@/assets/images/bolts/bluebolts.png"),
          name: "Aegis Anodised Blue Allen Deck Bolts",
          price: "€9",
          alt: "Aegis Anodised Blue Allen Deck Bolts"
        },
        {
          src: require("@/assets/images/bolts/bronzebolts.png"),
          name: "Aegis Anodised Bronze Allen Deck Bolts",
          price: "€9",
          alt: "Aegis Anodised Bronze Allen Deck Bolts"
        },
        {
          src: require("@/assets/images/bolts/goldbolts.png"),
          name: "Aegis Anodised Gold Allen Deck Bolts",
          price: "€9",
          alt: "Aegis Anodised Gold Allen Deck Bolts"
        },
        {
          src: require("@/assets/images/bolts/redbolts.png"),
          name: "Aegis Anodised Red Allen Deck Bolts",
          price: "€9",
          alt: "Aegis Anodised Red Allen Deck Bolts"
        }
      ]
    };
  },

  computed: {
    chunkedSkateboards() {
      return chunk(this.bolts, 2);
    }
  },

  methods: {
    changeShowDecks() {
      this.$store.state.showBolts = false;
      this.$store.state.showGriptape = true;
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
