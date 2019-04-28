const state = {
  Collapsible: false,
  activeName: ''
}

const mutations = {
  change (state) {
    state.Collapsible = !state.Collapsible
  },
  changeactiveName (state, name) {
    state.activeName = name
  }
}

const actions = {
  changeCollapsible (context) {
    context.commit('change')
  },
  changeactiveName (context, name) {
    context.commit('changeactiveName', name)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
