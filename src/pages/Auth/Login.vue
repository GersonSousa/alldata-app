<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AuthService from '@/services/AuthService';

import logo from '@/assets/images/logo.png';
import background from '@/assets/images/background.svg';
import BaseInput from '@/components/input.vue';
import BaseButton from '@/components/button.vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const router = useRouter();

const Handlelogin = async () => {
  try {
    errorMessage.value = '';
    isLoading.value = true;
    const user = await AuthService.login({ email: email.value, password: password.value });
    router.push('/home');
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Falha no login. Por favor verifique seu e-mail e senha.';
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="page-login">
    <div class="left-container">
      <div class="logo-container">
        <img :src="logo" alt="Logo da Vertigo nas cores roxa e preto" />
        <div class="text-content">
          <h1>Acesse sua conta</h1>
          <p>Gerencie todos os nossos serviços.</p>
        </div>
      </div>
      <main>
        <form @submit.prevent="Handlelogin">
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <BaseInput
            label="Email"
            id="email"
            type="email"
            placeholder="Seu e-mail aqui"
            v-model="email"
          />
          <BaseInput
            label="Senha"
            id="password"
            type="password"
            placeholder="Sua senha aqui"
            v-model="password"
          />
          <div class="form-action">
            <a href="/forgot" class="forgot-password">Esqueceu a senha?</a>
          </div>
          <BaseButton type="submit" :disabled="isLoading">
            <template v-if="isLoading">Carregando...</template>
            <template v-else>Entrar</template>
          </BaseButton>
        </form>
      </main>
    </div>
    <div class="right-container">
      <img v-bind:src="background" alt="imagem de fundo na cor roxa, no lado direito da tela" />
    </div>
  </div>
</template>
<style scoped>
.left-container {
  padding: 4rem 8rem;
  overflow: scroll;
  overflow-x: hidden;
  height: 100vh;
}

.logo-container img {
  height: 3rem;
}

.logo-container h1 {
  margin-top: 5rem;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 5.5rem;
}

form {
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;
}

.password-block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.6rem;
}

.right-container {
  display: none;
  overflow: hidden;
}

a {
  display: flex;
  justify-content: start;
}

@media (min-width: 991px) {
  .page-login {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .left-container::-webkit-scrollbar {
    display: none;
  }

  .right-container {
    display: block;
    height: 100vh;
    width: 100%;
  }

  .right-container img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
