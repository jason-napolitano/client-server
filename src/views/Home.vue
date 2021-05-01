<template>
  <div class="col-md-2"></div>
  <div class="col-md-8 text-center">
    <HelloWorldComp v-if="isCompositionHome" />
  </div>
  <div class="col-md-2"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue"
// @ is an alias to /src
import HelloWorldComp from "@/components/HelloWorld.vue"

export default defineComponent({
  components: { HelloWorldComp },
  setup() {
    const state = reactive({
      isCompositionHome: true
    })

    return { ...toRefs(state) }
  }
})
</script>
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
