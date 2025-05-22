<template>
  <div class="articles">
    <h1>Artículos sobre el cuidado de la piel</h1>
    <div class="categories">
      <button v-for="cat in categories" :key="cat" @click="selected = cat" :class="{active: selected === cat}">
        {{ cat }}
      </button>
    </div>
    <div v-if="filteredArticles.length === 0">
      <p>No hay artículos para esta categoría.</p>
    </div>
    <div v-else>
      <div v-for="art in filteredArticles" :key="art.title" class="article">
        <h2>{{ art.title }}</h2>
        <p>{{ art.content }}</p>
      </div>
    </div>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data() {
    return {
      selected: 'Todos',
      categories: ['Todos', 'Grasa', 'Seca', 'Normal', 'Mixta', 'Sensible', 'Madura'],
      articles: [
        { title: 'Rutina básica para piel grasa', category: 'Grasa', content: 'Limpia tu rostro dos veces al día y usa productos oil-free.' },
        { title: 'Cómo hidratar la piel seca', category: 'Seca', content: 'Utiliza cremas ricas en ingredientes humectantes y evita jabones agresivos.' },
        { title: 'Cuidados para piel sensible', category: 'Sensible', content: 'Prefiere productos hipoalergénicos y sin fragancia.' },
        { title: 'Consejos para piel mixta', category: 'Mixta', content: 'Usa productos diferentes para la zona T y las mejillas.' },
        { title: 'Rutina antiedad para piel madura', category: 'Madura', content: 'Incluye antioxidantes y protector solar diario.' },
        { title: 'Rutina equilibrada para piel normal', category: 'Normal', content: 'Mantén una limpieza suave y una hidratación ligera.' },
      ],
    };
  },
  computed: {
    filteredArticles() {
      if (this.selected === 'Todos') return this.articles;
      return this.articles.filter(a => a.category === this.selected);
    },
  },
};
</script>

<style scoped>
.articles {
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
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  justify-content: center;
}
.categories button {
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.categories button.active,
.categories button:hover {
  background: #42b983;
  color: #fff;
}
.article {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 6px;
}
.back {
  background: #2980b9;
  color: #fff;
  margin-top: 1rem;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
.back:hover {
  background: #1c5a85;
}
</style>