<template>
<div>
    <!-- Product section-->
    <section class="py-5 text-left">
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center ">
                <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="getAllDataShop.image" alt="..." /></div>
                <div class="col-md-6">
                    <div class="small mb-1">SKU: BST-498</div>
                    <h2 class="display ">{{getAllDataShop.title}}</h2>
                     <p><span class="fw-bold"> Category : </span> {{getAllDataShop.category}} </p>
                     <p><span class="fw-bold"> Ratings : </span>   <span class="fw-bold"> Counts : </span></p>
                    <div class="fs-5 mb-5">
                        <span class="text-decoration-line-through">$ {{getAllDataShop.price}}</span>
                        <h1 class="fw-bolder">$ {{getAllDataShop.price}}</h1>                        
                    </div>
                    <p class="lead"> ${{getAllDataShop.description}} </p>
                    <div class="d-flex">
                        <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem" />
                        <button class="btn btn-outline-dark flex-shrink-0" type="button" @click="addProductInCart(getAllDataShop)">
                            <i class="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>   
    <!-- Related items section-->
     <Relatedproduct :getproductCategory="getAllDataShop"/>
</div>
<!-- Footer-->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Relatedproduct from '../components/Relatedproduct.vue'
export default {
    name:'Productview',
    components:{Relatedproduct},
    data(){        
       return{
          pid:this.$route.params.id,
       }
    },

    computed:{
        ...mapGetters(['getAllDataShop'])
    },

    methods:{
       ...mapActions(['getProductDetail','addProductToCart']),

       addProductInCart(productdata){
           this.addProductToCart(productdata)
       }

    },

    async mounted(){
        await this.getProductDetail(this.pid)
    }


}
</script>

<style>

</style>
