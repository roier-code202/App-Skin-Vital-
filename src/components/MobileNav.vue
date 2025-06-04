<template>
  <nav class="mobile-nav">
    <button @click="$router.push('/')" :class="{ active: isActive('/') }">
      <span>🏠</span>
      <small>Inicio</small>
    </button>
    <button @click="$router.push('/articles')" :class="{ active: isActive('/articles') }">
      <span>📚</span>
      <small>Artículos</small>
    </button>
    <button @click="$router.push('/profile')" :class="{ active: isActive('/profile') }">
      <span>👤</span>
      <small>Mi cuenta</small>
    </button>
    <button @click="$router.push('/settings')" :class="{ active: isActive('/settings') }">
      <span>⚙️</span>
      <small>Config</small>
    </button>
    <button @click="$router.push('/about')" :class="{ active: isActive('/about') }">
      <span>ℹ️</span>
      <small>Acerca de</small>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'MobileNav',
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&display=swap');

.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #FFF8F0; /* Marfil */
  border-top: 2px solid #B76E79; /* Dorado Rosado */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 0;
  z-index: 100;
  font-family: 'Montserrat', Arial, sans-serif;
  box-shadow: 0 -2px 12px 0 #fad6c4cc;
}
.mobile-nav button {
  background: none;
  border: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5C4033; /* Marrón Nude */
  font-size: 1.2rem;
  padding: 0.3rem 0;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
  font-family: 'Montserrat', Arial, sans-serif;
  border-radius: 10px 10px 0 0;
}
.mobile-nav button.active,
.mobile-nav button:hover {
  color: #B76E79; /* Dorado Rosado */
  background: #F8E1E7; /* Rosa Palo */
}
.mobile-nav span {
  font-size: 1.4rem;
}
.mobile-nav small {
  font-size: 0.85rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
}
@media (min-width: 700px) {
  .mobile-nav {
    display: none;
  }
}
</style>