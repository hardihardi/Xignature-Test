import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
import uploader from "vue-simple-uploader"
import "./assets/tailwind.css"

Vue.config.productionTip = false

Vue.use(uploader)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app")
