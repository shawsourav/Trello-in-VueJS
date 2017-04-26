import {eventBus} from '../../main'
const state = {
  cardlist: [
    {
      id: 1,
      title: 'React and Redux',
      description: 'Learn the framework',
      color: '#41b883',
      listid: 1,
      tasks: [
        {
          id: 1,
          name: 'Read React',
          done: true
        },
        {
          id: 2,
          name: 'Design music player in React',
          done: false
        },
        {
          id: 3,
          name: 'Learn Redux',
          done: false
        },
        {
          id: 4,
          name: 'Implement project in Redux',
          done: false
        }
      ]
    },
    {
      id: 2,
      title: 'Front site changes',
      description: 'Changes to be made in front site',
      color: '#41b883',
      listid: 1,
      tasks: [
        {
          id: 1,
          name: 'Integrate notice board',
          done: true
        },
        {
          id: 2,
          name: 'Create user login',
          done: false
        }
      ]
    },
    {
      id: 45,
      title: 'Courses page',
      description: 'Make changes',
      color: '#41b883',
      listid: 1,
      tasks: [
        {
          id: 1,
          name: 'Padding and margin issues',
          done: true
        }
      ]
    },
    {
      id: 3,
      title: 'Vue JS',
      description: 'Implement Vue JS',
      color: '#35495e',
      listid: 2,
      tasks: [
        {
          id: 1,
          name: 'Design the Styles',
          done: true
        },
        {
          id: 2,
          name: 'Develop the workflow',
          done: false
        },
        {
          id: 3,
          name: 'Build in VueJS + Vuex',
          done: false
        }
      ]
    },
    {
      id: 4,
      title: 'Vanilla JS',
      description: 'Use Plain Vanilla JS',
      color: '#35495e',
      listid: 2,
      tasks: [
        {
          id: 1,
          name: 'Jquery minor changes',
          done: true
        },
        {
          id: 2,
          name: 'Integrate the slider',
          done: false
        }
      ]
    },
    {
      id: 31,
      title: 'Immutable JS',
      description: 'Read Immutability',
      color: '#35495e',
      listid: 2,
      tasks: [
        {
          id: 1,
          name: 'Check if required to use',
          done: true
        }
      ]
    },
    {
      id: 5,
      title: 'Database Changes',
      description: 'Shift to postgres from MongoDB',
      color: '#41b883',
      listid: 4,
      tasks: [
        {
          id: 1,
          name: 'Discuss the implementation process',
          done: true
        },
        {
          id: 2,
          name: 'Deploy by Weekend',
          done: false
        }
      ]
    },
    {
      id: 13,
      title: 'Redis Implementation',
      description: 'Implement Redis for memory caching',
      color: '#41b883',
      listid: 4,
      tasks: [
        {
          id: 1,
          name: 'Discuss the implementation process',
          done: true
        },
        {
          id: 2,
          name: 'Deploy by Weekend',
          done: false
        }
      ]
    },
    {
      id: 15,
      title: 'AWS to GCP',
      description: 'Change server from Amazon to Google',
      color: '#41b883',
      listid: 4,
      tasks: [
        {
          id: 1,
          name: 'Prepare cost benefit analysis',
          done: true
        },
        {
          id: 2,
          name: 'Discuss with team',
          done: false
        },
        {
          id: 3,
          name: 'Make transfer by next month',
          done: false
        }
      ]
    },
    {
      id: 6,
      title: 'Design Changes',
      description: 'Feasible design changes in App',
      color: '#35495e',
      listid: 3,
      tasks: [
        {
          id: 1,
          name: 'Remove close button on popup',
          done: true
        },
        {
          id: 2,
          name: 'Keep only facebook signin',
          done: false
        }
      ]
    },
    {
      id: 61,
      title: 'Check customer visits',
      description: 'Analyse the trend',
      color: '#35495e',
      listid: 3,
      tasks: [
        {
          id: 1,
          name: 'Check the reason for spike',
          done: true
        }
      ]
    },
    {
      id: 7,
      title: 'Add features',
      description: 'New features in version 2.0',
      color: '#41b883',
      listid: 3,
      tasks: [
        {
          id: 1,
          name: 'Discuss the features',
          done: true
        },
        {
          id: 2,
          name: 'Prepare documentation',
          done: false
        }
      ]
    },
    {
      id: 8,
      title: 'Market Research',
      description: 'Search potential clients',
      color: '#41b883',
      listid: 5,
      tasks: [
        {
          id: 1,
          name: 'Discuss with Ops team',
          done: true
        },
        {
          id: 2,
          name: 'Design music player in React',
          done: false
        },
        {
          id: 3,
          name: 'Learn Redux',
          done: false
        },
        {
          id: 4,
          name: 'Implement project in Redux',
          done: false
        }
      ]
    }
  ]
}

const getters = {
  getcards: (state) => {
    return state.cardlist
  }
}
const mutations = {
  editcard: (state, payload) => {
    for (var i = 0; i < state.cardlist.length; i++) {
      if (state.cardlist[i].id === payload.cardid) {
        state.cardlist[i].listid = payload.listid
        state.cardlist[i].title = payload.title
        state.cardlist[i].description = payload.description
        state.cardlist[i].color = payload.color
      }
    }
    eventBus.$emit('closemodal', false)
  },
  deletecard: (state, payload) => {
    for (var i = 0; i < state.cardlist.length; i++) {
      if (state.cardlist[i].id === payload) {
        state.cardlist.splice(i, 1)
      }
    }
  },
  addcard: (state, payload) => {
    eventBus.$emit('closemodal', false)
    state.cardlist.push(payload)
  }
}
const actions = {
  editcard: ({ commit }, payload) => {
    commit('editcard', payload)
  },
  deletecard: ({ commit }, payload) => {
    commit('deletecard', payload)
  },
  addcard: ({ commit }, payload) => {
    commit('addcard', payload)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
