<template>
  <div class="quiz">
    <h1>Cuestionario de tipo de piel</h1>
    <div v-if="!showResult">
      <div class="question">
        <p>{{ questions[current].text }}</p>
        <div class="answers">
          <button
            v-for="(answer, idx) in questions[current].answers"
            :key="idx"
            @click="selectAnswer(answer.value)"
          >
            {{ answer.text }}
          </button>
        </div>
      </div>
      <div class="progress">
        Pregunta {{ current + 1 }} de {{ questions.length }}
      </div>
    </div>
    <div v-else>
      <h2>Tu tipo de piel es: <span :class="result.type">{{ result.label }}</span></h2>
      <p>{{ result.description }}</p>
      <div class="routine">
        <h3>Rutina recomendada:</h3>
        <ul>
          <li v-for="(step, i) in result.routine" :key="i">{{ step }}</li>
        </ul>
      </div>
      <div class="products">
        <h3>Productos recomendados:</h3>
        <div v-for="(product, i) in result.products" :key="i" class="product">
          <strong>{{ product.name }}</strong>: {{ product.desc }}
          <a :href="product.link" target="_blank">Comprar</a>
        </div>
      </div>
      <button @click="restartQuiz">Repetir cuestionario</button>
      <button @click="$router.push('/')">Volver al inicio</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quiz',
  data() {
    return {
      current: 0,
      answers: [],
      showResult: false,
      result: {},
      questions: [
        {
          text: '¿Cómo se siente tu piel al final del día?',
          answers: [
            { text: 'Grasa y brillante', value: 'grasa' },
            { text: 'Seca o tirante', value: 'seca' },
            { text: 'Normal', value: 'normal' },
            { text: 'Grasa en la zona T y seca en mejillas', value: 'mixta' },
            { text: 'Enrojecida o irritada', value: 'sensible' },
            { text: 'Con líneas de expresión marcadas', value: 'madura' },
          ],
        },
        {
          text: '¿Con qué frecuencia tienes brotes de acné o irritación?',
          answers: [
            { text: 'Frecuentemente', value: 'grasa' },
            { text: 'Rara vez', value: 'seca' },
            { text: 'Casi nunca', value: 'normal' },
            { text: 'Solo en la zona T', value: 'mixta' },
            { text: 'Fácilmente irritada', value: 'sensible' },
            { text: 'Piel fina y con manchas', value: 'madura' },
          ],
        },
        {
          text: '¿Cómo se ven tus poros?',
          answers: [
            { text: 'Grandes y visibles', value: 'grasa' },
            { text: 'Pequeños o invisibles', value: 'seca' },
            { text: 'Normales', value: 'normal' },
            { text: 'Grandes en la zona T', value: 'mixta' },
            { text: 'Rojos o con tendencia a inflamarse', value: 'sensible' },
            { text: 'Poros dilatados y piel flácida', value: 'madura' },
          ],
        },
        {
          text: '¿Cómo reacciona tu piel a productos nuevos?',
          answers: [
            { text: 'No suele reaccionar', value: 'normal' },
            { text: 'Se engrasa fácilmente', value: 'grasa' },
            { text: 'Se reseca o descama', value: 'seca' },
            { text: 'Se irrita o enrojece', value: 'sensible' },
            { text: 'No noto cambios', value: 'mixta' },
            { text: 'Se marcan más las arrugas', value: 'madura' },
          ],
        },
      ],
      resultsInfo: {
        grasa: {
          type: 'grasa',
          label: 'Grasa',
          description: 'Tu piel produce exceso de sebo. Es importante limpiar y usar productos oil-free.',
          routine: [
            'Limpieza facial suave dos veces al día.',
            'Tónico astringente sin alcohol.',
            'Hidratante ligera oil-free.',
            'Protector solar matificante.',
          ],
          products: [
            {
              name: 'Gel limpiador La Roche-Posay Effaclar',
              desc: 'Limpia profundamente sin resecar.',
              link: 'https://www.laroche-posay.com.mx/effaclar-gel-limpiador',
            },
            {
              name: 'Tónico Neutrogena Oil-Free',
              desc: 'Ayuda a controlar el brillo.',
              link: 'https://www.neutrogena.com.mx/oil-free-tonico',
            },
          ],
        },
        seca: {
          type: 'seca',
          label: 'Seca',
          description: 'Tu piel necesita hidratación extra y productos suaves.',
          routine: [
            'Limpieza suave con leche limpiadora.',
            'Tónico hidratante.',
            'Crema hidratante rica.',
            'Protector solar hidratante.',
          ],
          products: [
            {
              name: 'CeraVe Hydrating Cleanser',
              desc: 'Limpia e hidrata sin irritar.',
              link: 'https://www.cerave.com/skincare/cleansers/hydrating-cleanser',
            },
            {
              name: 'Neutrogena Hydro Boost Water Gel',
              desc: 'Hidratación intensa para piel seca.',
              link: 'https://www.neutrogena.com.mx/hydro-boost-water-gel',
            },
          ],
        },
        normal: {
          type: 'normal',
          label: 'Normal',
          description: '¡Felicidades! Tu piel está equilibrada. Mantén una rutina suave y constante.',
          routine: [
            'Limpieza suave dos veces al día.',
            'Tónico equilibrante.',
            'Hidratante ligera.',
            'Protector solar diario.',
          ],
          products: [
            {
              name: 'Cetaphil Gentle Skin Cleanser',
              desc: 'Limpieza suave para uso diario.',
              link: 'https://www.cetaphil.com.mx/gentle-skin-cleanser',
            },
            {
              name: 'Eucerin pH5 Loción',
              desc: 'Hidratación ligera y efectiva.',
              link: 'https://www.eucerin.com.mx/ph5-locion',
            },
          ],
        },
        mixta: {
          type: 'mixta',
          label: 'Mixta',
          description: 'Tu piel es grasa en la zona T y seca en otras áreas. Usa productos específicos para cada zona.',
          routine: [
            'Limpieza suave en todo el rostro.',
            'Tónico equilibrante.',
            'Hidratante ligera en la zona T, más rica en mejillas.',
            'Protector solar para piel mixta.',
          ],
          products: [
            {
              name: 'Vichy Normaderm Phytosolution',
              desc: 'Limpieza y control de grasa.',
              link: 'https://www.vichy.com.mx/normaderm-phytosolution',
            },
            {
              name: 'Bioderma Sébium Mat Control',
              desc: 'Hidratante matificante para zona T.',
              link: 'https://www.bioderma.mx/nuestros-productos/sebium/mat-control',
            },
          ],
        },
        sensible: {
          type: 'sensible',
          label: 'Sensible',
          description: 'Tu piel es delicada y reacciona fácilmente. Usa productos hipoalergénicos y sin fragancia.',
          routine: [
            'Limpieza suave sin jabón.',
            'Tónico calmante.',
            'Hidratante hipoalergénica.',
            'Protector solar mineral.',
          ],
          products: [
            {
              name: 'Avene Tolerance Extreme',
              desc: 'Limpieza ultra suave.',
              link: 'https://www.eau-thermale-avene.mx/tolerance-extreme',
            },
            {
              name: 'La Roche-Posay Toleriane Sensitive',
              desc: 'Hidratante calmante.',
              link: 'https://www.laroche-posay.com.mx/toleriane-sensitive',
            },
          ],
        },
        madura: {
          type: 'madura',
          label: 'Madura',
          description: 'Tu piel muestra signos de envejecimiento. Usa productos nutritivos y antioxidantes.',
          routine: [
            'Limpieza suave anti-edad.',
            'Sérum antioxidante.',
            'Crema nutritiva con retinol o péptidos.',
            'Protector solar anti-edad.',
          ],
          products: [
            {
              name: 'L\'Oreal Revitalift Limpiador',
              desc: 'Limpieza anti-edad.',
              link: 'https://www.lorealparis.com.mx/revitalift-limpiador',
            },
            {
              name: 'Olay Regenerist Micro-Sculpting Cream',
              desc: 'Crema anti-edad con péptidos.',
              link: 'https://www.olay.com.mx/regenerist-micro-sculpting-cream',
            },
          ],
        },
      },
    };
  },
  methods: {
    selectAnswer(value) {
      this.answers.push(value);
      if (this.current < this.questions.length - 1) {
        this.current++;
      } else {
        this.calculateResult();
      }
    },
    calculateResult() {
      // Cuenta la frecuencia de cada tipo
      const count = {
        grasa: 0,
        seca: 0,
        normal: 0,
        mixta: 0,
        sensible: 0,
        madura: 0,
      };
      this.answers.forEach(ans => count[ans]++);
      // Encuentra el tipo más frecuente
      const type = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
      this.result = this.resultsInfo[type];
      this.showResult = true;

      // Guardar historial en localStorage
      const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
      history.push({
        date: new Date().toLocaleString(),
        type: this.result.label,
      });
      localStorage.setItem('quizHistory', JSON.stringify(history));
    },
    restartQuiz() {
      this.current = 0;
      this.answers = [];
      this.showResult = false;
      this.result = {};
    },
  },
};
</script>

<style scoped>
.quiz {
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
.question p {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
}
.answers {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.answers button {
  background: #42b983;
  color: #fff;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.answers button:hover {
  background: #369870;
}
.progress {
  text-align: center;
  color: #888;
  font-size: 0.95rem;
}
h2 {
  text-align: center;
  margin-bottom: 0.5rem;
}
.routine, .products {
  margin: 1rem 0;
}
.routine ul {
  padding-left: 1.2rem;
}
.product {
  margin-bottom: 0.7rem;
}
.product a {
  color: #42b983;
  margin-left: 0.5rem;
  font-size: 0.95rem;
}
.grasa { color: #e67e22; }
.seca { color: #2980b9; }
.normal { color: #27ae60; }
.mixta { color: #8e44ad; }
.sensible { color: #e74c3c; }
.madura { color: #b9770e; }
@media (max-width: 600px) {
  .quiz {
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