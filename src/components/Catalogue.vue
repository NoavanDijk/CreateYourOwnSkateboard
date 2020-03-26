<template>
  <div class="about">
    <div class="columns">
      <div class="column is-one-quarter">
        <app-index-parts></app-index-parts>
      </div>
      <div class="column">
        <app-deck-card v-show="showDecks"></app-deck-card>
        <app-trucks-card v-show="showTrucks"></app-trucks-card>
        <app-wheels-card v-show="false"></app-wheels-card>
        <app-bearings-card v-show="false"></app-bearings-card>
        <app-bolts-card v-show="false"></app-bolts-card>
        <app-griptape-card v-show="false"></app-griptape-card>
      </div>
    </div>
  </div>
</template>

<script>
import IndexParts from '@/components/IndexParts.vue';
import DeckCard from '@/components/DeckCard.vue';
import TrucksCard from '@/components/TrucksCard.vue';
import WheelsCard from '@/components/WheelsCard.vue';
import BearingsCard from '@/components/BearingsCard.vue';
import BoltsCard from '@/components/BoltsCard.vue';
import GriptapeCard from '@/components/GriptapeCard.vue';

export default {
  components: {
    appIndexParts: IndexParts,
    appDeckCard: DeckCard,
    appTrucksCard: TrucksCard,
    appWheelsCard: WheelsCard,
    appBearingsCard: BearingsCard,
    appBoltsCard: BoltsCard,
    appGriptapeCard: GriptapeCard
  },

  computed:{
    showDecks(){
      return this.$store.state.showDecks;
    },

    showTrucks(){
      return this.$store.state.showTrucks;
    }
  }
}
</script>
