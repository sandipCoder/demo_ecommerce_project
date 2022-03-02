<template>
<!-- Related items section-->
<section class="py-5 bg-light">
    <div class="container mt-5">
        <h2 class="fw-bolder mb-4">Related products </h2>
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div class="col mb-5" v-for="product in productsCategory" :key="product.id" >
                <div class="card h-100">
                    <!-- Sale badge-->
                    <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                    <!-- Product image-->
                    <img class="card-img-top img-fluid" :src="product.image" :alt="product.title" />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">{{product.title}}</h5>
                            <!-- Product reviews-->
                            <div class="d-flex justify-content-center small text-warning mb-2">
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                                <div class="bi-star-fill"></div>
                            </div>
                            <!-- Product price-->
                            <span class="text-muted text-decoration-line-through">$20.00</span>
                            $ {{product.price}}
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><button class="btn btn-outline-dark mt-auto" @click="prodctView(product.id)">View Product</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import {
    mapActions,
    mapGetters
} from 'vuex'
export default {
    name: "Relatedproduct",
    props: ['getproductCategory'],
    data() {
        return {
            allProduct: [],
            proid:this.$route.params.id
        }
    },

    computed: {
        ...mapGetters(['getAllProducts']),
        productsCategory(){
         return this.getAllProducts.filter(item=>item.category === this.getproductCategory.category )
        }
    },

    methods: {
        ...mapActions(['productData']),

        prodctView(id){
           this.$router.push(`/productview/${id}`)
           location.reload()
        }
    },

    async mounted() {
        await this.productData(this.proid)
    }

}
</script>

<style scoped>
.img-fluid {
    width: 150px;
    height: 150px;
    margin: auto;
}
</style>
