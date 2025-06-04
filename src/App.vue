<template>
  <div id="app">
    <router-view />
    <MobileNav />
  </div>
</template>

<script>
import MobileNav from '@/components/MobileNav.vue';

export default {
  name: 'App',
  components: { MobileNav },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&display=swap');

html, body {
  height: auto;
  min-height: 100vh;
  overflow-y: auto;
}

body {
  font-family: 'Montserrat', Arial, sans-serif;
  background: #FFF8F0; /* Marfil */
  color: #5C4033;      /* Marrón Nude */
  margin: 0;
  min-height: 100vh;
  font-size: 1rem; /* Accesibilidad: tamaño base */
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  color: #B76E79; /* Dorado Rosado */
  margin-top: 0;
}

button, input, textarea, select {
  font-family: 'Montserrat', Arial, sans-serif;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  outline: none;
}

/* ACCESIBILIDAD: Enfoque visible para teclado */
button:focus-visible, .main-btn:focus-visible, .social-btn:focus-visible, .link-btn:focus-visible,
input:focus-visible, textarea:focus-visible, select:focus-visible {
  outline: 3px solid #B76E79; /* Rosa Palo */
  outline-offset: 2px;
}

/* ACCESIBILIDAD: Mejora contraste en hover/focus */
button:hover, button:focus-visible {
  background: #FAD6C4; /* Durazno Claro */
  color: #B76E79;      /* Dorado Rosado */
  border-color: #B76E79;
}

input, textarea, select {
  background: #FFF8F0; /* Marfil */
  color: #5C4033;
  border: 1.5px solid #FAD6C4;
  padding: 0.6rem 1rem;
  margin-bottom: 0.7rem;
}

input:focus-visible, textarea:focus-visible, select:focus-visible {
  border-color: #B76E79;
  background: #F8E1E7;
}

/* ACCESIBILIDAD: Etiquetas y mensajes de error */
label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.2rem;
}
[role="alert"] {
  color: #B76E79;
  font-weight: 600;
  margin-bottom: 1rem;
}

a {
  color: #B76E79;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover {
  color: #5C4033;
  text-decoration: underline;
}

::-webkit-scrollbar {
  width: 8px;
  background: #FAD6C4;
}
::-webkit-scrollbar-thumb {
  background: #B76E79;
  border-radius: 8px;
}

.card, .profile, .settings, .calendar, .add-tip, .quiz, .articles, .videos, .about, .chat, .scanner {
  background: #F8E1E7; /* Rosa Palo */
  border-radius: 14px;
  box-shadow: 0 2px 12px #fad6c4cc;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
}

/* ----------- MODO OSCURO GLOBAL ----------- */
body.dark {
  background: #181818 !important;
  color: #F8E1E7 !important;
}

body.dark h1, 
body.dark h2, 
body.dark h3 {
  color: #FAD6C4 !important;
}

body.dark button {
  background: #5C4033 !important;      /* Marrón Nude */
  color: #F8E1E7 !important;           /* Rosa Palo */
  border-color: #B76E79 !important;
}

body.dark button:hover, 
body.dark button:focus {
  background: #B76E79 !important;      /* Dorado Rosado */
  color: #FFF8F0 !important;           /* Marfil */
}

body.dark input, 
body.dark textarea, 
body.dark select {
  background: #232323 !important;
  color: #F8E1E7 !important;
  border-color: #B76E79 !important;
}

body.dark input:focus, 
body.dark textarea:focus, 
body.dark select:focus {
  background: #333 !important;
  border-color: #FAD6C4 !important;
}

body.dark a {
  color: #FAD6C4 !important;
}
body.dark a:hover {
  color: #F8E1E7 !important;
}

body.dark .card, 
body.dark .profile, 
body.dark .settings, 
body.dark .calendar, 
body.dark .add-tip, 
body.dark .quiz, 
body.dark .articles, 
body.dark .videos, 
body.dark .about, 
body.dark .chat, 
body.dark .scanner {
  background: #232323 !important;
  color: #F8E1E7 !important;
  box-shadow: 0 2px 12px #5C4033cc;
}

/* Barra de navegación modo oscuro */
body.dark .mobile-nav {
  background: #232323 !important;
  border-top: 2px solid #B76E79 !important;
}
body.dark .mobile-nav button {
  color: #F8E1E7 !important;
  background: none !important;
}
body.dark .mobile-nav button.active,
body.dark .mobile-nav button:hover {
  color: #FAD6C4 !important;
  background: #5C4033 !important;
}

.destacado {
  color: #B76E79;
}
body.dark .destacado {
  color: #FAD6C4;
}

::-webkit-scrollbar {
  width: 8px;
  background: #232323;
}
::-webkit-scrollbar-thumb {
  background: #B76E79;
  border-radius: 8px;
}

@media (max-width: 700px) {
  .card, .profile, .settings, .calendar, .add-tip, .quiz, .articles, .videos, .about, .chat, .scanner {
    margin: 1rem 0.2rem;
    padding: 1rem 0.5rem;
  }
}
</style>