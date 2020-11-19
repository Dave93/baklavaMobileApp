export const state = () => ({
  users: [],
  userData: {},
})
export const mutations = {
  getUsers(state, users) {
    state.users = users
  },
  setUserData(state, userData) {
    state.userData = userData
  },
}
export const actions = {
  async fetchUsers({ commit }) {
    const users = await this.$axios.post(
      'https://gavali.fungeek.net/rest/1/l6yxn7688v0l6ewl/myuser.manager.auth'
    )
    commit('getUsers', users)
  },
  setUserData({ commit }, { userData }) {
    commit('setUserData', userData)
  },
}

export const getters = {
  users: (s) => s.users,
}
