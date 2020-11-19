export const state = () => ({
  userData: {},
  authenticated: false,
})
export const mutations = {
  setUserData(state, userData) {
    state.userData = userData
  },
}
export const actions = {
  setUserData({ commit }, { userData }) {
    commit('setUserData', userData)
  },
}

export const getters = {
  userData: (s) => s.userData,
}
