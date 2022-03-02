<template>
<div class="col-md-3">
    <div class="card">
        <article class="filter-group">
            <header class="card-header">
                <h6 class="title">Categories </h6>
            </header>
            <div class="filter-content " id="collapse_aside1" style="">
                <div class="card-body">
                    <ul class="list-menu">
                        <li><a @click="getCategories"> All </a></li>
                        <li><a @click="getCategories">men's clothing </a></li>
                        <li><a @click="getCategories"> women's clothing </a></li>
                        <li><a @click="getCategories"> jewelery </a></li>
                        <li><a @click="getCategories"> electronics </a></li>

                    </ul>
                </div>
            </div>
        </article>
        <article class="filter-group">
            <header class="card-header">
                <h6 class="title">Price Range </h6>
            </header>
            <div class="filter-content " id="collapse_aside2" style="">
                <div class="card-body">
                    <input type="range" class="custom-range w-100" v-model="max" min="0" max="200" name="">
                    <div class="form-row">
                        <div class="form-group "> <label>Min</label>
                            <input class="form-control" v-model="min" placeholder="$10" type="number"> </div>
                        <div class="form-group text-right "> <label>Max</label>
                            <input class="form-control" v-model="max" placeholder="$200" type="number"> </div>
                    </div>
                    <button class="btn btn-sm btn-primary mt-3" @click="rangeGet">Apply Now</button>
                </div>
            </div>
        </article>

        <article class="filter-group">
            <header class="card-header">
                <h6 class="title">Sort By </h6>
            </header>
            <div class="filter-content " id="collapse_aside3" style="">
                <div class="card-body">
                    <label class="checkbox-btn">
                        <input type="radio" name="range" v-model="sorts" value="asc" @change="getvalue"> <span class="btn btn-light"> Low to high </span>
                    </label>
                    <label class="checkbox-btn">
                        <input type="radio" name="range" v-model="sorts" value="desc"  @change="getvalue"> <span class="btn btn-light"> High to low </span>

                    </label>
                </div>
            </div>
        </article>
        <article class="filter-group">
            <header class="card-header">
                <h6 class="title">Size </h6>
            </header>
            <div class="filter-content " id="collapse_aside3" style="">
                <div class="card-body"> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> XS </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> SM </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> LG </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> XXL </span> </label> <label class="checkbox-btn"> <input type="checkbox"> <span class="btn btn-light"> XXXL </span> </label> </div>
            </div>
        </article>
        <article class="filter-group">
            <header class="card-header">
                <h6 class="title">Rating </h6>
            </header>
            <div class="filter-content " id="collapse_aside4" style="">
                <div class="card-body"> <label class="custom-control"> <input type="checkbox" checked="" class="custom-control-input">
                        <div class="custom-control-label">Better </div>
                    </label> <label class="custom-control"> <input type="checkbox" checked="" class="custom-control-input">
                        <div class="custom-control-label">Best </div>
                    </label> <label class="custom-control"> <input type="checkbox" checked="" class="custom-control-input">
                        <div class="custom-control-label">Good</div>
                    </label> <label class="custom-control"> <input type="checkbox" checked="" class="custom-control-input">
                        <div class="custom-control-label">Not good</div>
                    </label>
                </div>
            </div>
        </article>
    </div>
    {{sorts}}
</div>
</template>

<script>
export default {
    name: "Categories",

    data() {
        return {
            min: 0,
            max: 10,
            sorts:''
        }
    },

    methods: {
        getCategories(e) {
            this.$emit('getcatoriesData', e.target.innerText)
        },
        rangeGet() {
            this.$emit('getRangevalue', this.max)
        },

        getvalue(e){
            this.$emit('sortValue', e.target.value)
        }
    }

}
</script>

<style>

</style>
