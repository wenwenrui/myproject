import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

const modulesfile = require.context('../store/modules', false, /\.js$/)

const modules = modulesfile.keys().reduce((modules, modulepath) => {
  let key = modulepath.replace(/^\.\/(.+)\.js$/, '$1')
  modules = Object.assign(modules, {[key]: modulesfile(modulepath).default})
  return modules
}, {})

export default new Vuex.Store({
  modules,
  getters
})
