<template>
  <div class="indexparts">
    <div class="card" v-for="(part, index) in parts" v-bind:key="index">
      <button class="buttonindexpart" @click="changeShowDecks(index)">
        <div class="card-content">
        <div class="content">
          <p class="partname">{{ part.name }}</p>
          <i class="fas fa-chevron-circle-right fa-lg"></i>
        </div>
      </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      parts: [
        { name: "Deck" },
        { name: "Trucks" },
        { name: "Wielen" },
        { name: "Bearings" },
        { name: "Bolts" },
        { name: "Griptape" },
      ]
    }
  },

  methods: {
    changeShowDecks(index) {
      if(index == 0){
        this.$store.state.showDecks = true;
        this.$store.state.showTrucks = false;
        this.$store.state.showWheels = false;
        this.$store.state.showBearings = false;
      }
      if(index == 1){
        this.$store.state.showDecks = false;
        this.$store.state.showTrucks = true;
        this.$store.state.showWheels = false;
        this.$store.state.showBearings = false;
        this.$store.state.showBolts = false;
        this.$store.state.showGriptape = false;
      }
      if(index == 2){
        this.$store.state.showDecks = false;
        this.$store.state.showTrucks = false;
        this.$store.state.showWheels = true;
        this.$store.state.showBearings = false;
        this.$store.state.showBolts = false;
        this.$store.state.showGriptape = false;
      }
      if(index == 3){
        this.$store.state.showDecks = false;
        this.$store.state.showTrucks = false;
        this.$store.state.showWheels = false;
        this.$store.state.showBearings = true;
        this.$store.state.showBolts = false;
        this.$store.state.showGriptape = false;
      }
      if(index == 4){
        this.$store.state.showDecks = false;
        this.$store.state.showTrucks = false;
        this.$store.state.showWheels = false;
        this.$store.state.showBearings = false;
        this.$store.state.showBolts = true;
        this.$store.state.showGriptape = false;
      }
      if(index == 5){
        this.$store.state.showDecks = false;
        this.$store.state.showTrucks = false;
        this.$store.state.showWheels = false;
        this.$store.state.showBearings = false;
        this.$store.state.showBolts = false;
        this.$store.state.showGriptape = true;
      }
    }
  },
}
</script>

<style scoped>
  .indexparts
  {
    padding: 0.4em;
  }

  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 0.5em;
  }

  .buttonindexpart{
    width: 100%;
    border: 0;
    background-color: white;
    cursor: pointer;
  }

  .card{
    margin: 0.9em 0em 0 0.9em;
  }

  .content p:not(:last-child), .content dl:not(:last-child), .content ol:not(:last-child), .content ul:not(:last-child), .content blockquote:not(:last-child), .content pre:not(:last-child), .content table:not(:last-child){
    margin-bottom: 0;
  }
</style>