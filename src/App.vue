<template>
  <main id="app" class="container">
    <section class="row">
      <router-view />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "App"
})
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
