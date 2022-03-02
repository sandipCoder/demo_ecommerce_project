<template>
<div class="login">
    <div class="container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div class="card card0 border-0">
            <div class="row d-flex">
                <div class="col-lg-7">
                    <div class="card1 pb-6">
                        <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                            <img src="../assets/shopping.jpg" class="image"> </div>
                    </div>
                </div>
                <div class="col-lg-5 row d-flex justify-content-center align-items-center">
                    <div class="card2 card border-0 py-5 px-5">
                        <form action="" @submit.prevent="userLogin">
                            <div class="row">
                                <label class="mb-1">
                                    <h6 class="">Email Address</h6>
                                </label>
                                <div class="input-group">
                                    <input :class="`form-control ${errors.email ? 'is-invalid':''}`" type="email" name="email" v-model="email" placeholder="Enter a valid email address">

                                    <div class="invalid-feedback">{{ errors.email }}</div>
                                </div>
                            </div>
                            <div class="row  mb-3">
                                <label class="mb-1">
                                    <h6 class=" ">Password</h6>
                                </label>
                                <div class="input-group">
                                    <input :class="`form-control ${errors.password ? 'is-invalid':''}`" type="password" name="password" v-model="password" placeholder="Enter password">
                                    <div class="invalid-feedback">{{ errors.password }}</div>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <div class="input-group">
                                    <button type="submit" class="btn btn-primary text-center w-100">Login</button>
                                </div>
                            </div>
                        </form>
                        <div class="row mb-4 ">
                            <small class="font-weight-bold">Don't have an account?
                                <router-link class="text-danger " to="/register">Register</router-link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import loginValidator from '@/validation/login.js'
export default {
    name: "Login",

    data() {
        return {
            email: '',
            password: '',
            activeLoginUSer: [],
            allusers: '',
            errors: {}
        }
    },

    mounted() {
        if (localStorage.getItem("registerUser")) {
            let lstuser = localStorage.getItem("registerUser");
            this.allusers = JSON.parse(lstuser);
            //console.log(this.allusers)
        }
    },

    methods: {
        userLogin() {
            let loginUser = {
                email: this.email,
                password: this.password
            }

            let {
                isInvalid,
                errors
            } = loginValidator(loginUser)

            if (isInvalid) {
                this.errors = errors
            } else {
                this.errors = {}
                let userIndex = this.allusers.findIndex(item => item.email === loginUser.email)
                if (userIndex > -1) {
                    let passwordIndex = this.allusers.findIndex(item => item.password === loginUser.password)
                    if (passwordIndex > -1) {
                        let activeUser = this.allusers.find(item => item.email === loginUser.email)
                        this.activeLoginUSer.push(activeUser)
                        localStorage.setItem('currentActiveUser', JSON.stringify(activeUser))
                        this.$router.push('/')
                        window.location.reload()
                    }
                }
            }
        }
    }

}
</script>

<style scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px
}

.card2 {
    margin: 0px 40px
}

.logo {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    margin-left: 35px
}

.border-line {
    border-right: 1px solid #EEEEEE
}

.line {
    height: 1px;
    width: 45%;
    background-color: #E0E0E0;
    margin-top: 10px
}

.or {
    width: 10%;
    font-weight: bold
}

.text-sm {
    font-size: 14px !important
}

input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

a {
    color: inherit;
    cursor: pointer
}

.btn-blue {
    background-color: #1A237E;
    width: 150px;
    color: #fff;
    border-radius: 2px
}

.btn-blue:hover {
    background-color: #000;
    cursor: pointer
}

.bg-blue {
    color: #fff;
    background-color: #1A237E
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px
    }

    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>
