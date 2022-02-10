
import axios from "axios";

const state = {
    shopCart: [],
    products: [],
    carts:[]
}
const getters = {
    getAllDataShop() {
        return state.shopCart
    },
    getAllProducts() {
        return state.products
    },
    getCartData(){
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

    addProductToCart({commit},productData){
       commit("cartdataShow",productData)
    },

    deleteProduct({commit},itemId){
        commit('deleitemFromCart',itemId)
    }

}
const mutations = {
    showShop(state, data) {
        state.shopCart = data
    },
    productWisegetData(state, data) {
        state.shopCart = data
    },
    showProducts(state,data){
     state.products = data
    },
    cartdataShow(state,pdata){
     state.carts.push(pdata)
     console.log(state.carts)
    },

    deleitemFromCart(state, itemId){
     let idFindindex = state.carts.findIndex(item=>item.id === itemId)
     state.carts.splice(idFindindex,1)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}