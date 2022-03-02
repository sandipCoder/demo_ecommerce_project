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
                <div class="col-lg-5 row justify-content-center align-items-center">
                    <div class="card2 card border-0 py-5 px-5">
                        <form action="" @submit.prevent="registerUSer">
                            <div class="row">
                                <label class="mb-1">
                                    <h6 class="">Username</h6>
                                </label>
                                <div class="input-group">
                                    <input :class="`form-control ${errors.username ? 'is-invalid':''}`" type="text" v-model="username" name="username" placeholder="Enter a Username">
                                    <div class="invalid-feedback">{{ errors.username }}</div>
                                </div>
                            </div>
                            <div class="row">
                                <label class="mt-3">
                                    <h6 class="">Email Address</h6>
                                </label>
                                <div class="input-group">
                                    <input :class="`form-control ${errors.email ? 'is-invalid' : '' }`" type="text" v-model="email" name="email" placeholder="Enter a valid email address">
                                    <div class="invalid-feedback">{{ errors.email }}</div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <label class="mb-1">
                                    <h6 class=" ">Password</h6>
                                </label>
                                <div class="input-group">
                                    <input :type="[showPassword ? 'text' : 'password']" :class="`form-control ${errors.password ? 'is-invalid':''}`" name="password" v-model="password" placeholder="Enter password">
                                    <div class="input-group-append align-self-center p-2 bg-grey">
                                        <span class="bg "><i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true" @click="showPassHide"></i></span>
                                    </div>
                                    <div class="invalid-feedback">{{ errors.password }}</div>
                                </div>
                                <!-- <label class="mb-1">
                                    <h6 class=" ">Password</h6>
                                </label>
                                <input type="password" :class="`form-control ${errors.password ? 'is-invalid':''}`" name="password" v-model="password" placeholder="Enter password">
                                <div class="invalid-feedback">{{ errors.password }}</div> -->

                            </div>
                            <div class="row  mt-3">
                                <label class="mb-1">
                                    <h6 class=" ">Confirm Password</h6>
                                </label>
                                <div class="input-group">
                                    <input type="password" :class="`form-control ${errors.cpassword ? 'is-invalid': ' ' }`" name="cpassword" v-model="cpassword" placeholder="Confirm password">
                                    <div class="invalid-feedback">{{ errors.cpassword }}</div>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="input-group">
                                    <button type="submit" class="btn btn-primary text-center w-100">Register</button>
                                </div>
                            </div>
                            <div class="row mb-4 "> <small class="font-weight-bold">You have an account?
                                    <router-link class="text-danger" to="/login">Login</router-link></small> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import registerValidator from "@/validation/register.js"
export default {
    name: "Register",

    data() {
        return {
            username: '',
            email: '',
            password: '',
            cpassword: '',
            users: [],
            errors: {},
            showPassword:false
        }
    },

    methods: {
        registerUSer() {
            let user = {
                username: this.username,
                email: this.email,
                password: this.password,
                cpassword: this.cpassword
            }

            const {
                isInvalid,
                errors
            } = registerValidator(user)

            if (isInvalid) {
                this.errors = errors
            } else {
                this.errors = {}

                if (this.username === '' || this.email === '' || this.password === '' || this.cpassword === '') {
                    return false
                } else {
                    if (localStorage.getItem("registerUser")) {
                        let lstuser = localStorage.getItem("registerUser");
                        this.users = JSON.parse(lstuser);
                    }

                    this.users.push(user)
                    localStorage.setItem('registerUser', JSON.stringify(this.users))
                    this.$router.push('/login')
                    this.username = ''
                    this.email = ''
                    this.password = ''
                    this.cpassword = ''
                }
            }
        },

        showPassHide(){
            this.showPassword =!this.showPassword
        }
        
    },

}
</script>

<style scoped>

.bg-grey{
 position: absolute;
 right:30px;
 top:7px;
 z-index: 9;
}
.login {
    display: flex;
    justify-content: center;
    align-items: center;
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

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
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
