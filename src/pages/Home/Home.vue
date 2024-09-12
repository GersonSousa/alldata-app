<script setup>
import userService from '@/services/users';
import { ref } from 'vue';

const users = ref([]);

async function fetchUsers() {
  try {
    users.value = await userService.getUsers();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();
</script>
<template>
  <pre>{{ users }}</pre>
</template>
<style scoped></style>
