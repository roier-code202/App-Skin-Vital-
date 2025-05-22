<template>
  <div class="add-tip">
    <h1>Agregar consejo</h1>
    <form @submit.prevent="submitTip">
      <input v-model="title" type="text" placeholder="Título" required />
      <textarea v-model="description" placeholder="Descripción" required></textarea>
      <button type="submit">Agregar</button>
    </form>
    <button class="back" @click="$router.push('/')">Volver</button>
    <button @click="$router.push('/settings')" :class="{ active: isActive('/settings') }">
      <span>⚙️</span>
      <small>Config</small>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AddTip',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    submitTip() {
      if (this.title && this.description) {
        this.$store.dispatch('addTip', {
          title: this.title,
          description: this.description,
        });
        // Notificación simulada
        if (JSON.parse(localStorage.getItem('notifications') || 'true')) {
          alert('¡Nueva rutina agregada! 🎉');
        }
        this.title = '';
        this.description = '';
        this.$router.push('/');
      }
    },
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.add-tip {
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
form {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
input, textarea {
  font-size: 1rem;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: none;
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
.back {
  background: #e0e0e0;
  color: #333;
  margin-top: 0.5rem;
}
</style>