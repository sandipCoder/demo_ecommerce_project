import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

//user guest
function guest(to, from, next) {
  if (localStorage.currentActiveUser) {
    next('/home')
  } else {
    next()
  }
}
//user gaurds
function gaurds(to, from, next) {
  if (localStorage.currentActiveUser) {
    next()
  } else {
    next('/')
   
  }
}

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: guest
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: guest
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
     
  },

  {
    path: "/productview/:id",
    name: "Productview",
    component: () =>
      import(/* webpackChunkName: "Productview" */ "../views/Productview.vue"),
     
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
     
  },  
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "Checkout" */ "../views/Checkout.vue"),
      beforeEnter:gaurds,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
      beforeEnter:gaurds
  }

];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
});
export default router;
