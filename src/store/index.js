// This file sets up Vuex for state management in the skincare mobile application.

import { createStore } from 'vuex';

function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}
function saveFavorites(favs) {
  localStorage.setItem('favorites', JSON.stringify(favs));
}

const store = createStore({
  state: {
    tips: [
      { id: 1, title: 'Limpieza diaria', description: 'Lava tu rostro dos veces al día.' },
      { id: 2, title: 'Hidratación', description: 'Usa una crema hidratante adecuada para tu tipo de piel.' },
      { id: 3, title: 'Protector solar', description: 'Aplica protector solar todos los días.' },
      { id: 4, title: 'Evita tocar tu rostro', description: 'Tus manos pueden transferir bacterias y suciedad.' },
      { id: 5, title: 'Alimentación saludable', description: 'Incluye frutas y verduras en tu dieta.' },
      { id: 6, title: 'Descanso suficiente', description: 'Dormir bien ayuda a la regeneración de la piel.' },
    ],
    favorites: getFavorites(),
  },
  getters: {
    allTips: (state) => state.tips,
    favorites: (state) => state.tips.filter(tip => state.favorites.includes(tip.id)),
    isFavorite: (state) => (id) => state.favorites.includes(id),
  },
  mutations: {
    ADD_FAVORITE(state, id) {
      if (!state.favorites.includes(id)) {
        state.favorites.push(id);
        saveFavorites(state.favorites);
      }
    },
    REMOVE_FAVORITE(state, id) {
      state.favorites = state.favorites.filter(favId => favId !== id);
      saveFavorites(state.favorites);
    },
  },
  actions: {
    toggleFavorite({ commit, state }, id) {
      if (state.favorites.includes(id)) {
        commit('REMOVE_FAVORITE', id);
      } else {
        commit('ADD_FAVORITE', id);
      }
    },
  },
  modules: {},
});

export default store;