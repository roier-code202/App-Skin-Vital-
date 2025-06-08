<template>
  <div class="articles">
    <h1>Artículos sobre el cuidado de la piel</h1>
    <div class="categories">
      <button
        v-for="cat in categories"
        :key="cat"
        :class="{ active: selected === cat }"
        @click="selected = cat"
      >
        {{ cat }}
      </button>
    </div>
    <div v-for="article in filteredArticles" :key="article.title" class="article">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
    </div>
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
  border-radius: 10px;
  min-height: 100vh;
}
h1 {
  text-align: center;
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
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
}
.categories button.active {
  font-weight: bold;
  text-decoration: underline;
}
.article {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
}
</style>