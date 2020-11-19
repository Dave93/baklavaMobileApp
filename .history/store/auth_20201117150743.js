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
    const users = await this.$axios.get('')
  },
}

export const getters = {
  user: (s) => s.users,
}
