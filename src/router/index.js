import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import smoothscroll from "vue-smoothscroll";
Vue.use(smoothscroll);
Vue.use(VueRouter);
import jQuery from "jquery";
global.jquery = jQuery;
global.$ = jQuery;
window.$ = window.jQuery = require("jquery");

const routes = [
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
