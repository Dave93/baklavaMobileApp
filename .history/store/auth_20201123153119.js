export const state = () => ({
  userData: {},
})
export const mutations = {
  setUserData(state, userData) {
    state.userData = userData
  },
  clearUserData(state, userData) {
    state.userData = userData
  },
}
export const actions = {
  setUserData({ commit }, { userData }) {
    commit('setUserData', userData)
  },
  clearUserData({ commit }) {
    commit('clearUserData', {})
  },
}

export const getters = {
  userData: (s) => s.userData,
}
