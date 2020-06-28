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

    <!-- Laat de bestellingen van de ingelogde gebruiker zien -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import axios from "axios";

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
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },

  created() {
    // get alle items van de database op
    // currentUser is
    // for(alle items in de database id's){
    //   if (currentUser == opgeslagen id) {
    // }
    // }
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
            // console.log(choices);
          }

          this.finalChoices = choices;
          // console.log(this.finalChoices);

          
          for(var i = 0; i < this.finalChoices.length; i++) {
            if(this.finalChoices[i][0] == firebase.auth().currentUser.uid) {
              this.sameIDs.push(this.finalChoices[i]);
              console.log(this.sameIDs);
              // console.log("komt overeen");
            }
          }

          for(var j = 0; j < this.sameIDs.length; j++) {
            this.dates.push(this.sameIDs[j][1]);
            this.totalPrices.push(this.sameIDs[j][2]);

            // Laat de prijs en de datum zien
          }

          var userIDs = [];
          // for (var i = 0; i < this.finalChoices.length; i++) {
          //   userIDs.push(this.finalChoices[i][0]);
            
          //   this.allUsersIDs = userIDs;
          //   console.log(this.allUsersIDs);

          //   for (let j = 0; j < this.allUsersIDs.length; j++) {
          //     // console.log(this.allUsersIDs[i]);
          //     // console.log(firebase.auth().currentUser.uid);
          //     if (this.allUsersIDs[i] == firebase.auth().currentUser.uid) {
                
          //       this.currentUserIDs = this.allUsersIDs[i];
          //       // console.log(this.currentUserIDs);
          //     }
          //   }
          // }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>
