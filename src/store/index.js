import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 1,
        name: "phong" // "id=1&name=phong"
      },
      {
        id: 2,
        name: "vu"
      }
    ]
  },
  getters: {
    getListString: (state) => {
      const strList = []

      for (let i =0;i < state.list.length; i++) {
        const stateItem = state.list[i]

        const item = `id=${stateItem.id}&name=${stateItem.name}`
        // const item = `id=` + stateItem.id + '&name=' + stateItem.name
        strList.push(item)
      }

      return strList
      // [ "id=1&name=phong", "id=2&name=vu"]
    }
  },

  mutations: {
    add_item: (state, item) => {
      state.list.push(item)
    }
  },

  actions: {
    addItem: ({commit}, item) => {
      commit("add_item", item)
    }
  },
  modules: {
  }
})
