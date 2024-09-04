<script setup>
import logo from '@/assets/images/logo.png';
import background from '@/assets/images/background.svg';
import BaseInput from '@/components/input.vue';
import BaseButton from '@/components/button.vue';
import { ref } from 'vue';
import auth from '@/services/auth';
import { useRouter, useRoute } from 'vue-router';

const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const isLoading = ref(false);
const router = useRouter();
const route = useRoute();

const userId = route.params.id;
const forgotToken = route.params.forgotToken;

const handleSubmit = async () => {
  console.log(userId, forgotToken);

  try {
    errorMessage.value = '';
    isLoading.value = true;

    const data = await auth.reset(userId, forgotToken, {
      password: password.value,
      confirmPassword: confirmPassword.value,
    });

    router.push('/');
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Confirme seu E-mail por favor';
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div class="page-forgot">
    <div class="left-container">
      <div class="logo-container">
        <img v-bind:src="logo" alt="Logo da Vertigo nas cores roxa e preto" />
        <div class="text-content">
          <h1>Trocar minha senha</h1>
          <p><slot></slot></p>
        </div>
      </div>
      <main>
        <form @submit.prevent="handleSubmit">
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          <BaseInput
            label="Senha"
            id="password"
            type="password"
            placeholder="Sua senha aqui"
            v-model="password"
          />
          <BaseInput
            label="Confiirmar Senha"
            id="confirmPassword"
            type="password"
            placeholder="Confirme sua senha"
            v-model="confirmPassword"
          />
          <div class="form-action">
            <a href="/">Voltar para o login</a>
          </div>

          <BaseButton type="submit" :disabled="isLoading">
            <template v-if="isLoading">
              <span>Carregando...</span>
            </template>
            <template v-else>
              <span>Trocar senha</span>
            </template>
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

@media (min-width: 992px) {
  .page-forgot {
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
