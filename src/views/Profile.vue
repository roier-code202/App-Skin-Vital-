<template>
  <div class="profile">
    <h1>Mi cuenta</h1>
    <div v-if="firebaseUser">
      <img v-if="firebaseUser.photoURL" :src="firebaseUser.photoURL" alt="Foto de perfil" style="width:80px; border-radius:50%; margin-bottom:1rem;">
      <p><strong>Nombre:</strong> {{ firebaseUser.displayName }}</p>
      <p><strong>Email:</strong> {{ firebaseUser.email }}</p>
      <p><strong>Proveedor:</strong> {{ firebaseUser.provider }}</p>
    </div>
    <div v-else>
      <p>Bienvenido a tu perfil. Aquí puedes ver tu información y rutinas favoritas.</p>
    </div>
    <button class="main-btn" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {
      firebaseUser: null
    };
  },
  mounted() {
    const user = localStorage.getItem('firebaseUser');
    if (user) {
      this.firebaseUser = JSON.parse(user);
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('loggedIn');
      localStorage.removeItem('firebaseUser');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Solo estilos específicos, sin background ni color */
</style>