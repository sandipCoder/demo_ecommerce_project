import Vue from "vue";
import Vuex from "vuex";
import shopModule from './modules/shopModule.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    shopModule
  },
});
