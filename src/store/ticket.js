const store = {
  state: {
    cartList: []
  },
  mutations: {
    addCart ({ cartList }, { id, img, name, price }) {
      let index = cartList.findIndex(v => v.id === id)
      if (index !== -1) {
        cartList[index].num++
      } else {
        cartList.push({ id, img, name, num: 1, price })
      }
    },
    removeCart ({ cartList }, id) {
      let index = cartList.findIndex(v => v.id === id)
      cartList.splice(index, 1)
    },
    updateCart ({ cartList }, { id, num }) {
      let index = cartList.findIndex(v => v.id === id)
      cartList[index].num = num
    }
  }
}
export default store
