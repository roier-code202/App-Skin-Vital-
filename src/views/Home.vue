<template>
  <div class="home">
    <h1>Consejos para el cuidado de la piel</h1>
    <button
      v-if="!user"
      class="profile-btn"
      @click="$router.push('/login')"
    >Iniciar sesión</button>
    <button
      v-else
      class="profile-btn"
      @click="$router.push('/profile')"
    >Mi perfil</button>
    <button class="quiz-btn" @click="$router.push('/quiz')">¿No sabes tu tipo de piel? Haz el cuestionario</button>
    <button class="add-btn" @click="$router.push('/add')">Agregar consejo</button>
    <SkincareTip v-for="tip in tips" :key="tip.id" :tip="tip" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SkincareTip from '@/components/SkincareTip.vue';

export default {
  name: 'Home',
  components: { SkincareTip },
  computed: {
    ...mapGetters(['allTips']),
    tips() {
      return this.allTips;
    },
    user() {
      return JSON.parse(localStorage.getItem('user'));
    },
  },
};
</script>

<style scoped>
.home {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem 0.5rem 2rem 0.5rem;
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
.quiz-btn {
  display: block;
  width: 100%;
  margin: 0 auto 1rem auto;
  background: #ffb347;
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.quiz-btn:hover {
  background: #e09e36;
}
.add-btn {
  display: block;
  width: 100%;
  margin: 0 auto 1.5rem auto;
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover {
  background: #369870;
}
.profile-btn {
  display: block;
  width: 100%;
  margin: 0 auto 1rem auto;
  background: #2980b9;
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.profile-btn:hover {
  background: #1c5a85;
}
@media (max-width: 600px) {
  .home {
    max-width: 100vw;
    border-radius: 0;
    box-shadow: none;
    padding: 0.5rem;
  }
  h1 {
    font-size: 1.1rem;
  }
}
</style>