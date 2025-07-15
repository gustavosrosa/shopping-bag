import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  // Propriedade de dados
  state: {
    products: [],
    productsInBag: [],
  },
  // Altera o state
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag.filter(
        (product) => product.id !== productId
      );
      state.productsInBag = updatedBag;
    }
  },
  // Chama uma mutação
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        commit('loadProducts', response.data);
      })
    },
    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({ commit }, id) {
      commit('removeFromBag', id);
    }
  },
  modules: {
  }
})
