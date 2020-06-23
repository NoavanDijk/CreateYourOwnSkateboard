import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { store }  from './store/store';
import { routes } from './routes';
import VueCarousel from 'vue-carousel';
import Vuelidate from 'vuelidate';
import * as firebase from "firebase";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.use(Vuelidate);

const router = new VueRouter({
  routes
});

const configOptions = {
  apiKey: "AIzaSyC69NTCW8U4rL-WCe0LRuAEpIYR9XjAgGc",
  authDomain: "createyourownskateboard.firebaseapp.com",
  databaseURL: "https://createyourownskateboard.firebaseio.com",
  projectId: "createyourownskateboard",
  storageBucket: "createyourownskateboard.appspot.com",
  messagingSenderId: "388189150298",
  appId: "1:388189150298:web:38309d47b6b3bd7a63cc63"
};

const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

const usersCollection = db.collection('users')

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

require("./assets/style.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
