<template>
  <div class="chat">
    <h1>Soporte en línea</h1>
    <div class="chat-window">
      <div v-for="(msg, i) in messages" :key="i" :class="msg.from">
        <span>{{ msg.text }}</span>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="chat-form">
      <input v-model="input" type="text" placeholder="Escribe tu mensaje..." required autocomplete="off" />
      <button type="submit">Enviar</button>
    </form>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'SupportChat',
  data() {
    return {
      input: '',
      messages: JSON.parse(localStorage.getItem('supportChat') || '[]'),
    };
  },
  methods: {
    sendMessage() {
      if (!this.input.trim()) return;
      this.messages.push({ from: 'user', text: this.input });
      this.saveChat();
      this.autoReply(this.input);
      this.input = '';
    },
    autoReply(userMsg) {
      setTimeout(() => {
        let reply = 'Gracias por tu mensaje. Pronto te contactaremos.';
        if (userMsg.toLowerCase().includes('rutina')) {
          reply = '¿Tienes dudas sobre alguna rutina? ¡Cuéntame más!';
        } else if (userMsg.toLowerCase().includes('cuenta')) {
          reply = '¿Tienes problemas con tu cuenta? Estoy aquí para ayudarte.';
        }
        this.messages.push({ from: 'bot', text: reply });
        this.saveChat();
      }, 1000);
    },
    saveChat() {
      localStorage.setItem('supportChat', JSON.stringify(this.messages));
    },
  },
};
</script>

<style scoped>
.chat {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 70vh;
}
h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 1.3rem;
}
.chat-window {
  flex: 1;
  background: #f7fafc;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow-y: auto;
  max-height: 300px;
}
.user {
  text-align: right;
  margin-bottom: 0.5rem;
}
.user span {
  background: #42b983;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 16px 16px 0 16px;
  display: inline-block;
}
.bot {
  text-align: left;
  margin-bottom: 0.5rem;
}
.bot span {
  background: #e0e0e0;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 16px 16px 16px 0;
  display: inline-block;
}
.chat-form {
  display: flex;
  gap: 0.5rem;
}
.chat-form input {
  flex: 1;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.chat-form button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.chat-form button:hover {
  background: #369870;
}
.back {
  background: #e0e0e0;
  color: #333;
  margin-top: 0.5rem;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
</style>