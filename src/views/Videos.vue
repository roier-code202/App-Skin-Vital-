<template>
  <div class="videos">
    <h1>Videos tutoriales</h1>
    <div v-for="video in videos" :key="video.title" class="video-card">
      <h2>{{ video.title }}</h2>
      <video controls :src="video.src" width="100%" :poster="video.poster">
        <track kind="subtitles" :src="video.subs" srclang="es" label="Español" default>
        Tu navegador no soporta el video.
      </video>
      <p>{{ video.desc }}</p>
    </div>
    <button class="back" @click="$router.push('/')">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      videos: [
        {
          title: '¿Cómo usar la app?',
          src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Reemplaza por tu video real
          poster: 'https://via.placeholder.com/400x200?text=Tutorial+1',
          subs: '', // Puedes agregar un archivo .vtt si tienes subtítulos
          desc: 'Aprende a navegar y aprovechar todas las funciones de la app.',
        },
        {
          title: 'Rutina básica diaria',
          src: 'https://www.w3schools.com/html/movie.mp4', // Reemplaza por tu video real
          poster: 'https://via.placeholder.com/400x200?text=Tutorial+2',
          subs: '',
          desc: 'Sigue una rutina diaria sencilla para cuidar tu piel.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.videos {
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
.video-card {
  margin-bottom: 2rem;
  background: #f7fafc;
  border-radius: 6px;
  padding: 1rem;
}
h2 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
video {
  border-radius: 6px;
  margin-bottom: 0.5rem;
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