import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuList:JSON.parse(localStorage.getItem('menus')),
  },
  mutations: {
    
  },
  actions: {

  },
  getters:{
    getmenuList(state){
      return state.menuList
    }
  }
})
