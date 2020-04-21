import Home from "./components/Home.vue";
import Catalogue from "./components/Catalogue.vue";
import OrderForm from "./components/OrderForm.vue";
import PersonalInformation from "./components/PersonalInformation.vue";
import FilledInPersonalInfo from "./components/FilledInPersonalInfo.vue";
import ThanksForOrder from "./components/ThanksForOrder.vue";

import { store }  from './store/store';

export const routes = [
  { path: "/", name:"Home", component: Home },
  { path: "/catalogue", component: Catalogue },
  {
    path: "/orderform",
    component: OrderForm,
    name: "OrderForm",
    beforeEnter: (to, from, next) => {
      if (store.getters.gripTapeClicked == true) {
        next();
      } else {
        next({ name: "Home" });
      }
    }
  },
  {
    path: "/personalinformation",
    component: PersonalInformation,
    beforeEnter: (to, from, next) => {
      if (store.getters.goToPersonalInformation == true) {
        next();
      } else {
        next({ name: "Home" });
      }
    }
  },
  {
    path: "/filledinpersonalinfo",
    component: FilledInPersonalInfo,
    beforeEnter: (to, from, next) => {
      if (store.getters.goToFilledInPersonalInfo == true) {
        next();
      } else {
        next({ name: "Home" });
      }
    }
  },
  {
    path: "/thanksfororder",
    component: ThanksForOrder,
    beforeEnter: (to, from, next) => {
      if (store.getters.goToThanksForOrder == true) {
        next();
      } else {
        next({ name: "Home" });
      }
    }
  }
];
