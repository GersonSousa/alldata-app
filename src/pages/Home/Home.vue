<script setup>
import userService from '@/services/users';
import { ref, onMounted } from 'vue';

const users = ref('');

async function fetchUsers() {
  try {
    const response = await userService.getUsers();
    users.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
}

onMounted(fetchUsers);
</script>
<template>
  <pre>{{ users }}</pre>
</template>
<style scoped></style>
