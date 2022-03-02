<template>
<div>
    <!-- Product section-->
    <section class="py-2 text-left">
        <div class="container my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                    <img class="card-img-top mb-5 mb-md-0" :src="getAllDataShop.image" alt="..." />
                </div>
                <div class="col-md-6 px-5 ">
                    <div class="small mb-1">SKU: BST-498</div>
                    <h2 class="display-h1">{{ getAllDataShop.title }}</h2>
                    <p>
                        <span class="fw-bold"> Category : </span>
                        {{ getAllDataShop.category }}
                    </p>
                    <p>
                        <span class="fw-bold"> Ratings : </span>
                        {{ getAllDataShop.rating.rate }}
                        <span class="fw-bold"> Counts : </span>
                        {{ getAllDataShop.rating.count }}
                    </p>
                    <div class="fs-5 mb-5">
                        <span class="text-decoration-line-through">$ 250</span>
                        <h1 class="fw-bolder">$ {{ getAllDataShop.price }}</h1>
                    </div>
                    <p class="lead">${{ getAllDataShop.description }}</p>
                    <div class="relative">
                        <transition name="fade" mode="out-in" >
                            <div class="alert alert-success pops" v-if="pop" role="alert">
                                Product added in cart Successfully!
                            </div>
                        </transition>
                    </div>

                    <div class="d-flex">
                        <button class="btn btn-outline-dark flex-shrink-0" type="button" @click="addProductInCart(getAllDataShop)">
                            <i class="bi-cart-fill me-1"></i>
                            Add to cart
                        </button>

                         <button class="btn btn-dark flex-shrink-0 mx-3"  type="button" @click="goToCart()">
                            <i class="bi-cart-fill me-1"></i>
                            Go to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Related items section-->
    <Relatedproduct :getproductCategory="getAllDataShop" />
</div>
<!-- Footer-->
</template>
<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import Relatedproduct from "../components/Relatedproduct.vue";
export default {
    name: "Productview",
    components: {
        Relatedproduct,
    },
    data() {
        return {
            pid: this.$route.params.id,
            pop: false,
        };
    },

    computed: {
        ...mapGetters(["getAllDataShop", "getCartData"]),
    },

    methods: {
        ...mapActions(["getProductDetail", "addProductToCart"]),

        addProductInCart(productdata) {
            this.addProductToCart(productdata);
            this.pop = true;
            setTimeout(() => {
                this.pop = false;
            },2000);
        },
        goToCart(){
            this.$router.push('/cart')
        }
    },

    async mounted() {
        await this.getProductDetail(this.pid);
        this.value = 0;
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.relative{
    position: relative;
}
.pops {
    top:50px;
    position: absolute;
    left: 0;
}

</style>
