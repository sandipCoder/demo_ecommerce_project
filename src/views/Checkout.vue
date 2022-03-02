<template>
<div>
    <div class="container pb-5" v-if="carpaymetshow">
        <div class="py-3 mt-4 text-center">
            <h2>Checkout form</h2>
            <p class="lead"></p>
        </div>
        <div class="row p-3 bg-light">
            <div class="col-md-5 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Your cart</span>
                    <span class="badge badge-secondary badge-pill"> {{getCartData.length}} </span>
                </h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed" v-for="product in getCartData" :key="product.id">
                        <div>
                            <h6 class="my-0">{{product.product.title.slice(0,30)}} (Qty:{{ product.qty}})</h6>
                            <small class="text-muted">{{product.product.description.slice(0,100)}}...</small>
                        </div>
                        <span class="text-muted">${{(product.product.price * product.qty).toFixed(2)}}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between bg-light">
                        <div class="text-success">
                            <h6 class="my-0">Promo code</h6>
                            <small>EXAMPLECODE</small>
                        </div>
                        <span class="text-success">-$5</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between">
                        <span>Total (USD)</span>
                        <strong>$ {{totalCount}}</strong>
                    </li>
                </ul>

                <form class="card p-2">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Promo code">
                        <div class="input-group-append">
                            <button type="submit" class="btn btn-secondary">Redeem</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- checkout form -->
            <div class="col-md-7 order-md-1">
                <h4 class="mb-3">Billing address</h4>
                <form class="needs-validation" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" class="form-control" v-model="name" id="firstName" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" class="form-control" v-model="lastname" id="lastName" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                Valid last name is required.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="username">Username</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control" id="username" :value="user.username" placeholder="Username" required>
                            <div class="invalid-feedback" style="width: 100%;">
                                Your username is required.
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">Email <span class="text-muted">(Optional)</span></label>
                        <input type="email" class="form-control" :value="user.email" id="email" placeholder="you@example.com">
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address">Address</label>
                        <input type="text" class="form-control" v-model="address1" id="address" placeholder="1234 Main St" required>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="address2">Address 2 <span class="">(Optional)</span></label>
                        <input type="text" class="form-control" v-model="address2" id="address2" placeholder="Apartment or suite">
                    </div>

                    <div class="row">
                        <div class="col-md-5 mb-3">
                            <label for="country">Country</label>
                            <select class="custom-select d-block w-100 form-control" id="country" required v-model="selectedcountry">
                                <option value="">Choose...</option>
                                <option :value="selectedcountry">India</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label for="state">State</label>
                            <select class="custom-select d-block w-100 form-control" id="state" required v-model="selectedstate">
                                <option value="">Choose...</option>
                                <option :value="selectedstate">Maharashtra</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a valid state.
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="zip">Zip</label>
                            <input type="text" class="form-control" id="zip" v-model="zipcode" placeholder="" required>
                            <div class="invalid-feedback">
                                Zip code required.
                            </div>
                        </div>
                    </div>

                    <hr class="mb-4">

                    <h4 class="mb-3">Payment</h4>

                    <div class="d-block my-3">
                        <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" v-model="card" value="Credit card" type="radio" class="custom-control-input" checked required>
                            <label class="custom-control-label" for="credit"> Credit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" v-model="card" value="Debit card" type="radio" class="custom-control-input" required>

                            <label class="custom-control-label" for="debit"> Debit card</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" v-model="card" value="PayPal" type="radio" class="custom-control-input" required>
                            <label class="custom-control-label" for="paypal"> PayPal</label>
                        </div>
                        {{card}}
                    </div>

                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" @click.prevent="goTopayment">Place Order</button>
                </form>
            </div>
        </div>
    </div>
    <!-- payment page -->
    <Payments v-else :totalPrice="totalCount" :allData="allRecord" />
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'
import Payments from '../components/Payments.vue';

export default {
    components: {
        Payments
    },
    name: "Checkout",

    data() {
        return {
            user: '',
            carpaymetshow: true,
            name: '',
            lastname: '',
            address1: '',
            address2: '',
            country: '',
            state: '',
            zipcode: '',
            credeit: "Credit Card",
            debit: "Debit Card",
            paypal: "PayPal",
            card: '',
            selectedcountry: 'India',
            allRecord: [],
            selectedstate: "Maharashtra"

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
        ...mapGetters(['getCartData']),

        totalCount() {
            let sum = 0;
            for (let i in this.getCartData) {
                sum = sum + this.getCartData[i].product.price * this.getCartData[i].qty
            }
            return sum
        },
    },

    methods: {
        goTopayment() {
            //this.$router.push('/payment')
            let gatallData = {
                name: this.name,
                lastname: this.lastname,
                address1: this.address1,             
                country: this.selectedcountry,
                state: this.selectedstate,
                zipcode: this.zipcode,
                card: this.card,
              
            }
            if (this.name === '' || this.lastname === '' || this.address1 === '' ||
                this.selectedcountry === '' || this.selectedstate === '' || this.zipcode === '' || this.card === '') 
                return false

                this.allRecord.push(gatallData)
                localStorage.setItem('profile',JSON.stringify(gatallData))
                this.carpaymetshow = false
            
            
        }
    }

}
</script>

<style scoped>
.container {
    width: 1080px
}

.lh-condensed {
    line-height: 1.25;
}

.list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.form-control {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
}

.badge-secondary {
    color: #fff;
    background-color: #6c757d;
}
</style>
