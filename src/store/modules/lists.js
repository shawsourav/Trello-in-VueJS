const state = {
  lists: [
    {
      id: 1,
      listname: 'Main Website'
    },
    {
      id: 2,
      listname: 'Front End Tools'
    },
    {
      id: 3,
      listname: 'Android App'
    },
    {
      id: 4,
      listname: 'Back End tasks'
    },
    {
      id: 5,
      listname: 'Pending'
    }
  ]
}

const getters = {
  getlist: state => {
    return state.lists
  }
}
const mutations = {
  editlist: (state, payload) => {
    for (var i = 0; i < state.lists.length; i++) {
      if (state.lists[i].id === payload.id) {
        state.lists[i].listname = payload.name
      }
    }
  },
  deletelist: (state, payload) => {
    for (var i = 0; i < state.lists.length; i++) {
      if (state.lists[i].id === payload) {
        state.lists.splice(i, 1)
      }
    }
  },
  addlist: (state, payload) => {
    let list = {
      id: Date.now(),
      listname: ''
    }
    list.listname = payload.target.value
    state.lists.push(list)
  }
}

const actions = {
  editlist: ({ commit }, payload) => {
    commit('editlist', payload)
  },
  deletelist: ({ commit }, payload) => {
    commit('deletelist', payload)
  },
  addlist: ({ commit }, payload) => {
    commit('addlist', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
