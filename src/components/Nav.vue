<template>
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light bg-light py-2">
    <div class="container">
        <a class="navbar-brand"> Shoping Store </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Products</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li> -->
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">All Products</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                        <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                    </ul>
                </li> -->
            </ul>
            <form class="d-flex">
                <button class="btn btn-sm btn-outline-dark" type="submit" @click.prevent="addcartProductpage">
                 <i class="bi bi-cart-plus me-1"></i>
                    <span class="badge bg-dark text-white ms-1 rounded-pill"> {{getCartData.length}} </span>
                </button>
            </form>
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item mx-2">
                    <router-link type="button" class=" btn-sm btn btn-outline-dark" to="/login" v-if="!user">  <i class="bi bi-person-fill"></i> Login </router-link>
                </li>

                 <li class="nav-item">
                    <router-link type="button" class=" btn-sm btn btn-outline-dark " to="/register" v-if="!user"> <i class="bi bi-person-plus-fill"></i> Rgister </router-link>
                </li>

                <li class="nav-item dropdown" v-if="user">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-fill"></i> {{user.username}}</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <router-link to="/profile" class="dropdown-item">User Profile</router-link>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>

                        <li>
                            <a class="dropdown-item" href="" @click.prevent="logOut">logOut</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- Header-->
</template>

<script>
import {
    mapGetters
} from 'vuex'
export default {
    name: "Nav",
    data() {
        return {
            user: ''
        }
    },

    mounted() {
        if (localStorage.getItem("currentActiveUser")) {
            let actuser = localStorage.getItem("currentActiveUser");
            this.user = JSON.parse(actuser);
            console.log(this.user)

        }
    },

    computed: {
        ...mapGetters(['getCartData'])
    },
    methods: {
        addcartProductpage() {
            this.$router.push('/cart')
        },
        logOut() {
            localStorage.removeItem('currentActiveUser')
            localStorage.removeItem('profile')
            this.$router.push('/login')
            window.location.reload()
        }
    }
}
</script>

<style scoped>
.btn-outline-dark:hover {
    color: #fff !important;
    background-color: #212529;
    border-color: #212529;
}

</style>
