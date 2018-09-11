import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import { WORKING_TIME } from '../config'

Vue.use(Vuex)

const state = {
  items: [
    {text: '운동하기', checked: true},
    {text: 'Vue.js 공부하기', checked: false},
    {text: '자소서 쓰기', checked: false},
    {text: '저녁 먹기', checked: false}
  ],
  title: 'Todo List',
  started: false,
  paused: false,
  stopped: false,
  isWorking: true,
  counter: WORKING_TIME,
  interval: null
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
