import axios from 'axios';
import { createStore } from 'vuex'

const STORAGE_PRODUCTS_IN_BAG = "productsInBag";

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
      localStorage.setItem(STORAGE_PRODUCTS_IN_BAG, JSON.stringify(state.productsInBag));
    },
    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag.filter(
        (product) => product.id !== productId
      );
      state.productsInBag = updatedBag;
      localStorage.setItem(STORAGE_PRODUCTS_IN_BAG, JSON.stringify(state.productsInBag));
    },
    loadBag(state, products) {
      state.productsInBag = products;
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
    },
    loadBag({ commit }) {
      if (localStorage.getItem(STORAGE_PRODUCTS_IN_BAG)) {
        commit('loadBag', JSON.parse(localStorage.getItem(STORAGE_PRODUCTS_IN_BAG)));
      }
    },
  },
  modules: {
  }
})
