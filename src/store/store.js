import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showDecks: true,
    showTrucks: false,
    showWheels: false,
    showBearings: false,
    showBolts: false,
    showGriptape: false,
    showOrderform: false
  }
});