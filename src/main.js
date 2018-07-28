// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Axios from "axios";
import VueAxios from "vue-axios";
import Mint from 'mint-ui';
import '../node_modules/vue2-animate/dist/vue2-animate.css';

Vue.use(VueAxios,Axios);
Vue.use(Mint);
Vue.use(VueAxios,Axios);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
