// Dependencies
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "@popperjs/core"
import "bootstrap"

// PWA support
import "./registerServiceWorker"

// App instance
createApp(App)
  .use(store)
  .use(router)
  .mount("#app")
