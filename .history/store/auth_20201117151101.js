export const state = () => ({
  users: [],
})
export const mutations = {
  getUsers(state, users) {
    state.users = users
  },
}
export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.get(
      'https://gavali.fungeek.net/rest/1/l6yxn7688v0l6ewl/myuser.manager.auth'
    )
    commit('getUsers', users)
  },
}

export const getters = {
  users: (s) => s.users,
}
