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
          zipcode: user.zipcode,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
});
