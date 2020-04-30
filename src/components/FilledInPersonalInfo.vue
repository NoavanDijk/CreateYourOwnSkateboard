<template>
  <div class="filledinpersonalinfo">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title titel">
              Bevestiging
            </p>
          </header>
          <div class="card-content">
            <p>
              Beste {{ gender }} {{ firstname }} {{ insertion }}
              {{ lastname }}
            </p>
            <p>U wilt het volgende bestellen:</p>
            <ul v-for="(result, index) in results" v-bind:key="index">
              <li>{{ result.name }}</li>
            </ul>
            <br />
            <p>U heeft de volgende gegevens ingevuld:</p>
            <label class="label zipcode">Postcode</label>
            <p>{{ zipcode }}</p>
            <label class="label">E-mailadres</label>
            <p>{{ email }}</p>
            <label class="label">Bank</label>
            <p>{{ bank }}</p>
            <label class="label">Rekeningnummer</label>
            <p>{{ accountnumber }}</p>
            <label class="label">Pasnummer</label>
            <p>{{ pasnumber }}</p>
          </div>
          <footer class="card-footer">
            <router-link to="/personalinformation">
              <button class="button startover">
                Ga terug
              </button>
            </router-link>
            <router-link to="/thanksfororder">
              <button class="button next" @click="goToThanksForOrder">
                Bevestigen
              </button>
            </router-link>
          </footer>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      results: [],
      finalChoices: [],
    };
  },

  props: [
    "gender",
    "firstname",
    "insertion",
    "lastname",
    "zipcode",
    "housenumber",
    "addition",
    "email",
    "bank",
    "accountnumber",
    "pasnumber",
  ],

  methods: {
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

    goToThanksForOrder() {
      this.$store.state.goToThanksForOrder = true;
    },
  },

  created() {
    this.createdMethod();
  },
};
</script>

<style scoped>
.card {
  margin: 2em 0 1.3em 0;
  padding: 0;
}

.label:not(:last-child) {
  margin-bottom: 0;
}

p {
  margin: 0 0 1em 0;
}

.titel {
  margin: 0;
}

a {
  width: 50%;
  border-left: 0.5px solid #ececec;
}

.next {
  width: 100%;
  border: 0;
  background-color: #28a745;
  cursor: pointer;
  height: 100%;
  color: white;
  border-radius: 0;
}

.next:hover {
  background-color: #218838;
  border-color: #1e7e34;
  color: white;
}

.startover {
  width: 97%;
  border: 0;
  background-color: white;
  cursor: pointer;
  margin: 0.5em 2em 0.5em 0.5em;
}

ul {
  list-style-type: square;
  margin-left: 3em;
}

.zipcode {
  margin-top: 1em;
}

.button {
  margin-bottom: 0.5em;
}
</style>
