import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiData:[],
    geometry:[],
},
mutations: {
    SET_DATA(state, apiData){
        state.apiData = apiData;
    },
    SET_GEOMETRY(state, geometry){
        state.geometry = geometry;
    }
},
actions: {
    async loadAPIData({commit}){
        let response = await Api().get();
        let apiData = response.data.features.map(v=>v.attributes);
        let geometry = response.data.features.map(v=>v.geometry);
        commit('SET_DATA', apiData);
        commit('SET_GEOMETRY', geometry);
    }
},
modules: {
}
})
