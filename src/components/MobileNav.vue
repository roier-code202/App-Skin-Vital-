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
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: #222;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem 0;
  z-index: 100;
}
.mobile-nav button {
  background: none;
  border: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #aaa;
  font-size: 1.2rem;
  padding: 0.3rem 0;
  cursor: pointer;
  transition: color 0.2s;
}
.mobile-nav button.active,
.mobile-nav button:hover {
  color: #42b983;
}
.mobile-nav small {
  font-size: 0.8rem;
}
@media (min-width: 700px) {
  .mobile-nav {
    display: none;
  }
}
</style>