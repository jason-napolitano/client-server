<template>
  <main id="Collapse">
    <div class="items">
      <details :open="open">
        <summary>{{ label }}</summary>
        {{ text }}
      </details>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Collapse',
  props: {
    label: {
      type: String,
      default: 'More Info'
    },
    text: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

.items {
  padding: 1.5rem;
  details {
    border: 1px solid #ddd;
    background: #fff;
    margin-bottom: 1.5rem;
    border-radius: 0.35rem;
    //box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    //0 10px 10px -5px rgba(0, 0, 0, 0.04);

    summary {
      cursor: pointer;
      padding: 1rem;
      border-bottom: 1px solid #ddd;
    }
    div {
      padding: 1rem 1.5rem;
    }
  }
}
</style>
