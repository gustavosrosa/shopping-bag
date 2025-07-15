import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  // Propriedade de dados
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit('loadProducts', response.data);
      })
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    }
  },
  modules: {
  }
})
