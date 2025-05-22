<template>
  <div class="tip">
    <div class="tip-header">
      <h2>{{ tip.title }}</h2>
      <button class="fav-btn" @click="toggleFav">
        <span v-if="isFav">★</span>
        <span v-else>☆</span>
      </button>
    </div>
    <p>{{ tip.description }}</p>
    <div class="share">
      <button @click="share('whatsapp')">WhatsApp</button>
      <button @click="share('facebook')">Facebook</button>
      <button @click="share('copy')">Copiar enlace</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'SkincareTip',
  props: {
    tip: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['isFavorite']),
    isFav() {
      return this.isFavorite(this.tip.id);
    },
  },
  methods: {
    ...mapActions(['toggleFavorite']),
    toggleFav() {
      this.toggleFavorite(this.tip.id);
    },
    share(platform) {
      const text = `Consejo de skincare: ${this.tip.title} - ${this.tip.description}`;
      const url = window.location.origin + '/'; // Puedes personalizar el enlace
      if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
      } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
      } else if (platform === 'copy') {
        navigator.clipboard.writeText(text + ' ' + url);
        alert('¡Enlace copiado!');
      }
    },
  },
};
</script>

<style scoped>
.tip {
  margin-bottom: 1.2rem;
  padding: 1rem;
  border-left: 4px solid #42b983;
  background: #f0f9f5;
  border-radius: 6px;
  word-break: break-word;
}
.tip-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fav-btn {
  background: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  color: #ffb347;
  padding: 0 0.3rem;
}
.fav-btn:focus {
  outline: none;
}
h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #42b983;
}
.share {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.7rem;
}
.share button {
  background: #e0e0e0;
  color: #333;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}
.share button:hover {
  background: #42b983;
  color: #fff;
}
@media (max-width: 600px) {
  .tip {
    padding: 0.7rem;
  }
  h2 {
    font-size: 1rem;
  }
}
</style>