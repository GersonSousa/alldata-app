<script setup>
import { ref, onMounted } from 'vue';
import UsersService from '@/services/UsersService';
import Header from '@/components/Header.vue';

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
  <Header />
  <pre>
    {{ users }}
  </pre>
</template>
<style scoped></style>
