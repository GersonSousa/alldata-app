<script setup>
import auth from '@/services/auth';
import Cookies from 'js-cookie';
import { onMounted, ref } from 'vue';

// Cookies.set('your-cookie-name', 'cookie-value', { path: '/', secure: true, sameSite: 'Lax' });
const cookieName = 'token';

const cookieValue = Cookies.get(cookieName);

console.log('Valor do Cookie:', cookieValue);

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
