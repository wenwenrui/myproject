import Vue from 'vue'
import Vuex from 'vuex'
import footerStatus from './modules/fotterStatus'
import collection from './modules/collection'
import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footerStatus,
    collection,
    index
  }
})
