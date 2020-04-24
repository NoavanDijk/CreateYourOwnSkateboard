import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { store }  from './store/store';
import { routes } from './routes';
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueCarousel);

const router = new VueRouter({
  routes
});

require("./assets/style.scss");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
