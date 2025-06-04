<template>
  <div class="login card">
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="login">
      <label for="email">Correo electrónico</label>
      <input id="email" v-model="email" type="email" placeholder="Correo electrónico" required />
      <label for="password">Contraseña</label>
      <input id="password" v-model="password" type="password" placeholder="Contraseña" required />
      <div v-if="errorMsg" role="alert" class="error-msg">{{ errorMsg }}</div>
      <button type="submit" class="main-btn">Entrar</button>
    </form>
    <div class="social-login">
      <button @click="loginWithGoogle" class="social-btn google">Entrar con Google</button>
      <button @click="loginWithFacebook" class="social-btn facebook">Entrar con Facebook</button>
      <button @click="loginWithApple" class="social-btn apple">Entrar con Apple</button>
    </div>
    <button class="link-btn" @click="$router.push('/register')">Crear cuenta</button>
    <button class="main-btn" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    };
  },
  methods: {
    login() {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        this.errorMsg = 'No existe una cuenta registrada. Por favor, regístrate primero.';
        this.$router.push('/register');
        return;
      }
      if (user.email === this.email && user.password === this.password) {
        localStorage.setItem('loggedIn', 'true');
        this.errorMsg = '';
        this.$router.push('/profile');
      } else {
        this.errorMsg = 'Correo o contraseña incorrectos.';
      }
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        // Guarda el usuario en localStorage
        const user = result.user;
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('firebaseUser', JSON.stringify({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          provider: user.providerId
        }));
        this.$router.push("/profile");
      } catch (e) {
        this.errorMsg = "Error con Google: " + e.message;
      }
    },
    async loginWithFacebook() {
      const provider = new FacebookAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        this.$router.push("/profile");
      } catch (e) {
        this.errorMsg = "Error con Facebook: " + e.message;
      }
    },
    async loginWithApple() {
      const provider = new OAuthProvider("apple.com");
      try {
        await signInWithPopup(auth, provider);
        this.$router.push("/profile");
      } catch (e) {
        this.errorMsg = "Error con Apple: " + e.message;
      }
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1.5rem 1rem;
  border-radius: 14px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}
input {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  margin-bottom: 0.3rem;
}
.main-btn {
  width: 100%;
  margin-bottom: 1rem;
}
.social-login {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1rem;
}
.social-btn {
  width: 100%;
  padding: 0.7rem 1rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: flex-start;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.social-btn .icon {
  display: flex;
  align-items: center;
  margin-right: 0.7rem;
}
.google {
  background: #d44638;
  color: #fff;
}
.facebook {
  background: #4267B2;
  color: #fff;
}
.apple {
  background: #222;
  color: #fff;
}
.link-btn {
  width: 100%;
  background: #444;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1rem;
}
.error-msg {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
@media (max-width: 700px) {
  .login {
    margin: 1rem 0.2rem;
    padding: 1rem 0.5rem;
  }
}
</style>