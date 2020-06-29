<template>
  <div>
    <app-nav-bar></app-nav-bar>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-two-fifths">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Account
            </p>
          </header>
          <div class="card-content">
            <p>Naam: {{ user.data.displayName }}</p>
            <p>E-mail: {{ user.data.email }}</p>

            <h1 class="titleOrders"><b>Overzicht bestellingen</b></h1>
            <table class="table is-bordered is-fullwidth">
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Bedrag</th>
                </tr>
              </thead>
              <tfoot></tfoot>
              <tbody>
                <tr>
                  <td>
                    <div v-for="(date, index) in dates" :key="index" @click="openOrder(index)">
                      <p>{{ date }}</p>
                    </div>
                  </td>
                  <td>
                    <div v-for="totalPrice in totalPrices" :key="totalPrice">
                      <p>{{ totalPrice }}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import axios from "axios";
import moment from "moment";
import Navbar from "@/auth/Navbar.vue";

export default {
  data() {
    return {
      results: [],
      finalChoices: [],
      allUsersIDs: [],
      currentUserIDs: [],
      sameIDs: [],
      dates: [],
      totalPrices: [],
    };
  },

  components: {
    appNavBar: Navbar,
  },

  computed: {
    ...mapGetters({
      user: "user",
    }),
  },

  created() {
    this.createdMethod();
  },

  methods: {
    createdMethod() {
      axios
        .get("https://createyourownskateboard.firebaseio.com/orders.json")
        .then((response) => {
          this.results = response.data;

          var choices = [];
          for (let key in this.results) {
            this.results[key].id = key;
            choices.push(this.results[key]);
          }

          this.finalChoices = choices;
          console.log(this.finalChoices);

          for (var i = 0; i < this.finalChoices.length; i++) {
            if (this.finalChoices[i][0] == firebase.auth().currentUser.uid) {
              this.sameIDs.push(this.finalChoices[i]);
              console.log(this.sameIDs);
            }
          }

          for (var j = 0; j < this.sameIDs.length; j++) {
            console.log(this.sameIDs[j][3]);
            console.log(this.sameIDs[j].id);
            this.dates.push(
              moment.unix(this.sameIDs[j][1]).format("MM/DD/YYYY")
            );
            this.totalPrices.push(this.sameIDs[j][2]);
          }
        })
        .catch((error) => console.log(error));
    },

    openOrder(index) {
      console.log(index);
    }
  },
};
</script>

<style scoped>
.card {
  margin: 2em 0 1.3em 0;
  padding: 0;
}

.titleOrders, th{
  color: black;
}
</style>
