import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store'
import { routes } from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

require("./assets/style.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
