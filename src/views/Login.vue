<template>
  <div class="login">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <div v-if="error" class="error">{{ error }}</div>
      <button type="submit">Entrar</button>
    </form>
    <div class="social-login">
      <button class="google" @click="loginWith('Google')">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" /> Iniciar sesión con Google
      </button>
      <button class="facebook" @click="loginWith('Facebook')">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" /> Iniciar sesión con Facebook
      </button>
      <button class="apple" @click="loginWith('Apple')">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" /> Iniciar sesión con Apple
      </button>
    </div>
    <button class="forgot" @click="forgotPassword">Olvidé mi contraseña</button>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      // Simulación de usuario (para MVP)
      const user = { email: 'usuario@demo.com', password: '123456' };
      if (this.email === user.email && this.password === user.password) {
        localStorage.setItem('user', JSON.stringify({ email: this.email }));
        this.$router.push('/profile');
      } else {
        this.error = 'Correo o contraseña incorrectos';
      }
    },
    forgotPassword() {
      alert('Funcionalidad de recuperación de contraseña próximamente.');
    },
    loginWith(provider) {
      // Simulación de login social
      localStorage.setItem('user', JSON.stringify({ email: provider + '@social.com', provider }));
      this.$router.push('/profile');
    },
  },
};
</script>

<style scoped>
.login {
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
input {
  font-size: 1rem;
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 6px;
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
.forgot {
  background: #e0e0e0;
  color: #333;
  margin-top: 0.5rem;
}
.back {
  background: #2980b9;
  color: #fff;
  margin-top: 0.5rem;
}
.error {
  color: #e74c3c;
  font-size: 0.95rem;
  text-align: center;
}
.social-login {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: 1rem 0;
}
.social-login button {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  padding: 0.7rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: #fff;
  transition: background 0.2s;
}
.social-login .google {
  background: #db4437;
}
.social-login .facebook {
  background: #4267B2;
}
.social-login .apple {
  background: #222;
}
.social-login img {
  width: 22px;
  height: 22px;
}
</style>