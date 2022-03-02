<template>
  <div id="app">
    <div id="nav">
      <Nav/>
    </div>
    <router-view />

  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default{
  components:{Nav,}

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
   background:#eee;
   min-height: 100vh;
   padding-bottom: 5rem;
}
#nav a {
  font-weight: 500;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
