import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  // Propriedade de dados
  state: {
    products: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit('loadProducts', response.data)
      })
    },
  },
  modules: {
  }
})
