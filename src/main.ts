// Dependencies
import "./registerServiceWorker"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

// Bootstrap
import "@popperjs/core"
import "bootstrap"

// App instance
createApp(App)
  .use(store)
  .use(router)
  .mount("#app")
