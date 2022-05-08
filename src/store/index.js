import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberId: '',
    name: '',
    roomId: ''
  },
  mutations: {
    SetRoomId: (state, payload) => {
      state.roomId = payload
    },
    SetName: (state, payload) => {
      state.name = payload
    },
    SetMemberId: (state, payload) => {
      state.memberId = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    RoomId: state => {
      return state.roomId
    },
    Name: state => {
      return state.name
    },
    MemberId: state => {
      return state.memberId
    }
  }
})
