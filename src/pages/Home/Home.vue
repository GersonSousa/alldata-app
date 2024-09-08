<script setup>
import auth from '@/services/auth';

import { onMounted, ref } from 'vue';

const home = ref('');

const fetchHome = async () => {
  try {
    home.value = await auth.home();
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchHome();
});
</script>
<template>
  <h1>Home</h1>
  <pre>{{ home }}</pre>
</template>
<style scoped></style>
