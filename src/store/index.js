import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  // Propriedade de dados
  state: {

  },
  mutations: {

  },
  actions: {

    loadProducts() {
      axios.get("https://fakestoreapi.com/products").then((response) => {
        console.log(response);
      })
    }

  },
  modules: {
  }
})
