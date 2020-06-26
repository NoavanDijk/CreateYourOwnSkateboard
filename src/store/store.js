import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: false,
  state: {
    showDecks: true,
    showTrucks: false,
    showWheels: false,
    showBearings: false,
    showBolts: false,
    showGriptape: false,
    showOrderform: false,

    disableDeck: false,
    disableTrucks: true,
    disableWheels: true,
    disableBearings: true,
    disableBolts: true,
    disableGriptape: true,

    showCheckDeck: true,
    showCheckTrucks: true,
    showCheckWheels: true,
    showCheckBearings: true,
    showCheckBolts: true,
    showCheckGriptape: true,

    gripTapeClicked: false,
    goToPersonalInformation: false,
    goToFilledInPersonalInfo: false,
    goToThanksForOrder: false,

    decksName: "",
    trucksName: "",
    bearingsName: "",
    boltsName: "",
    griptapeName: "",
    wheelsName: "",

    decksImage: "",
    trucksImage: "",
    bearingsImage: "",
    boltsImage: "",
    griptapeImage: "",
    wheelsImage: "",

    decksPrice: 0,
    trucksPrice: 0,
    bearingsPrice: 0,
    boltsPrice: 0,
    griptapePrice: 0,
    wheelsPrice: 0,

    totalPrice: 0,

    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    gripTapeClicked: state => {
      return state.gripTapeClicked;
    },

    goToPersonalInformation: state => {
      return state.goToPersonalInformation;
    },

    goToFilledInPersonalInfo: state => {
      return state.goToFilledInPersonalInfo;
    },

    goToThanksForOrder: state => {
      return state.goToThanksForOrder;
    },

    disableDeck: state => {
      return state.disableDeck;
    },

    disableTrucks: state => {
      return state.disableTrucks;
    },

    disableWheels: state => {
      return state.disableWheels;
    },

    disableBearings: state => {
      return state.disableBearings;
    },

    disableBolts: state => {
      return state.disableBolts;
    },

    disableGriptape: state => {
      return state.disableGriptape;
    },

    showCheckDeck: state => {
      return state.showCheckDeck;
    },

    showCheckTrucks: state => {
      return state.showCheckTrucks;
    },

    showCheckWheels: state => {
      return state.showCheckWheels;
    },

    showCheckBearings: state => {
      return state.showCheckBearings;
    },

    showCheckBolts: state => {
      return state.showCheckBolts;
    },

    showCheckGriptape: state => {
      return state.showCheckGriptape;
    },

    user(state){
      return state.user;
    },

    getDecksName: state => {
      return state.decksName;
    },

    getTrucksName: state => {
      return state.trucksName;
    },

    getBearingsName: state => {
      return state.bearingsName;
    },

    getBoltsName: state => {
      return state.boltsName;
    },
    
    getGriptapeName: state => {
      return state.griptapeName;
    },

    getWheelsName: state => {
      return state.wheelsName;
    },

    getDecksImage: state => {
      return state.decksImage;
    },

    getTrucksImage: state => {
      return state.trucksImage;
    },

    getBearingsImage: state => {
      return state.bearingsImage;
    },

    getBoltsImage: state => {
      return state.boltsImage;
    },
    
    getGriptapeImage: state => {
      return state.griptapeImage;
    },

    getWheelsImage: state => {
      return state.wheelsImage;
    },

    getDecksPrice: state => {
      return state.decksPrice;
    },

    getTrucksPrice: state => {
      return state.trucksPrice;
    },

    getBearingsPrice: state => {
      return state.bearingsPrice;
    },

    getBoltsPrice: state => {
      return state.boltsPrice;
    },
    
    getGriptapePrice: state => {
      return state.griptapePrice;
    },

    getWheelsPrice: state => {
      return state.wheelsPrice;
    },

    getTotalPrice: state => {
      return state.totalPrice;
    }
  },

  mutations: {
    gripTapeClicked: (state, payload) => {
      state.gripTapeClicked = payload;
    },

    goToPersonalInformation: (state, payload) => {
      state.goToPersonalInformation = payload;
    },

    goToFilledInPersonalInfo: (state, payload) => {
      state.goToFilledInPersonalInfo = payload;
    },

    goToThanksForOrder: (state, payload) => {
      state.goToThanksForOrder = payload;
    },

    disableTrucks: (state, payload) => {
      state.disableTrucks = payload;
    },

    disableWheels: (state, payload) => {
      state.disableWheels = payload;
    },

    disableDeck: (state, payload) => {
      state.disableDeck = payload;
    },

    disableBearings: (state, payload) => {
      state.disableBearings = payload;
    },

    disableBolts: (state, payload) => {
      state.disableBolts = payload;
    },

    disableGriptape: (state, payload) => {
      state.disableGriptape = payload;
    },

    showCheckDeck: (state, payload) => {
      state.showCheckDeck = payload;
    },

    showCheckTrucks: (state, payload) => {
      state.showCheckTrucks = payload;
    },

    showCheckWheels: (state, payload) => {
      state.showCheckWheels = payload;
    },

    showCheckBearings: (state, payload) => {
      state.showCheckBearings = payload;
    },

    showCheckBolts: (state, payload) => {
      state.showCheckBolts = payload;
    },

    showCheckGriptape: (state, payload) => {
      state.showCheckGriptape = payload;
    },

    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },

    SET_USER(state, data) {
      state.user.data = data;
    },

    setDecksName: (state, payload) => {
      state.setDecksName = payload;
    },

    setTrucksName: (state, payload) => {
      state.setTrucksName = payload;
    },

    setBearingsName: (state, payload) => {
      state.setBearingsName = payload;
    },

    setBoltsName: (state, payload) => {
      state.setBoltsName = payload;
    },

    setGriptapeName: (state, payload) => {
      state.setGriptapeName = payload;
    },

    setWheelsName: (state, payload) => {
      state.setWheelsName = payload;
    },

    setDecksImage: (state, payload) => {
      state.setDecksImage = payload;
    },

    setTrucksImage: (state, payload) => {
      state.setTrucksImage = payload;
    },

    setBearingsImage: (state, payload) => {
      state.setBearingsImage = payload;
    },

    setBoltsImage: (state, payload) => {
      state.setBoltsImage = payload;
    },

    setGriptapeImage: (state, payload) => {
      state.setGriptapeImage = payload;
    },

    setWheelsImage: (state, payload) => {
      state.setWheelsImage = payload;
    },

    setDecksPrice: (state, payload) => {
      state.setDecksPrice = payload;
    },

    setTrucksPrice: (state, payload) => {
      state.setTrucksPrice = payload;
    },

    setBearingsPrice: (state, payload) => {
      state.setBearingsPrice = payload;
    },

    setBoltsPrice: (state, payload) => {
      state.setBoltsPrice = payload;
    },

    setGriptapePrice: (state, payload) => {
      state.setGriptapePrice = payload;
    },

    setWheelsPrice: (state, payload) => {
      state.setWheelsPrice = payload;
    },

    setTotalPrice: (state, payload) => {
      state.setTotalPrice = payload;
    }
  },

  actions: {
    updateGripTapeClicked({ commit }, payload) {
      commit("updateGripTapeClicked", payload);
    },

    updateGoToPersonalInformation({ commit }, payload) {
      commit("updateGoToPersonalInformation", payload);
    },

    updateGoToFilledInPersonalInfo({ commit }, payload) {
      commit("updateGoToFilledInPersonalInfo", payload);
    },

    updateGoToThanksForOrder({ commit }, payload) {
      commit("updateGoToThanksForOrder", payload);
    },

    updateDisableTrucks({ commit }, payload) {
      commit("updateDisableTrucks", payload);
    },

    updateDisableWheels({ commit }, payload) {
      commit("updateDisableWheels", payload);
    },

    updateDisableDeck({ commit }, payload) {
      commit("updateDisableDeck", payload);
    },

    updateDisableBearings({ commit }, payload) {
      commit("updateDisableBearings", payload);
    },

    updateDisableBolts({ commit }, payload) {
      commit("updateDisableBolts", payload);
    },

    updateDisableGriptape({ commit }, payload) {
      commit("updateDisableGriptape", payload);
    },

    updateShowCheckDeck({ commit }, payload) {
      commit("updateShowCheckDeck", payload);
    },

    updateShowCheckTrucks({ commit }, payload) {
      commit("updateShowCheckTrucks", payload);
    },

    updateShowCheckWheels({ commit }, payload) {
      commit("updateShowCheckWheels", payload);
    },

    updateShowCheckBearings({ commit }, payload) {
      commit("updateShowCheckBearings", payload);
    },

    updateShowCheckBolts({ commit }, payload) {
      commit("updateShowCheckBolts", payload);
    },

    updateShowCheckGriptape({ commit }, payload) {
      commit("updateShowCheckGriptape", payload);
    },

    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },

    updateDecksName({ commit }, payload) {
      commit("updateDecksName", payload);
    },

    updateTrucksName({ commit }, payload) {
      commit("updateTrucksName", payload);
    },

    updateBearingsName({ commit }, payload) {
      commit("updateBearingsName", payload);
    },

    updateBoltsName({ commit }, payload) {
      commit("updateBoltsName", payload);
    },

    updateGriptapeName({ commit }, payload) {
      commit("updateGriptapeName", payload);
    },

    updateWheelsName({ commit }, payload) {
      commit("updateWheelsName", payload);
    },

    updateDecksImage({ commit }, payload) {
      commit("updateDecksImage", payload);
    },

    updateTrucksImage({ commit }, payload) {
      commit("updateTrucksImage", payload);
    },

    updateBearingsImage({ commit }, payload) {
      commit("updateBearingsImage", payload);
    },

    updateBoltsImage({ commit }, payload) {
      commit("updateBoltsImage", payload);
    },

    updateGriptapeImage({ commit }, payload) {
      commit("updateGriptapeImage", payload);
    },

    updateWheelsImage({ commit }, payload) {
      commit("updateWheelsImage", payload);
    },

    updateDecksPrice({ commit }, payload) {
      commit("updateDecksPrice", payload);
    },

    updateTrucksPrice({ commit }, payload) {
      commit("updateTrucksPrice", payload);
    },

    updateBearingsPrice({ commit }, payload) {
      commit("updateBearingsPrice", payload);
    },

    updateBoltsPrice({ commit }, payload) {
      commit("updateBoltsPrice", payload);
    },

    updateGriptapePrice({ commit }, payload) {
      commit("updateGriptapePrice", payload);
    },

    updateWheelsPrice({ commit }, payload) {
      commit("updateWheelsPrice", payload);
    },

    updateTotalPrice({ commit }, payload) {
      commit("updateTotalPrice", payload);
    }
  }
});
