<template>
<!-- Section-->
<section class="py-2">
    <div class="container mt-100 mt-5">
        <h3>Latest Products</h3>
        <hr class="my-4" />
        <div class="row d-flex justify-content-between">
            <!-- categories -->
            <Categories @getcatoriesData="accessCategories" @getRangevalue="minmaxRangedata" @sortValue="ascDescVal" />
            <div class="col-md-9 row" v-if="categoriesshow">
                <div class="col-md-4 mb-5" v-for="item in getallData" :key="item.id">
                    <div class="card h-100 p-3" v-if="item.price>Number(maxval)">
                        <!-- Product image-->
                        <img class="card-img-top img-fluid" :src="item.image" alt="..." />
                        <!-- Product details-->
                        <div class="card-body pt-3">
                            <div class="text-center">
                                <!-- Product name-->
                                <h6>{{ item.title.slice(1, 35) }}</h6>

                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                <!-- Product price-->
                                <h3>$ {{ item.price }}</h3>

                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                                <router-link class="btn btn-outline-dark mt-auto" :to="`/productview/${item.id}`">View Product</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-9 d-flex flex-wrap justify-content-lg-start" v-else>
                <div v-for="item in shopdta" :key="item.id" class="my-2">
                    <div class="card p-3 col-md-3 mx-2 " style="width:300px; height:390px" v-if="item.price > Number(maxval)">
                        <!-- Product image-->
                        <img class="card-img-top img-fluid" :src="item.image" alt="..." />
                        <!-- Product details-->
                        <div class="card-body pt-3">
                            <div class="text-center">
                                <!-- Product name-->
                                <h6>{{ item.title.slice(1, 35) }}</h6>

                                <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                <!-- Product price-->
                                <h3>$ {{ item.price }}</h3>

                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                            <div class="text-center">
                                <router-link class="btn btn-outline-dark mt-auto" :to="`/productview/${item.id}`">View Product</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Categories from './Categories.vue';
export default {
    components: {
        Categories
    },
    name: "Products",
    props: ["shopdta"],

    data() {
        return {
            allCategoriesData: '',
            categoriesshow: false,
            maxval: ''
        }
    },

    computed: {
        getallData() {
            return this.allCategoriesData
        }
    },

    methods: {
        accessCategories(categoriesvalue) {
            this.categoriesshow = true
            let data = this.shopdta.filter(item => item.category === categoriesvalue)
            if (data.length > 0) {
                this.allCategoriesData = data
            } else {
                this.allCategoriesData = this.shopdta
            }
        },

        minmaxRangedata(range) {
            this.maxval = range
        },

        ascDescVal(val) {
            function compare(a, b) {
                if (a.price < b.price) {
                    return -1;
                }
                if (a.price > b.price) {
                    return 1;
                }
                return 0;
            }

            function compare1(a, b) {
                if (a.price > b.price) {
                    return -1;
                }
                if (a.price < b.price) {
                    return 1;
                }
                return 0;
            }

            if (val === 'asc') {
                return this.shopdta.sort(compare);
            } else if (val === "desc") {
                return this.shopdta.sort(compare1);
            }

        }
    }
};
</script>

<style scoped>
.img-fluid {
    width: 150px;
    height: 150px;
    margin: auto;
}

.title {
    font-size: 1rem;
    font-weight: bold;
}
</style>
