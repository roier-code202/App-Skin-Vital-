<template>
  <div class="profile">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit" class="main-btn">Entrar</button>
    </form>
    <button class="social-btn google">
      <span class="icon">
        <!-- Google SVG -->
        <svg width="22" height="22" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 33.8 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5 12.7 2.5 3.5 11.7 3.5 23S12.7 43.5 24 43.5c10.5 0 20-8.5 20-20 0-1.3-.1-2.7-.5-3.5z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.2 17.1 19.2 14 24 14c3.1 0 6 .9 8.3 2.7l6.2-6.2C34.6 4.5 29.6 2.5 24 2.5c-7.2 0-13 5.8-13 13 0 2.1.5 4.1 1.3 5.7z"/><path fill="#FBBC05" d="M24 43.5c5.8 0 10.7-1.9 14.3-5.2l-6.6-5.4C29.9 34.8 27.1 36 24 36c-5.7 0-10.5-3.8-12.2-9l-7 5.4C7.2 39.1 14.9 43.5 24 43.5z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.2 3.2-4.1 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2.1l-7 5.4C17.5 41.2 20.6 43.5 24 43.5c10.5 0 20-8.5 20-20 0-1.3-.1-2.7-.5-3.5z"/></g></svg>
      </span>
      Iniciar sesión con Google
    </button>
    <button class="social-btn facebook">
      <span class="icon">
        <!-- Facebook SVG -->
        <svg width="22" height="22" viewBox="0 0 32 32"><path fill="#fff" d="M29 0H3C1.3 0 0 1.3 0 3v26c0 1.7 1.3 3 3 3h13V20h-4v-5h4v-3.6C16 7.9 18.4 6 21.7 6c1.3 0 2.6.1 2.9.2v4h-2c-1.6 0-2 .8-2 2v3h4l-1 5h-3v12h6c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z"/></svg>
      </span>
      Iniciar sesión con Facebook
    </button>
    <button class="social-btn apple">
      <span class="icon">
        <!-- Apple SVG -->
        <svg width="22" height="22" viewBox="0 0 24 24"><path fill="#fff" d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.04 0-.08 0-.12-.01-.02-.04-.03-.09-.03-.14 0-1.13.92-2.05 2.05-2.05.05 0 .09.01.13.02.02.04.03.09.03.14zm3.57 6.47c-1.13-1.36-2.8-1.52-3.36-1.52-.16 0-.32.01-.46.03-.44.06-.85.13-1.22.13-.38 0-.8-.07-1.3-.14-.33-.05-.7-.1-1.1-.1-.98 0-2.39.23-3.52 1.68-1.29 1.62-1.07 4.61.99 7.29.74.97 1.62 2.06 2.8 2.06.36 0 .62-.1.89-.2.25-.09.51-.19.85-.19.33 0 .57.09.81.18.25.09.5.18.85.18 1.18 0 2.01-1.09 2.75-2.06.48-.63.84-1.23 1.09-1.7-1.01-.39-1.77-1.36-1.77-2.5 0-1.36 1.1-2.47 2.46-2.47.02 0 .04 0 .06.01-.02-.05-.04-.09-.07-.13zm-2.6-3.13c.38-.46.64-1.1.57-1.74-.55.02-1.21.37-1.6.83-.35.41-.67 1.07-.55 1.7.59.05 1.2-.3 1.58-.79z"/></svg>
      </span>
      Iniciar sesión con Apple
    </button>
    <button class="link-btn" @click="$router.push('/register')">Crear cuenta</button>
    <button class="main-btn" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        alert('No existe una cuenta registrada. Por favor, regístrate primero.');
        this.$router.push('/register');
        return;
      }
      if (user.email === this.email && user.password === this.password) {
        localStorage.setItem('loggedIn', 'true');
        alert('¡Bienvenido!');
        this.$router.push('/profile');
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    },
  },
};
</script>

<style scoped>
.profile {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem 1rem;
  border-radius: 14px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  margin-bottom: 0.3rem;
}
.main-btn {
  width: 100%;
  margin-bottom: 1rem;
}
.social-btn {
  width: 100%;
  margin-bottom: 0.7rem;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: flex-start;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.social-btn .icon {
  display: flex;
  align-items: center;
  margin-right: 0.7rem;
}
.google {
  background: #d44638;
  color: #fff;
}
.facebook {
  background: #4267B2;
  color: #fff;
}
.apple {
  background: #222;
  color: #fff;
}
.link-btn {
  width: 100%;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1rem;
}
@media (max-width: 700px) {
  .profile {
    margin: 1rem 0.2rem;
    padding: 1rem 0.5rem;
  }
}
</style>