import Home from "./components/Home.vue";
import Catalogue from "./components/Catalogue.vue";
import OrderForm from "./components/OrderForm.vue";
import PersonalInformation from "./components/PersonalInformation.vue";
import FilledInPersonalInfo from "./components/FilledInPersonalInfo.vue";
import ThanksForOrder from "./components/ThanksForOrder.vue";

import Login from "./auth/Login.vue";
import LoginNav from "./auth/LoginNavbar.vue";
import Register from "./auth/Register.vue";

import { store } from "./store/store";

export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/catalogue", name: "catalogue", component: Catalogue },
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
    },
  },
  {
    path: "/personalinformation",
    component: PersonalInformation,
    props: true,
    name: "personalinformation",
    // beforeEnter: (to, from, next) => {
    //   if (store.getters.goToPersonalInformation == true) {
    //     next();
    //   } else {
    //     next({ name: "Home" });
    //   }
    // },
  },
  {
    path: "/filledinpersonalinfo",
    component: FilledInPersonalInfo,
    props: true,
    name: "filledinpersonalinfo",
    beforeEnter: (to, from, next) => {
      if (store.getters.goToFilledInPersonalInfo == true) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
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
    },
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/loginnav",
    name: "loginnav",
    component: LoginNav,
  },
];
