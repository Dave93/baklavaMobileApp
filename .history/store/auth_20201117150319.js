export const state = () => ({})
export const mutations = {}
export const getters = {}
export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.get()
  },
}
