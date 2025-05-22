<template>
  <div class="calendar">
    <h1>Calendario de Rutinas</h1>
    <form @submit.prevent="addEvent">
      <input v-model="date" type="date" required />
      <input v-model="title" type="text" placeholder="Nombre de la rutina" required />
      <button type="submit">Agregar</button>
    </form>
    <ul>
      <li v-for="(event, i) in events" :key="i">
        <strong>{{ event.date }}</strong>: {{ event.title }}
        <button @click="removeEvent(i)">❌</button>
      </li>
    </ul>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data() {
    return {
      date: '',
      title: '',
      events: JSON.parse(localStorage.getItem('routineEvents') || '[]'),
    };
  },
  methods: {
    addEvent() {
      if (this.date && this.title) {
        this.events.push({ date: this.date, title: this.title });
        localStorage.setItem('routineEvents', JSON.stringify(this.events));
        this.date = '';
        this.title = '';
      }
    },
    removeEvent(index) {
      this.events.splice(index, 1);
      localStorage.setItem('routineEvents', JSON.stringify(this.events));
    },
  },
};
</script>

<style scoped>
.calendar {
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
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input[type="date"], input[type="text"] {
  flex: 1;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
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
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  background: #f7fafc;
  padding: 0.5rem;
  border-radius: 6px;
}
</style>