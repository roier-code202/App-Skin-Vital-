<template>
  <div class="settings">
    <h1>Configuración</h1>
    <label>
      <input type="checkbox" v-model="notifications" @change="saveSetting" />
      Recibir notificaciones de nuevas rutinas
    </label>
    <label>
      <input type="checkbox" v-model="darkMode" @change="toggleTheme" />
      Modo oscuro
    </label>
    <button @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      notifications: JSON.parse(localStorage.getItem('notifications') || 'true'),
      darkMode: JSON.parse(localStorage.getItem('darkMode') || 'false'),
    };
  },
  mounted() {
    this.applyTheme();
  },
  methods: {
    saveSetting() {
      localStorage.setItem('notifications', JSON.stringify(this.notifications));
    },
    toggleTheme() {
      localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
      this.applyTheme();
    },
    applyTheme() {
      if (this.darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },
  },
};
</script>

<style scoped>
.settings {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 1.3rem;
}
label {
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
button {
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
body.dark {
  background: #181818 !important;
  color: #f7fafc !important;
}
body.dark .profile,
body.dark .settings,
body.dark .calendar,
body.dark .add-tip,
body.dark .quiz {
  background: #232323 !important;
  color: #f7fafc !important;
}
body.dark input,
body.dark textarea {
  background: #333 !important;
  color: #f7fafc !important;
  border-color: #444 !important;
}
body.dark button {
  background: #333 !important;
  color: #fff !important;
}

</style>