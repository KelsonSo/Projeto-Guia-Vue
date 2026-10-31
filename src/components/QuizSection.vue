<template>
<v-sheet color="grey-lighten-4" class="py-12">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6 rounded-xl" elevation="3">
          <h2 class="text-h4 font-weight-bold text-center primary--text mb-2">Quiz de Conscientização</h2>
          <p class="text-subtitle-1 text-center text-medium-emphasis mb-6">
            Testes seus conhecimentos sobre o Espectro Autista
          </p>

          <!-- Quiz em Andamento -->
          <div v-if="!finished">
            <v-progress-linear 
              :model-value="((currentIndex + 1) / questions.length) * 100" 
              color="primary" 
              height="8" 
              rounded 
              class="mb-6"
            ></v-progress-linear>

            <h3 class="text-h6 font-weight-bold mb-4">
              {{ currentIndex + 1 }}. {{ currentQuestion.text }}
            </h3>

            <v-radio-group v-model="selectedAnswer">
              <v-radio 
                v-for="(opt, idx) in currentQuestion.options" 
                :key="idx" 
                :label="opt" 
                :value="idx" 
                class="mb-2"
              ></v-radio>
            </v-radio-group>

            <div class="d-flex justify-end mt-4">
              <v-btn 
                color="primary" 
                :disabled="selectedAnswer === null" 
                @click="nextQuestion"
              >
                {{ currentIndex === questions.length - 1 ? 'Ver Resultado' : 'Próxima' }}
              </v-btn>
            </div>
          </div>

          <!-- Tela de Resultado Final -->
          <div v-else class="text-center py-6">
            <v-icon color="success" size="80" class="mb-3">mdi-trophy-outline</v-icon>
            <h3 class="text-h5 font-weight-bold mb-2">Quiz Concluído!</h3>
            <p class="text-h6 mb-6">
              Você acertou {{ score }} de {{ questions.length }} perguntas.
            </p>
            <v-btn color="primary" size="large" @click="resetQuiz">
              Tentar Novamente
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-sheet>
</template>

<script setup>
import { ref, computed } from 'vue'

// Array de perguntas (pode personalizar as perguntas e respostas depois)
const questions = [
{
  text: 'O Autismo é considerado uma doença que possui cura?',
  options: ['Sim, com tratamento adequado', 'Não, é uma condição neurodivergente'],
  correct: 1
},
{
  text: 'Todas as pessoas autistas possuem os mesmos sintomas e comportamentos?',
  options: ['Sim, por isso o diagnóstico é padrão', 'Não, por isso é chamado de Espectro (TEA)'],
  correct: 1
},
{
  text: 'Pessoas com TEA possuem direito a atendimento prioritário garantido por lei?',
  options: ['Sim, por lei federal', 'Não, depende do estabelecimento'],
  correct: 0
}
]

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const score = ref(0)
const finished = ref(false)

const currentQuestion = computed(() => questions[currentIndex.value])

function nextQuestion() {
if (selectedAnswer.value === currentQuestion.value.correct) {
  score.value++
}
selectedAnswer.value = null
if (currentIndex.value < questions.length - 1) {
  currentIndex.value++
} else {
  finished.value = true
}
}

function resetQuiz() {
currentIndex.value = 0
score.value = 0
selectedAnswer.value = null
finished.value = false
}
</script>