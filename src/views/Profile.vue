<template>
<div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
                <span class="font-weight-bold">{{user.username}}</span><span class="text-black-50"> {{user.email}}</span><span> </span></div>
        </div>
        <div class="col-md-8 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">User Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12"><label class="labels">First Name :</label> <strong>{{profiledata.name}}</strong></div>
                    <div class="col-md-12"><label class="labels">Last Name :</label> <strong>{{profiledata.lastname}}</strong></div>
                </div>
                <div class="row">
                    <div class="col-md-12"><label class="labels">Mobile Number :</label> <strong>+91 000 000 0000</strong> </div>
                    <div class="col-md-12"><label class="labels">Address :</label> <strong>{{profiledata.address1}}</strong></div>
                    <div class="col-md-12"><label class="labels">Postcode :</label> <strong>{{profiledata.zipcode}}</strong></div>
                    <div class="col-md-12"><label class="labels">Email ID :</label> <strong>{{user.email}}</strong></div>
                </div>
                <div class="row ">
                    <div class="col-md-12"><label class="labels">Country :</label> <strong>{{profiledata.country}}</strong></div>
                    <div class="col-md-12"><label class="labels">State/Region :</label> <strong>{{profiledata.state}}</strong></div>
                </div>
               
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Profile",

    data() {
        return {
            profiledata: '',
            user:''
        }
    },

    mounted() {
        if (localStorage.getItem("profile")) {
            let profiles = localStorage.getItem("profile");
            this.profiledata = JSON.parse(profiles);
            console.log(this.profiledata)
        }
        if (localStorage.getItem("currentActiveUser")) {
            let actuser = localStorage.getItem("currentActiveUser");
            this.user = JSON.parse(actuser);
            console.log(this.user)
        }
    },

}
</script>

<style scoped>
.container {
    width: 1080px
}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 16px;
    margin: 10px 0;
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}

.border-right {
    border-right: 1px solid #ccc;
}
</style>
