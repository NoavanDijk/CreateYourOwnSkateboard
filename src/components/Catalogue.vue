<template>
  <div class="about">
    <div class="columns">
      <div class="column is-one-quarter">
        <app-index-parts></app-index-parts>
      </div>
      <div class="column">
        <app-deck-card v-if="showDecks"></app-deck-card>
        <app-trucks-card v-if="showTrucks"></app-trucks-card>
        <app-wheels-card v-if="showWheels"></app-wheels-card>
        <app-bearings-card v-if="showBearings"></app-bearings-card>
        <app-bolts-card v-if="showBolts"></app-bolts-card>
        <app-griptape-card v-if="showGriptape"></app-griptape-card>
        <app-order-form v-if="showOrderform"></app-order-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import IndexParts from "@/components/IndexParts.vue";
import DeckCard from "@/components/DeckCard.vue";
import TrucksCard from "@/components/TrucksCard.vue";
import WheelsCard from "@/components/WheelsCard.vue";
import BearingsCard from "@/components/BearingsCard.vue";
import BoltsCard from "@/components/BoltsCard.vue";
import GriptapeCard from "@/components/GriptapeCard.vue";
import OrderForm from "@/components/OrderForm.vue";

export default {
  components: {
    appIndexParts: IndexParts,
    appDeckCard: DeckCard,
    appTrucksCard: TrucksCard,
    appWheelsCard: WheelsCard,
    appBearingsCard: BearingsCard,
    appBoltsCard: BoltsCard,
    appGriptapeCard: GriptapeCard,
    appOrderForm: OrderForm,
  },

  computed: {
    showDecks() {
      return this.$store.state.showDecks;
    },

    showTrucks() {
      return this.$store.state.showTrucks;
    },

    showWheels() {
      return this.$store.state.showWheels;
    },

    showBearings() {
      return this.$store.state.showBearings;
    },

    showBolts() {
      return this.$store.state.showBolts;
    },

    showGriptape() {
      return this.$store.state.showGriptape;
    },

    showOrderform(){
      return this.$store.state.showOrderform;
    },
  },
};
</script>
