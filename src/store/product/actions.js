import axios from "axios";

// Get products
export function getProducts({ commit }) {
  let url =
    "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
  axios
    .get(url)
    .then((response) => {
      commit("setProducts", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

// Product Details
export function productDetails({ commit }, id) {
  let url =
    "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
  axios
    .get(url, { params: { id: id } })
    .then((response) => {
      commit("setProduct", response.data[0]);
    })
    .catch(function(error) {
      console.log(error);
    });
}

// Add product to cart array
export function addCart({ commit, getters }, payload) {
  // Add product to cart array
  let cart = getters.cart;
  cart.push(payload);
  // Add cart array to cart state
  commit("setCart", cart);
}

export function removeCart({ commit, getters }, id) {
  let cart = [];
  if (id) {
    //   getters.cart.map((cart) =>{
    //     if(cart.id !== id) {
    //         cart.push(cart)
    //     }
    //   })
    for (let index = 0; index < getters.cart.length; index++) {
      const element = getters.cart[index];
      if (element.id !== id) {
        cart.push(element);
      }
    }
  }
  commit("setCart", cart);
}
