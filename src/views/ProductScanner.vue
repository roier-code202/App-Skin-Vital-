<template>
  <div class="scanner">
    <h1>Escanear producto</h1>
    <form @submit.prevent="checkProduct">
      <input v-model="barcode" type="text" placeholder="Escanea o ingresa el código de barras" required />
      <button type="submit">Buscar</button>
    </form>
    <div v-if="result">
      <h2>{{ result.name }}</h2>
      <p>Tipo de piel recomendado: <strong>{{ result.skinType }}</strong></p>
      <p>{{ result.desc }}</p>
      <p v-if="isCompatible" style="color: #27ae60;">¡Compatible con tu tipo de piel!</p>
      <p v-else style="color: #e74c3c;">No recomendado para tu tipo de piel.</p>
    </div>
    <div v-else-if="searched">
      <p>No se encontró el producto.</p>
    </div>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'ProductScanner',
  data() {
    return {
      barcode: '',
      result: null,
      searched: false,
      products: [
        { barcode: '123456', name: 'Gel Limpiador Oil-Free', skinType: 'Grasa', desc: 'Ideal para piel grasa y mixta.' },
        { barcode: '654321', name: 'Crema Hidratante Suave', skinType: 'Seca', desc: 'Hidratación profunda para piel seca.' },
        { barcode: '111222', name: 'Protector Solar Mineral', skinType: 'Sensible', desc: 'Protección suave para piel sensible.' },
      ],
    };
  },
  computed: {
    userSkinType() {
      // Simulación: obtiene el último resultado de cuestionario
      const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
      return history.length ? history[history.length - 1].type : '';
    },
    isCompatible() {
      return this.result && this.result.skinType === this.userSkinType;
    },
  },
  methods: {
    checkProduct() {
      this.result = this.products.find(p => p.barcode === this.barcode.trim());
      this.searched = true;
    },
  },
};
</script>

<style scoped>
.scanner {
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
input[type="text"] {
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
</style>