<script setup>
import users from '@/services/users';
import { ref } from 'vue';

const users = ref('');

async function fetchUsers() {
  const response = await users.getUsers();
  users.value = response.data;
}

fetchUsers();
</script>
<template>
  <pre>{{ users }}</pre>
</template>
<style scoped></style>
