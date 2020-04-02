<template>
  <div>
    <div
      class="producten"
      v-for="(result, index) in results"
      v-bind:key="index"
    >
      <article class="media">
        <figure class="media-left">
          <p class="image is-128x128">
            <img :src="result.src" :alt="result.alt" />
          </p>
        </figure>
        <div class="media-content">
          <div class="field">
            <p>{{ result.name }}</p>
            <br />
            <p>€ {{ result.price }}</p>
          </div>
        </div>
      </article>
      <hr />
    </div>
    <h1>Totaal bedrag: {{ totalprice }}</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      results: [],
      finalChoices: [],
      totalprice: 0
    };
  },

  methods: {
    createdMethod() {
      axios
        .get("https://createyourownskateboard.firebaseio.com/decks.json")
        .then(response => {
          this.results = response.data;

          var choices = [];
          for (let key in this.results) {
            this.results[key].id = key;
            choices.push(this.results[key]);
          }
          this.finalChoices = choices;

          var totalprices = [];
          for (var i = 0; i < this.finalChoices.length; i++) {
            totalprices.push(this.finalChoices[i].price);
          }

          this.totalprice = totalprices.reduce((a, b) => a + b, 0);
        })
        .catch(error => console.log(error));
    }
  },

  created() {
    this.createdMethod();
  }
};
</script>

<style scoped>
.producten {
  padding: 1em;
}
</style>
