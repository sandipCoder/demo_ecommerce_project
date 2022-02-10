<template>
<!-- Section-->
<section class="py-2">
    <div class="container mt-5">
        <div class="
          row row-cols-2 row-cols-md-3 row-cols-xl-4
          justify-content-center
        ">
            <div class="col mb-5" v-for="item in shopdta" :key="item.id">
                <div class="card h-100 p-3">
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
</section>
</template>

<script>
export default {
    name: "Products",
    props: ["shopdta"],
};
</script>

<style scoped>
.img-fluid {
    width: 150px;
    height: 150px;
    margin: auto;
}
</style>
