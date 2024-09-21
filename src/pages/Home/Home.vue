<script setup>
import { ref, onMounted } from 'vue';
import UsersService from '@/services/UsersService';

const users = ref();

const AllUsers = async () => {
  try {
    users.value = await UsersService.users();
    console.log(users.value);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

onMounted(() => AllUsers());
</script>
<template>
  <h1>Home</h1>
</template>
<style scoped></style>
