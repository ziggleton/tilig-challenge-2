import { createStore } from 'vuex'
import issues from './modules/Issues'


const store = createStore({
  state : {},
  getters : {},
  mutations: {},  
  actions : {},
  modules: { issues: issues},
})

export default store