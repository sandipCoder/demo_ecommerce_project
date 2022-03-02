<template>
 <!-- Header-->
    <header class="bg-dark">
        <div class="hidden">
            <div class="container my-5">
                <div class="text-center text-white">
                    <h1 class="display-1 fw-bolder">About Shop</h1>
                    <p class="lead fw-normal text-white-50 mb-0"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam deleniti deserunt consequatur obcaecati commodi repellendus similique at non? Dolor esse mollitia ad vero iste non voluptate explicabo culpa voluptatibus numquam!</p>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default ({
    name: "About",
})
</script>

<style scoped>
header {
    background: url("../assets/banner.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    padding: 4rem;
    position: relative;
}
.hidden {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>
