<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <p class="lead">{{ msg }}</p>
  <hr />
  <div class="alert lead">
    Get all data from the NodeJS API, and send it to the <code>console</code>
  </div>
  <div>
    <span class="bi bi-arrow-down"></span>
  </div>
  <div>
    <button class="btn btn-sm bg-dark text-light" @click="getAllData">Check it out!</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import notify from "@/utils/notifications"
import axios from "@/utils/axios"

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: false,
      default: "Welcome to your Vue 3 + TypeScript app"
    }
  },
  setup() {
    const data = axios.get("http://localhost:4900")

    const getAllData = async () => {
      await data
        .then(response => response.data)
        .then(data => console.table(data))
        .then(() => notify())
        .catch(err => console.error(err))
    }

    return {
      getAllData
    }
  }
})
</script>
