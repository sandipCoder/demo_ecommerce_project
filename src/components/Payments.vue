<template>
<div class="container">
    <div class="row m-0">
        <div class="col-md-12 col-12">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="row box-right">
                        <div class="col-md-8 ps-0 ">
                            <p class="ps-3 textmuted fw-bold h6 mb-0">TOTAL AMOUNT</p>
                            <p class="h1 fw-bold d-flex">
                                <span class=" fas fa-dollar-sign textmuted pe-1 h6 align-text-top mt-1"></span>
                                $ {{totalPrice.toFixed(2)}} <span class="textmuted"></span>
                            </p>
                            <p class="ms-3 px-2 bg-green">+10% since last month</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 px-0 mb-4">
                    <div class="box-right">
                        <p class="textmuted h8">Address</p>
                        <p class="fw-bold h7">{{allData[0].name}} {{allData[0].lastname}}</p>
                        <p class="textmuted h8">{{allData[0].address1}}</p>
                        <p class="textmuted h8 mb-2">{{allData[0].country}},{{allData[0].state}},{{allData[0].zipcode}}</p>
                        <button class=" btn btn-link" @click="changeAdd">Change Address</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 px-0 mb-4 ">
            <div class="box-left">
                <div class="">
                    <p class="h7 fw-bold mb-1">Pay the bill using : {{allData[0].card}}</p>
                    <p class="textmuted h8 mb-2">Make payment for this invoice by filling in the details</p>
                    <div class="form">
                        <div class="row">
                            <div class="col-12">
                                <div class="card border-0"> <input class="form-control ps-5" type="text" placeholder="Card number"> <span class="far fa-credit-card"></span> </div>
                            </div>
                            <div class="col-6"> <input class="form-control my-3" type="text" placeholder="MM/YY"> </div>
                            <div class="col-6"> <input class="form-control my-3" type="text" placeholder="cvv"> </div>
                            <p class="p-blue h8 fw-bold mb-3">MORE PAYMENT METHODS</p>
                        </div>
                        <div class="btn btn-primary btn-lg d-block h1 fw-bold">
                            PAY
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: "Payments",
    props: ['totalPrice','allData'],

    data() {
        return {

        }
    },

    methods:{
        changeAdd(){
            window.location.reload()
        }
    }

}
</script>

<style scoped>
p {
    margin: 0
}

.container {
    max-width: 500px;
    margin: 30px auto;
    background-color: #e8eaf6;
    padding: 35px
}

.box-right {
    padding: 30px 25px;
    background-color: white;
    border-radius: 15px
}

.box-left {
    padding: 20px 20px;
    background-color: white;
    border-radius: 15px
}

.textmuted {
    color: #7a7a7a
}

.bg-green {
    background-color: #d4f8f2;
    color: #06e67a;
    padding: 3px 0;
    display: inline;
    border-radius: 25px;
    font-size: 11px
}

.p-blue {
    font-size: 14px;
    color: #1976d2
}

.fas.fa-circle {
    font-size: 12px
}

.p-org {
    font-size: 14px;
    color: #fbc02d
}

.bg-blue {
    background-color: #dfe9fc9c;
    border-radius: 5px
}

.form-control {
    box-shadow: none !important
}

.card input::placeholder {
    font-size: 14px
}

::placeholder {
    font-size: 14px
}

input.card {
    position: relative
}

.far.fa-credit-card {
    position: absolute;
    top: 10px;
    padding: 0 15px
}

.fas,
.far {
    cursor: pointer
}

.cursor {
    cursor: pointer
}

@media(max-width:320px) {
    .h8 {
        font-size: 11px
    }

    .h7 {
        font-size: 13px
    }

    ::placeholder {
        font-size: 10px
    }
}
</style>
