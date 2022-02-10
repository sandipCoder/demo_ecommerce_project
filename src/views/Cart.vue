<template>
<div class="container my-5">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-md-12">
                <div class="ibox">
                    <div class="ibox-title">
                        <span class="pull-right">(<strong>5</strong>) items</span>
                        <h5>Items in your cart</h5>
                    </div>
                    <div class="ibox-content" v-for="item in getCartData" :key="item.id">
                        <div class="table-responsive">
                            <table class="table shoping-cart-table">
                                <tbody>
                                    <tr>
                                        <td width="200">
                                            <div class="cart-product-imitation">
                                                <img :src="item.image" alt="image" width="150" />
                                            </div>
                                        </td>
                                        <td class="desc">
                                            <h3>
                                                {{item.title}}
                                            </h3>

                                            <dl class="small m-b-none">
                                                <dt> Category </dt>
                                                <dd>{{item.category}}</dd>
                                            </dl>

                                            <dl class="small m-b-none">
                                                <dt>Description</dt>
                                                <dd>{{item.description}}</dd>
                                            </dl>

                                            <dl class="small m-b-none">
                                                <dt> Ratings: {{item.rating.rate}}  Count: {{item.rating.count }}</dt>
                                            </dl>

                                            <div class="m-t-sm">
                                                |<a @click.prevent="deleteProduct(item.id)" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                                            </div>
                                        </td>

                                        <td>
                                            $ {{item.price.toFixed(2)}}
                                            <s class="small text-muted">$230,00</s>
                                        </td>
                                        <td width="90">
                                            <input type="text" v-model="qty" class="form-control">
                                        </td>
                                        <td>
                                            <h4>
                                                ${{item.price.toFixed(2)*qty}}
                                            </h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-md-12">
                <div class="ibox">
                    <div class="ibox-title d-flex justify-content-end">
                        <h5> Total</h5>
                    </div>
                    <div class="ibox-content d-flex justify-content-end">
                        <h2 class="font-bold">
                            $ {{totalCount.toFixed(2)}}
                        </h2>
                    </div>
                    <div class="ibox-content d-flex justify-content-between">
                        <button class="btn btn-default" @click="returnToHome"><i class="fas fa-arrow-left"></i> Continue shopping</button>
                        <button class="btn btn-primary pull-right"><i class="fa fa fa-shopping-cart"></i> Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
  mapActions,
    mapGetters
} from 'vuex'
export default {
    name: "Cart",

    data() {
        return {
            qty: 1
        }
    },

    computed: {
        ...mapGetters(['getCartData']),

        totalCount(){
            let sum = 0;

            for(let i in this.getCartData){
                sum = sum + this.getCartData[i].price
            }
            return sum
        },

       
    },
    methods:{
        returnToHome(){
            this.$router.push('/')
        },

        ...mapActions(['deleteProduct'])
    }

}
</script>

<style scoped>
h3 {
    font-size: 1.6rem
}

.text-navy {
    color: #1ab394;
}

.cart-product-imitation {
    text-align: center;
    background-color: #f8f8f9;
}

.product-imitation.xl {
    padding: 120px 0;
}

.product-desc {
    padding: 20px;
}

.ecommerce .tag-list {
    padding: 0;
}

.ecommerce .fa-star {
    color: #d1dade;
}

.ecommerce .fa-star.active {
    color: #f8ac59;
}

.ecommerce .note-editor {
    border: 1px solid #e7eaec;
}

table.shoping-cart-table {
    margin-bottom: 0;
}

table.shoping-cart-table tr td {
    border: none;
    text-align: right;
}

table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
    text-align: left;
}

table.shoping-cart-table tr td:last-child {
    width: 80px;
}

.ibox {
    clear: both;
    margin-bottom: 25px;
    margin-top: 0;
    padding: 0;
}

.ibox:after,
.ibox:before {
    display: table;
}

.ibox-title {
    -moz-border-bottom-colors: none;
    -moz-border-left-colors: none;
    -moz-border-right-colors: none;
    -moz-border-top-colors: none;
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 3px 0 0;
    color: inherit;
    margin-bottom: 0;
    padding: 14px 15px 7px;
    min-height: 48px;
    display: flex;
    justify-content: space-between;
}

.ibox-content {
    background-color: #ffffff;
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px 0;

}

.ibox-footer {
    color: inherit;
    border-top: 1px solid #e7eaec;
    font-size: 90%;
    background: #ffffff;
    padding: 10px 15px;
}
</style>
