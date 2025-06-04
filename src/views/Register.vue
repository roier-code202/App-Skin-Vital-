<template>
  <div class="profile">
    <h1>Crear cuenta</h1>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required minlength="6" />
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
    };
  },
  methods: {
    register() {
      // Guardar usuario simulado en localStorage
      localStorage.setItem('user', JSON.stringify({
        email: this.email,
        password: this.password,
      }));
      alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
/* Usa los mismos estilos que Login.vue */
</style>