import Home from './components/Home.vue';
import Catalogue from './components/Catalogue.vue';
import OrderForm from './components/OrderForm.vue';
import PersonalInformation from './components/PersonalInformation.vue';
import FilledInPersonalInfo from './components/FilledInPersonalInfo.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/catalogue', component: Catalogue },
  { path: '/orderform', component: OrderForm },
  { path: '/personalinformation', component: PersonalInformation },
  { path: '/filledinpersonalinfo', component: FilledInPersonalInfo }
]