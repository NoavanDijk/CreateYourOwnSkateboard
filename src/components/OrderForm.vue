<template>
  <div>
    <p v-for="(result, index) in results" v-bind:key="index"></p>
    <p>Hallo dit is het orderform</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return {
      results: []
    }
  },
  
  methods: {
    createdMethod() {
      axios
        .get("https://createyourownskateboard.firebaseio.com/decks.json")
        .then(response => {
          this.results = response.data;
          const id = response.data.id;
          console.log(id);
          console.log(this.results);
        })
        .catch(error => console.log(error));
    }
  },

  created(){
    this.createdMethod();
  }
};
</script>
