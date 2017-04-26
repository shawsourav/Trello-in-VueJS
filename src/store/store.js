import Vue from 'vue'
import Vuex from 'vuex'
import lists from './modules/lists'
import cards from './modules/cards'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showmodal: false
  },
  getters,
  mutations,
  actions,
  modules: {
    lists,
    cards
  }
})
