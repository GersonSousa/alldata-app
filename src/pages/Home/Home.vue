<script setup>
import Header from '@/components/Header.vue';
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
  <Header />
  <pre>{{ home }}</pre>
</template>
<style scoped></style>
