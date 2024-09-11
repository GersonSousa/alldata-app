<script setup>
const button = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  class: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <button :type="button.type" :class="['base-button', button.class]">
    <slot></slot>
  </button>
</template>
<style scoped>
.base-button {
  font: 600 1.6rem Titillium Web;
  color: var(--color-button-text);
  background: var(--color-primary);
  cursor: pointer;
  border: none;
  height: 6rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
}
.base-button:hover {
  background: var(--color-primary-darker);
}
</style>
