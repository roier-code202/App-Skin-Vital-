<template>
  <div class="about">
    <h1>Acerca de nosotros</h1>
    <p>
      Esta aplicación fue creada para ayudarte a cuidar tu piel de manera personalizada y sencilla.
      Nuestro objetivo es brindarte rutinas, consejos y herramientas útiles para tu bienestar diario.
    </p>
    <h2>Equipo</h2>
    <ul>
      <li>Roger - Desarrollador</li>
      <li>Cristian - Diseño</li>
      <li>Diego - Desarrollador</li>
      <li>Berta - Diseño</li>
      <li>Andromeda - Diseño</li>
      <li>Luis - Diseño</li>

    </ul>
    <h2>Contacto</h2>
    <p>¿Tienes dudas o sugerencias? Escríbenos a <a href="mailto:soporte@skincareapp.com">soporte@skincareapp.com</a></p>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
.about {
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
h2 {
  margin-top: 1.2rem;
  color: #42b983;
}
ul {
  margin: 0 0 1rem 1.2rem;
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