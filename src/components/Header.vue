<script setup>
import logo from '@/assets/images/LogoBranca.png';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const user = ref({
  name: 'Antonio Gerson de Sousa Silva',
  email: 'antonio.silva@allrede.com.br',
  avatar: 'https://avatars.githubusercontent.com/u/33321518?v=4&size=64',
});

const profileLink = '/profile';
const router = useRouter();

const isOpen = ref(false);
const dropdownRef = ref(null);
const profileButtonRef = ref(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function logout() {
  // Lógica de logout
  console.log('Logging out...');
  // Redirecionar para a página de login após o logout
  router.push('/');
}

function handleClickOutside(event) {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target) &&
    !profileButtonRef.value.contains(event.target)
  ) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <header>
    <div class="top-bar-container">
      <router-link to="/home">
        <img :src="logo" alt="logo" />
      </router-link>
      <div class="profile-dropdown" ref="profileButtonRef" @click="toggleDropdown">
        <button class="profile-button">
          <div class="profile-content">
            <p class="username">{{ user.name }}</p>
            <span class="username">{{ user.email }}</span>
          </div>
          <img :src="user.avatar" alt="" />
        </button>
      </div>
      <div v-if="isOpen" class="dropdown-menu" ref="dropdownRef">
        <router-link :to="profileLink" class="dropdown-item">Perfil</router-link>
        <a href="#" @click.prevent="logout" class="dropdown-item">Sair</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--color-primary);
  display: flex;
  flex-direction: column;
}

.top-bar-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  height: 9rem;
}

.top-bar-container a {
  height: 3.2rem;
  transition: opacity 0.2s;
}

.top-bar-container a:hover {
  opacity: 0.6;
}

.top-bar-container img {
  height: 3rem;
}

.profile-dropdown {
  position: relative;
  display: inline-block;
}

.profile-button {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.profile-button img {
  height: 4.4rem;
  border-radius: 50%;
  border: 2px solid var(--color-button-text);
  margin-left: 2rem;
}

.profile-content {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  color: var(--color-button-text);
  text-align: right;
}

.profile-content p {
  font: 600 1.6rem Titillium Web;
}

.profile-content span {
  font: 500 1.3rem Titillium Web;
}

.dropdown-menu {
  display: block;
  position: absolute;
  top: 8.5rem;
  right: 7rem;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 20rem;
  z-index: 1000;
  border-radius: 1rem;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 1.3rem 2rem;
  text-decoration: none;
}

.dropdown-item:hover {
  background: #f0f0f0;
  color: var(--color-primary);
  border-radius: 1rem;
}
</style>
