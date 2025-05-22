<template>
  <div class="profile">
    <div v-if="!online" class="offline-msg">
      <strong>Estás sin conexión. Solo puedes ver tus rutinas favoritas guardadas.</strong>
    </div>
    <h1>Mi Perfil</h1>
    <div v-if="user">
      <p><strong>Correo:</strong> {{ user.email }}</p>
      <button @click="logout">Cerrar sesión</button>
    </div>
    <h2>Mis Favoritos</h2>
    <div v-if="favorites.length === 0">
      <p>No tienes rutinas favoritas aún.</p>
    </div>
    <div v-else>
      <SkincareTip v-for="tip in favorites" :key="tip.id" :tip="tip" />
    </div>
    <h2>Historial de cuestionarios</h2>
    <div v-if="quizHistory.length === 0">
      <p>No has realizado ningún cuestionario aún.</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="(item, i) in quizHistory" :key="i">
          {{ item.date }} - <strong>{{ item.type }}</strong>
        </li>
      </ul>
      <button @click="exportHistory">Exportar historial</button>
    </div>
    <button @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SkincareTip from '@/components/SkincareTip.vue';

export default {
  name: 'Profile',
  components: { SkincareTip },
  data() {
    return {
      online: navigator.onLine,
    };
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem('user'));
    },
    ...mapGetters(['favorites']),
    quizHistory() {
      return JSON.parse(localStorage.getItem('quizHistory') || '[]');
    },
  },
  created() {
    window.addEventListener('online', this.updateOnline);
    window.addEventListener('offline', this.updateOnline);
  },
  beforeUnmount() {
    window.removeEventListener('online', this.updateOnline);
    window.removeEventListener('offline', this.updateOnline);
  },
  methods: {
    updateOnline() {
      this.online = navigator.onLine;
    },
    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    },
    exportHistory() {
      const data = JSON.stringify(this.quizHistory, null, 2);
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'historial-cuestionarios.json';
      a.click();
      URL.revokeObjectURL(url);
    },
  },
};
</script>

<style scoped>
.profile {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  min-height: 100vh;
}
h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
button {
  display: block;
  margin: 2rem auto 0 auto;
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #369870;
}
.offline-msg {
  background: #ffe0b2;
  color: #b26a00;
  padding: 0.7rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  text-align: center;
}
</style>

<!-- En Home.vue, dentro del template -->
<button
  v-if="!user"
  class="profile-btn"
  @click="$router.push('/login')"
>Iniciar sesión</button>
<button
  v-else
  class="profile-btn"
  @click="$router.push('/profile')"
>Mi perfil</button>