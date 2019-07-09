const store = {
  state: {
    loginStatus: false,
    loginName: ''
  },
  mutations: {
    setLoginStatus (state, data) {
      state.loginStatus = data.status
      state.loginName = data.name
    }
    // changeLoginStatus (state, status) {
    //   state.loginStatus = status
    // },
    // changeLoginName (state, name) {
    //   state.loginName = name
    // }
  }
  // actions: {
  //   setLoginStatus ({ state, commit }, data) {
  //     commit('changeLoginStatus', true)
  //     commit('changeLoginName', data)
  //   }
  // }
}
export default store
