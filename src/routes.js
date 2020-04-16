import Home from "./components/Home.vue";
import Catalogue from "./components/Catalogue.vue";
import OrderForm from "./components/OrderForm.vue";
import PersonalInformation from "./components/PersonalInformation.vue";
import FilledInPersonalInfo from "./components/FilledInPersonalInfo.vue";
import ThanksForOrder from "./components/ThanksForOrder.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/catalogue", component: Catalogue },
  {
    path: "/orderform",
    component: OrderForm,
    // beforeEnter: (to, from, next) => {
    //   if (window.currentUser == "THEVALLEY\\noa.van.dijk") {
    //     next();
    //   } else {
    //     // If params.name is blank or in your case, does not have permission, redirect back to the home page
    //     next({ name: "Home" });
    //   }
    // }
  },
  {
    path: "/personalinformation",
    component: PersonalInformation,
    // beforeEnter: (to, from, next) => {
    //   if (window.currentUser == "THEVALLEY\\noa.van.dijk") {
    //     next();
    //   } else {
    //     // If params.name is blank or in your case, does not have permission, redirect back to the home page
    //     next({ name: "Home" });
    //   }
    // }
  },
  {
    path: "/filledinpersonalinfo",
    component: FilledInPersonalInfo,
    // beforeEnter: (to, from, next) => {
    //   if (window.currentUser == "THEVALLEY\\noa.van.dijk") {
    //     next();
    //   } else {
    //     // If params.name is blank or in your case, does not have permission, redirect back to the home page
    //     next({ name: "Home" });
    //   }
    // }
  },
  {
    path: "/thanksfororder",
    component: ThanksForOrder,
    // beforeEnter: (to, from, next) => {
    //   if (window.currentUser == "THEVALLEY\\noa.van.dijk") {
    //     next();
    //   } else {
    //     // If params.name is blank or in your case, does not have permission, redirect back to the home page
    //     next({ name: "Home" });
    //   }
    // }
  }
];
