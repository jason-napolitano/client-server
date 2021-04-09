<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App"
})
</script>

<style lang="sass">
@import "assets/scss/app"
</style>
