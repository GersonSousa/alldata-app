<script setup>
import logoBranca from '@/assets/images/Single.png';
import 'primeicons/primeicons.css';
</script>
<template>
  <aside>
    <div class="logo-content">
      <img :src="logoBranca" alt="Logo Branca" />
    </div>
    <ul>
      <li>
        <i class="pi pi-home" />
        <p>Home</p>
      </li>
      <li>
        <i class="pi pi-info-circle" />
        <p>About</p>
      </li>
      <li>
        <i class="pi pi-calendar" />
        <p>Services</p>
      </li>
      <li>
        <i class="pi pi-envelope" />
        <p>Contact</p>
      </li>
    </ul>
    <div class="profile-content">
      <div id="profile">
        <div id="profile-info">
          <div id="user-photo">
            <img
              src="https://avatars.githubusercontent.com/u/33321518?v=4&size=64"
              alt="User photo"
            />
          </div>
          <div id="text">
            <p class="profile-name">Antonio Gerson de Sousa Silva</p>
            <p class="profile-email">agerson3@gmail.com</p>
            <p class="profile-job">Web Developer</p>
          </div>
        </div>
      </div>
      <button class="logout">
        <i class="pi pi-sign-out" />
      </button>
    </div>
  </aside>
</template>
<style scoped>
aside {
  min-height: 100%;
  position: absolute;
  background-color: var(--color-primary);
  text-align: center;
  transition: all 1s ease-out;
}

.logo-content img {
  width: 4rem;
  margin-bottom: 4rem;
  margin: 2rem;
}

aside ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
}

aside ul li {
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  margin-top: 2rem;
  cursor: pointer;
  padding: 1rem 1.2rem;
  color: #ffffff;
}

aside ul li:hover {
  border-radius: 0.4rem;
  background-color: var(--color-primary-dark);
}
aside ul li p {
  margin-right: 1rem;
  display: none;
}

.profile-content {
  position: absolute;
  margin-top: auto;
  bottom: 0 !important;
  background-color: var(--color-primary-dark);
  text-align: center;
  padding: 2rem;
  width: 100%;
}

#profile {
  display: none;
}

.logout {
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-top: 1rem;
}

.logout i {
  font-size: 2.2rem;
  color: #ffffff;
  background-color: unset;
}

@media (min-width: 700px) {
  aside {
    width: 28rem;
    text-align: center;
    position: relative;
    transition: all 1s ease-out;
  }
  .logo-content img {
    width: 6rem;
    margin-bottom: 4rem;
  }
  aside ul {
    position: relative;
    display: block;
  }
  aside ul li {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
  }
  aside ul li p {
    margin-left: 1rem;
    display: block;
    font-size: 1.5rem;
  }

  .profile-content {
    position: absolute;
    margin-top: 5rem;
    bottom: 0 !important;
    background-color: var(--color-primary-dark);
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #profile {
    display: block;
  }
  #profile-info {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #ffffff;
    gap: 1rem;
    text-wrap: pretty;
  }

  #profile-info img {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
  }

  .logout{
    margin-left: 1.5rem;
  }
}
</style>
