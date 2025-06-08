<template>
  <div class="enhanced-home">
    <Logo />
    <h1>¿No sabes tu tipo de piel?</h1>
    
    <!-- Botones de navegación -->
    <button class="action-btn quiz-btn" @click="$router.push('/quiz')">
      {{ user ? 'Haz el cuestionario' : '¿No sabes tu tipo de piel? Haz el cuestionario' }}
    </button>
    
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import SkincareTip from '@/components/SkincareTip.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'EnhancedHome',
  components: { Logo, SkincareTip },
  data() {
    return {
      routines: [],
      loading: true,
      error: null,
    };
  },
  computed: {
    ...mapGetters(['allTips', 'savedTips']),
    user() {
      try {
        return JSON.parse(localStorage.getItem('user')) || null;
      } catch (e) {
        this.error = 'Error al cargar datos del usuario';
        return null;
      }
    },
    filteredTips() {
      // Ejemplo de filtrado: solo consejos con ID válido
      return this.allTips.filter(tip => tip.id && tip.content);
    },
  },
  created() {
    // Cargar rutinas desde localStorage con manejo de errores
    try {
      const storedRoutines = localStorage.getItem('routines');
      this.routines = storedRoutines ? JSON.parse(storedRoutines) : [];
    } catch (e) {
      this.error = 'Error al cargar rutinas';
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.enhanced-home {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 0.5rem 2rem 0.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 100vh;
}

.logo {
  display: block;
  margin: 2rem auto 1.5rem auto;
  max-width: 220px;
  width: 100%;
  height: auto;
}

h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h2 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
}

.action-btn {
  display: block;
  width: 100%;
  margin: 0.5rem auto;
  background: #B76E79; /* Color unificado (rosa del Profile) */
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.action-btn:hover {
  background: #FAD6C4;
  color: #B76E79;
}

.login-btn {
  background: #2980b9; /* Color azul para login, para diferenciar */
}

.login-btn:hover {
  background: #1c5a85;
  color: #fff;
}

.routines-section, .tips-section, .all-tips-section {
  margin-top: 2rem;
}

.loading, .error {
  text-align: center;
  color: #e74c3c;
  margin: 1rem 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

@media (max-width: 600px) {
  .enhanced-home {
    max-width: 100vw;
    border-radius: 0;
    box-shadow: none;
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.3rem;
  }

  h2 {
    font-size: 1.1rem;
  }
}
</style>