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
            <br />

            <h1 class="titleOrders"><b>Overzicht bestellingen</b></h1>
            <div class="titledateandprice">
              <h1>Datum:</h1>
              <h1>Totaal bedrag:</h1>
            </div>

            <div
              v-for="(sameID, i) in sameIDs"
              :key="i"
              v-on:click="toggleDiv(i)"
            >
              <div class="dateandprice">
                <h1>{{ sameIDs[i][1] }}</h1>
                <h1>€ {{ sameIDs[i][2] }}</h1>
              </div>
              <br />

              <div v-show="showOrder[i]">
                <div class="items">
                  <div>
                    <h2><u>Deck:</u></h2>
                    <p>{{ sameIDs[i][3][0] }}</p>
                  </div>
                  <div>
                    <h2><u>Prijs:</u></h2>
                    <p>€ {{ sameIDs[i][4][0] }}</p>
                  </div>  
                </div>

                <div class="items">
                  <div>
                    <h2><u>Trucks:</u></h2>
                    <p>{{ sameIDs[i][3][1] }}</p>
                  </div>
                  <div>
                    <h2><u>Prijs:</u></h2>
                    <p>€ {{ sameIDs[i][4][1] }}</p>
                  </div>  
                </div>

                <div class="items">
                  <div>
                    <h2><u>Wielen:</u></h2>
                    <p>{{ sameIDs[i][3][2] }}</p>
                  </div>
                  <div>
                    <h2><u>Prijs:</u></h2>
                    <p>€ {{ sameIDs[i][4][2] }}</p>
                  </div>  
                </div>

                <div class="items">
                  <div>
                    <h2><u>Bearings:</u></h2>
                    <p>{{ sameIDs[i][3][3] }}</p>
                  </div>
                  <div>
                    <h2><u>Prijs:</u></h2>
                    <p>€ {{ sameIDs[i][4][3] }}</p>
                  </div>  
                </div>

                <div class="items">
                  <div>
                    <h2><u>Bolts:</u></h2>
                    <p>{{ sameIDs[i][3][4] }}</p>
                  </div>
                  <div>
                    <h2><u>Prijs:</u></h2>
                    <p>€ {{ sameIDs[i][4][4] }}</p>
                  </div>  
                </div>
                <div class="items">
                  <div>
                    <h2><u>Griptape:</u></h2>
                    <p>{{ sameIDs[i][3][5] }}</p>
                  </div>
                  <div>
                    <h2><u>Prijs:</u></h2>
                    <p>€ {{ sameIDs[i][4][5] }}</p>
                  </div>  
                </div>
                <br />
              </div>
            </div>
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
      display_div: false,
      showOrder: [],
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
              this.showOrder.push(false);
              console.log(this.showOrder);
            }
          }

          for (var j = 0; j < this.sameIDs.length; j++) {
            // console.log(this.sameIDs[j][1]);
            console.log(this.dateAndPrices);
            // console.log(this.sameIDs[j].id);
            this.dates.push(
              moment.unix(this.sameIDs[j][1]).format("MM/DD/YYYY")
            );
            this.totalPrices.push(this.sameIDs[j][2]);
          }
        })
        .catch((error) => console.log(error));
    },

    toggleDiv(i) {
      this.showOrder.splice(i, 1, true);
    },

    // closeOrder(i) {
    //   console.log(i);
    //   this.showOrder.splice(i, 1, false);
    //   console.log(this.showOrder);
    // },
  },
};
</script>

<style scoped>
.card {
  margin: 2em 0 1.3em 0;
  padding: 0;
}

.titleOrders,
th {
  color: black;
}

.dateandprice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.titledateandprice {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 1rem 0.5rem 0;
}

.items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 1rem 0.3rem 0;
}

.dateandprice {
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
}

.columns {
  height: 93.5vh;
}
</style>
