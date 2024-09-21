<script setup>
import { ref, onMounted } from 'vue';
import UsersService from '@/services/UsersService';

const users = ref([]);

const AllUsers = async () => {
  try {
    users.value = await UsersService.users();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

onMounted(() => AllUsers());
</script>
<template>
  <h1>Home</h1>
  <pre>
    {{ users }}
  </pre>
</template>
<style scoped></style>
