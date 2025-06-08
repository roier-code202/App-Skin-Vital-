<template>
  <div class="profile">
    <h1>Crear cuenta</h1>
    <form @submit.prevent="register">
      <label for="email">Correo electrónico</label>
      <input id="email" v-model="email" type="email" placeholder="Correo electrónico" required />
      <label for="password">Contraseña</label>
      <input id="password" v-model="password" type="password" placeholder="Contraseña" required minlength="6" />
      <div v-if="errorMsg" role="alert" class="error-msg">{{ errorMsg }}</div>
      <button type="submit" class="main-btn">Registrarse</button>
    </form>
    <button class="link-btn" @click="$router.push('/login')">Ya tengo cuenta</button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    };
  },
  methods: {
    register() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.email === this.email) {
        this.errorMsg = 'Ya existe una cuenta con ese correo.';
        return;
      }
      localStorage.setItem('user', JSON.stringify({
        email: this.email,
        password: this.password,
      }));
      this.errorMsg = '';
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Usa los mismos estilos que Login.vue */
</style>