
import axios from "axios";

const state = {
    shopCart: [],
    products: [],
    carts:JSON.parse(localStorage.getItem('cartData'))|| []
}
const getters = {
    getAllDataShop() {
        return state.shopCart
    },
    getAllProducts() {
        return state.products
    },
    getCartData() {
        return state.carts
    }

}
const actions = {
    async getshop({ commit }) {
        const response = await axios.get('http://localhost:3000/shop/')
        commit('showShop', response.data)
    },

    async productData({ commit }) {
        const response = await axios.get('http://localhost:3000/shop/')
        commit('showProducts', response.data)
    },

    async getProductDetail({ commit }, id) {
        const response = await axios.get(`http://localhost:3000/shop/${id}`)
        commit('productWisegetData', response.data)
    },

    addProductToCart({ commit }, productData) {
        commit("cartdataShow", productData)
    },

    deleteProduct({ commit },id,index) {
        commit('deleitemFromCart',id,index)
    }

}
const mutations = {
    showShop(state, data) {
        state.shopCart = data
    },
    productWisegetData(state, data) {
        state.shopCart = data
    },
    showProducts(state, data) {
        state.products = data
    },
    cartdataShow(state, product) {
        //console.log(this.addcart)
        let gerProductis;
        let existingProduct = state.carts.filter((item, index) => {
            if (item.product.id === product.id) {
                gerProductis = index
                return true;
            } else {
                return false;
            }
        })

        if (existingProduct.length) {
            state.carts[gerProductis].qty++
        } else {
            state.carts.push({
                product: product,
                qty: 1
            })
            localStorage.setItem('cartData',JSON.stringify(state.carts))
            //console.log(state.carts)
        }

        //  state.carts.push({ product: pdata, qty: 1 })
        //console.log(state.carts)
    },

    deleitemFromCart(state,data) {
      //  console.log(state.carts,data)
        if(state.carts[data.index].qty > 1) {
            state.carts[data.index].qty--;
        } else {
            let getIndex = state.carts.findIndex(item => item.product.id === data.id)
            console.log(getIndex);
            state.carts.splice(getIndex, 1);
            // window.location.reload()
        }
        localStorage.setItem('cartData',JSON.stringify(state.carts))
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}