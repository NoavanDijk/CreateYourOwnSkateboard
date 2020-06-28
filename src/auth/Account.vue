<template>
  <div>
    <p>{{ user.data.displayName }}</p>
    <p>{{ user.data.email }}</p>

    <div v-for="(date, index) in dates" :key="index">
      <p>{{ date }}</p>
    </div>
    
    <div v-for="(totalPrice) in totalPrices" :key="totalPrice">
      <p>{{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import axios from "axios";
import moment from 'moment';

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
          
          for(var i = 0; i < this.finalChoices.length; i++) {
            if(this.finalChoices[i][0] == firebase.auth().currentUser.uid) {
              this.sameIDs.push(this.finalChoices[i]);
            }
          }

          for(var j = 0; j < this.sameIDs.length; j++) {
            this.dates.push(moment.unix(this.sameIDs[j][1]).format("MM/DD/YYYY"));
            this.totalPrices.push(this.sameIDs[j][2]);
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
