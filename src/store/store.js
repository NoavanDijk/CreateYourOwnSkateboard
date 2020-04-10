import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    showDecks: true,
    showTrucks: false,
    showWheels: false,
    showBearings: false,
    showBolts: false,
    showGriptape: false,
    showOrderform: false,

    firstname: "",
    insertion: "",
    lastname: "",
    zipcode: "",
    housenumber: 0,
    addition: "",
    email: "",
    phonenumber: "",
    bank: "",
    accountnumber: 0,
    pasnumber: 0
  },

  getters: {
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

    phonenumber: state => {
      return state.phonenumber;
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
  },

  mutations: {
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

    updatePhonenumber: (state, payload) => {
      state.phonenumber = payload;
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

  },

  actions: {
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

    updatePhonenumber({ commit }, payload) {
      commit("updatePhonenumber", payload);
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
  }
});
