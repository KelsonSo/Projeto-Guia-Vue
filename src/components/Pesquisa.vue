<template>
  <v-container class="py-12">
    <v-row align="center">
      <v-col cols="12">
        
          <!-- BARRA SUPERIOR: Seleção do Tipo de Pesquisa (Main Tab) -->
          <div class="d-flex align-center justify-space-between mb-6">
            <v-row>
              <v-col>
                <h2 class="text-h4 font-weight-bold">Pesquisa e Resultados</h2>
              </v-col>
              <v-col>
                <v-btn-toggle
                v-model="mainTab"
                color="prime"
                mandatory
                rounded="xl"
                elevation="1"
                >
                  <v-btn value="alunos" prepend-icon="mdi-account-group">
                      Alunos
                  </v-btn>
                  <v-btn value="alunos-tea" prepend-icon="mdi-account-group">
                      Alunos TEA
                  </v-btn>
                  <v-btn value="aee" prepend-icon="mdi-school">
                      AEE
                  </v-btn>
                </v-btn-toggle>
              </v-col>
           </v-row>
          </div>
       
        <!-- JANELA PRINCIPAL -->
        <v-window v-model="mainTab">
           <!-- ==================== TAB: ALUNOS ==================== -->
          <v-window-item value="alunos">
            
            <!-- Sub-navegação interna do Alunos  -->
            <div class="d-flex justify-center mb-4">
              <v-btn-toggle
                v-model="alunosSubTab"
                color="secon"
                mandatory
                rounded="lg"
                density="compact"
              >
                <v-btn value="pesquisa" prepend-icon="mdi-file-document-outline">
                  Pesquisa
                </v-btn>
                <v-btn value="resultado" prepend-icon="mdi-chart-bar">
                  Resultado da Pesquisa
                </v-btn>
              </v-btn-toggle>
            </div>

            <!-- Janela Interna (Sub-window Alunos) -->
            <v-window v-model="alunosSubTab">
              <!-- Pesquisa Alunos -->
              <v-window-item value="pesquisa">
                <v-card class="rounded-xl overflow-hidden" elevation="3">
                  <v-carousel
                    v-model="currentSlideTea"
                    height="540"
                    show-arrows="hover"
                    cycle
                    interval="5000"
                    hide-delimiter-background
                    color="primary"
                  >
                    <v-carousel-item
                      v-for="(img, index) in imagesAlunos"
                      :key="index"
                      :src="img.src"
                      contain
                    >
                      <div class="d-flex align-end fill-height pa-4 text-white gradient-overlay">
                        <div class="text-h6 font-weight-bold">{{ img.title }}</div>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-window-item>

              <!-- Resultado Alunos TEA -->
              <v-window-item value="resultado">
                <v-card class="rounded-xl overflow-hidden" elevation="3">
                  <v-img
                    :src="resultadoAlunosImg"
                    height="540"
                    contain
                    class="align-end text-white"
                  ></v-img>
                </v-card>
              </v-window-item>
            </v-window>

          </v-window-item>
          <!-- ==================== TAB 2: ALUNOS TEA ==================== -->
          <v-window-item value="alunos-tea">
            
            <!-- Sub-navegação interna do Alunos TEA -->
            <div class="d-flex justify-center mb-4">
              <v-btn-toggle
                v-model="alunosTeaSubTab"
                color="secon"
                mandatory
                rounded="lg"
                density="compact"
              >
                <v-btn value="pesquisa" prepend-icon="mdi-file-document-outline">
                  Pesquisa
                </v-btn>
                <v-btn value="resultado" prepend-icon="mdi-chart-bar">
                  Resultado da Pesquisa
                </v-btn>
              </v-btn-toggle>
            </div>

            <!-- Janela Interna (Sub-window Alunos) -->
            <v-window v-model="alunosTeaSubTab">
              <!-- Pesquisa Alunos TEA -->
              <v-window-item value="pesquisa">
                <v-card class="rounded-xl overflow-hidden" elevation="3">
                  <v-carousel
                    v-model="currentSlideTea"
                    height="540"
                    show-arrows="hover"
                    cycle
                    interval="5000"
                    hide-delimiter-background
                    color="primary"
                  >
                    <v-carousel-item
                      v-for="(img, index) in imagesTea"
                      :key="index"
                      :src="img.src"
                      contain
                    >
                      <div class="d-flex align-end fill-height pa-4 text-white gradient-overlay">
                        <div class="text-h6 font-weight-bold">{{ img.title }}</div>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-window-item>

              <!-- Resultado Alunos TEA -->
              <v-window-item value="resultado">
                <v-card class="rounded-xl overflow-hidden" elevation="3">
                  <v-img
                    :src="resultadoTeaImg"
                    height="540"
                    contain
                    class="align-end text-white"
                  ></v-img>
                </v-card>
              </v-window-item>
            </v-window>

          </v-window-item>

          <!-- ==================== TAB 3: AEE ==================== -->
          <v-window-item value="aee">
            
            <!-- Sub-navegação interna do AEE -->
            <div class="d-flex justify-center mb-4">
              <v-btn-toggle
                v-model="aeeSubTab"
                color="secon"
                mandatory
                rounded="lg"
                density="compact"
              >
                <v-btn value="pesquisa" prepend-icon="mdi-file-document-outline">
                  Pesquisa
                </v-btn>
                <v-btn value="resultado" prepend-icon="mdi-chart-bar">
                  Resultado da Pesquisa
                </v-btn>
              </v-btn-toggle>
            </div>

            <!-- Janela Interna (Sub-window AEE) -->
            <v-window v-model="aeeSubTab">
              <!-- Pesquisa AEE -->
              <v-window-item value="pesquisa">
                <v-card class="rounded-xl overflow-hidden" elevation="3">
                  <v-carousel
                    v-model="currentSlideAee"
                    height="540"
                    show-arrows="hover"
                    cycle
                    interval="5000"
                    hide-delimiter-background
                    color="primary"
                  >
                    <v-carousel-item
                      v-for="(img, index) in imagesAee"
                      :key="index"
                      :src="img.src"
                      contain
                    >
                      <div class="d-flex align-end fill-height pa-4 text-white gradient-overlay">
                        <div class="text-h6 font-weight-bold">{{ img.title }}</div>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-window-item>

              <!-- Resultado AEE -->
              <v-window-item value="resultado">
                <v-card class="rounded-xl overflow-hidden" elevation="3">
                  <v-img
                    :src="resultadoAeeImg"
                    height="540"
                    contain
                    class="align-end text-white"
                  ></v-img>
                </v-card>
              </v-window-item>
            </v-window>

          </v-window-item>

        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// 1. Estados de Navegação Separados (Evita travamentos entre as tabs)
const mainTab = ref('alunos')
const alunosSubTab = ref('pesquisa')
const alunosTeaSubTab = ref('pesquisa')
const aeeSubTab = ref('pesquisa')

const currentSlideTea = ref(0)
const currentSlideAlunos = ref(0)
const currentSlideAee = ref(0)

// Helper para caminhos dinâmicos no Vite
function getImageUrl(name) {
  return new URL(`../assets/pesquisa-pasta-3/${name}`, import.meta.url).href
}
function getImageUrl2(name) {
  return new URL(`../assets/pesquisa-pasta/${name}`, import.meta.url).href
}
function getImageUrl3(name) {
  return new URL(`../assets/pesquisa-pasta-2/${name}`, import.meta.url).href
}

// Imagens de Resultados
const resultadoAlunosImg = getImageUrl('alunos-resultado.jpg')
const resultadoTeaImg = getImageUrl2('pesquisa-resultado.jpg')
const resultadoAeeImg = getImageUrl3('AEE-resultado.jpg') // Substitua pela imagem do AEE quando tiver


// 2. Lista de Imagens - Alunos TEA
const imagesAlunos = ref([
  { src: getImageUrl('alunos-1.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-2.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-3.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-4.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-5.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-6.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-7.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-8.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-9.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-10.jpg'), title: 'Página 1' },
  { src: getImageUrl('alunos-11.jpg'), title: 'Página 1' },
 
])
// 2. Lista de Imagens - Alunos TEA
const imagesTea = ref([
  { src: getImageUrl2('pesquisa-1.jpg'), title: 'Página 1' },
  { src: getImageUrl2('pesquisa-2.jpg'), title: 'Página 2' },
  { src: getImageUrl2('pesquisa-3.jpg'), title: 'Página 3' },
  { src: getImageUrl2('pesquisa-4.jpg'), title: 'Página 4' },
  { src: getImageUrl2('pesquisa-5.jpg'), title: 'Página 5' },
  { src: getImageUrl2('pesquisa-6.jpg'), title: 'Página 6' },
  { src: getImageUrl2('pesquisa-7.jpg'), title: 'Página 7' },
  { src: getImageUrl2('pesquisa-8.jpg'), title: 'Página 8' },
  { src: getImageUrl2('pesquisa-9.jpg'), title: 'Página 9' },
  { src: getImageUrl2('pesquisa-10.jpg'), title: 'Página 10' },
  { src: getImageUrl2('pesquisa-11.jpg'), title: 'Página 11' }
])

// 3. Lista de Imagens - AEE (Estruturada para quando colocar as imagens do AEE)
const imagesAee = ref([
  { src: getImageUrl3('AEE-1.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-2.jpg'), title: 'AEE - Página 2' },
  { src: getImageUrl3('AEE-3.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-4.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-5.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-6.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-7.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-8.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-9.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-10.jpg'), title: 'AEE - Página 1' },
  { src: getImageUrl3('AEE-11.jpg'), title: 'AEE - Página 1' }
])
</script>

<style scoped>
.gradient-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);
}
</style>