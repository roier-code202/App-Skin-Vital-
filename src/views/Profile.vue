<template>
  <div class="profile">
    <h1>Mi cuenta</h1>
    <p>Bienvenido a tu perfil. Aquí puedes ver tu información y rutinas favoritas.</p>
    <button class="main-btn" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    logout() {
      localStorage.removeItem('loggedIn');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Solo estilos específicos, sin background ni color */
</style>