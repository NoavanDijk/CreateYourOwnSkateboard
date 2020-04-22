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

    gender: "",
    firstname: "",
    insertion: "",
    lastname: "",
    zipcode: "",
    housenumber: 0,
    addition: "",
    email: "",
    bank: "",
    accountnumber: "",
    pasnumber: 0,

    gripTapeClicked: false,
    goToPersonalInformation: false,
    goToFilledInPersonalInfo: false,
    goToThanksForOrder: false,
  },

  getters: {
    gender: state => {
      return state.gender;
    },

    firstname: state => {
      return state.firstname;
    },

    insertion: state => {
      return state.insertion;
    },

    lastname: state => {
      return state.lastname;
    },

    zipcode: state => {
      return state.zipcode;
    },

    housenumber: state => {
      return state.housenumber;
    },

    addition: state => {
      return state.addition;
    },

    email: state => {
      return state.email;
    },

    bank: state => {
      return state.bank;
    },

    accountnumber: state => {
      return state.accountnumber;
    },

    pasnumber: state => {
      return state.pasnumber;
    },

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
    }
  },

  mutations: {
    updateGender: (state, payload) => {
      state.gender = payload;
    },

    updateFirstname: (state, payload) => {
      state.firstname = payload;
    },
    
    updateInsertion: (state, payload) => {
      state.insertion = payload;
    },

    updateLastname: (state, payload) => {
      state.lastname = payload;
    },

    updateZipcode: (state, payload) => {
      state.zipcode = payload;
    },

    updateHousenumber: (state, payload) => {
      state.housenumber = payload;
    },

    updateAddition: (state, payload) => {
      state.addition = payload;
    },

    updateEmail: (state, payload) => {
      state.email = payload;
    },

    updateBank: (state, payload) => {
      state.bank = payload;
    },

    updateAccountnumber: (state, payload) => {
      state.accountnumber = payload;
    },

    updatePasnumber: (state, payload) => {
      state.pasnumber = payload;
    },

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
    }
  },

  actions: {
    updateGender({ commit }, payload) {
      commit("updateGender", payload);
    },

    updateFirstname({ commit }, payload) {
      commit("updateFirstname", payload);
    },

    updateInsertion({ commit }, payload) {
      commit("updateInsertion", payload);
    },

    updateLastname({ commit }, payload) {
      commit("updateLastname", payload);
    },

    updateZipcode({ commit }, payload) {
      commit("updateZipcode", payload);
    },

    updateHousenumber({ commit }, payload) {
      commit("updateHousenumber", payload);
    },

    updateAddition({ commit }, payload) {
      commit("updateAddition", payload);
    },

    updateEmail({ commit }, payload) {
      commit("updateEmail", payload);
    },

    updateBank({ commit }, payload) {
      commit("updateBank", payload);
    },

    updateAccountnumber({ commit }, payload) {
      commit("updateAccountnumber", payload);
    },

    updatePasnumber({ commit }, payload) {
      commit("updatePasnumber", payload);
    },

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
    }
  }
});
