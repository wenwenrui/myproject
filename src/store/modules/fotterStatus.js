const state = {
  showFotter: true,
  changableNum: 0
}
const getters = {
  isShow (state) {
    return state.showFotter
  },
  getChangeNum (state) {
    return state.changableNum
  }
}
const mutations = {
  show (state) {
    state.showFotter = true
  },
  hide (state) {
    state.showFotter = false
  },
  newNum (state, num) {
    state.changableNum += num
  }
}
const actions = {
  hideFotter (context) {
    context.commit('hide')
  },
  showFotter (context) {
    context.commit('show')
  },
  getNewNum (context, num) {
    context.commit('newNum', num)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
