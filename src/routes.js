import Home from './components/Home.vue';
import Catalogue from './components/Catalogue.vue';
import OrderForm from './components/OrderForm.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/catalogue', component: Catalogue },
  { path: '/orderform', component: OrderForm }
]