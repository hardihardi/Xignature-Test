import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Post.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Post",
    component: Home,
  },
  {
    path: "/pdf",
    name: "Pdf",
    component: () => import(/* webpackChunkName: "about" */ "../views/Pdf.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
