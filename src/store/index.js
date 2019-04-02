import Vue from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/fotterStatus'
import collection from './modules/collection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footerStatus,
    collection
  }
})