import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

firebase.initializeApp({
  apiKey: "AIzaSyAp_VWKey_wua7REQ6UZUQ0iwTLHNhnF2s",
  authDomain: "vue-calendar-82172.firebaseapp.com",
  projectId: "vue-calendar-82172",
  storageBucket: "vue-calendar-82172.appspot.com",
  messagingSenderId: "598358760834",
  appId: "1:598358760834:web:1e3176a1cbe1cbb110439b",
});

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
