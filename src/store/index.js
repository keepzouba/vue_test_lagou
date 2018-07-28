import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state:{
    city:'全国',
    spageNo:1,
    spageSize:15,
    searchResult:[]
  },
  mutations:{
    changeCity:function (state,val) {
      state.city=val
    },
    searchResult:function (state,val) {
      state.searchResult=state.searchResult.concat(val)
    },
    searchMore:function (state,val) {
      state.spageNo++;
    },
  },
  actions:{

    }
})
