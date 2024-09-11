<script setup>
const inputs = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
});

const inputEmit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="input-block">
    <label :for="inputs.id"> {{ inputs.label }}</label>
    <input
      :id="inputs.id"
      :type="inputs.type"
      :placeholder="inputs.placeholder"
      :value="inputs.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>

<style scoped>
.input-block {
  margin-bottom: 1rem;
}
.input-block label {
  font-size: 1.4rem;
  color: var(--color-text-complement);
}

.input-block input {
  width: 100%;
  height: 4.6rem;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  outline: 0;
  padding: 0 1.6rem;
  font: 1.4rem Titillium Web;
}

.input-block {
  position: relative;
}

.input-block:focus-within::after {
  content: '';

  width: calc(100% - 3.2rem);
  height: 2px;
  background: var(--color-primary-light);
  position: absolute;
  left: 1.6rem;
  bottom: 0px;
}
</style>
