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
                Add<pre><i class="fas fa-plus"></i></pre>
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
          id2: 0
        },
        {
          src: require("@/assets/images/decks/firstskateboard.png"),
          name: "My First Skateboard Deck",
          price: 50,
          size: "6.8",
          alt: "My First Skateboard Deck",
          id2: 1
        },
        {
          src: require("@/assets/images/decks/superorange.png"),
          name: "SO Skateboard Deck",
          price: 65.95,
          size: "7.6",
          alt: "SO Skateboard Deck",
          id2: 2
        },
        {
          src: require("@/assets/images/decks/outerspace.png"),
          name: "Outerspace Skateboard Deck",
          price: 89.99,
          size: "8.0",
          alt: "Outerspace Skateboard Deck",
          id2: 3
        }
      ],

      results: [],
      finalChoices: [],
    };
  },

  created() {
    this.createdMethod();
    console.log("test");
  },

  methods: {
    changeShowDecks(index) {
      this.$store.state.showDecks = false;
      this.$store.state.showTrucks = true;

      console.log(this.finalChoices);
      if(this.finalChoices.length == 0){
        console.log("Leeg");
        axios
            .post(
              "https://createyourownskateboard.firebaseio.com/decks.json",
              this.decks[index]
            )
            .then(res => console.log(res))
            .catch(error => console.log(error));
      }else{
        console.log("niet leeg");
         for(var i = 0; i < this.finalChoices.length; i++){
          if(this.finalChoices[i].id2 == 0 || this.finalChoices[i].id2 == 1 || this.finalChoices[i].id2 == 2 || this.finalChoices[i].id2 == 3){
            console.log("bestaat al");
            axios.put("https://createyourownskateboard.firebaseio.com/decks.json", { 
              data: this.decks[index]
            })
            .then(res => {console.log(res); console.log("put gedaan");})
            .catch(error => console.log(error));

          }else{
            console.log("bestaat nog niet");
            axios
              .post(
                "https://createyourownskateboard.firebaseio.com/decks.json",
                this.decks[index]
              )
              .then(res => console.log(res))
              .catch(error => console.log(error));
          }
        }
      }
    },

    createdMethod() {
      axios
        .get("https://createyourownskateboard.firebaseio.com/decks.json")
        .then((response) => {
          console.log(response);
          this.results = response.data;

          var choices = [];
          for (let key in this.results) {
            this.results[key].id = key;
            choices.push(this.results[key]);
          }
          this.finalChoices = choices;
        })
        .catch((error) => console.log(error));
    }, 
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

@media (min-width: 320px) and (max-width: 635px) {
  .productcard {
    margin: 0.4em 1.2em 0 0;
    column-count: 1;
  }
}
</style>
