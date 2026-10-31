<template>
  <v-container class="py-12">
    <v-row align="center">
      <!-- Coluna Principal com Alternância de Conteúdo -->
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-4">
          <h2 class="text-h4 font-weight-bold">Pesquisa e Resultados</h2>
          
          <!-- Botões de Navegação Superior (Alternador de Conteúdo) -->
          <v-btn-toggle
            v-model="activeTab"
            color="primary"
            mandatory
            rounded="xl"
            elevation="1"
          >
            <v-btn value="pesquisa" prepend-icon="mdi-file-document-outline">
              Pesquisa
            </v-btn>
            <v-btn value="resultado" prepend-icon="mdi-chart-bar">
              Resultado da Pesquisa
            </v-btn>
          </v-btn-toggle>
        </div>

        <!-- Janela de Transição Dinâmica -->
        <v-window v-model="activeTab">
          
          <!-- ABA 1: Carrossel da Pesquisa (Imagens 1 a 11) -->
          <v-window-item value="pesquisa">
            <v-card class="rounded-xl overflow-hidden" elevation="3">
              <v-carousel
                v-model="currentSlide"
                height="540"
                show-arrows="hover"
                cycle
                interval="5000"
                hide-delimiter-background
                color="primary"
              >
                <v-carousel-item
                  v-for="(img, index) in images"
                  :key="index"
                  :src="img.src"
                  contain
                >
                  <div class="d-flex align-end fill-height pa-4 text-white">
                    <div>
                      <div class="text-h6 text-prime font-weight-bold">{{ img.title }}</div>
                    </div>
                  </div>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-window-item>

          <!-- ABA 2: Imagem do Resultado da Pesquisa -->
          <v-window-item value="resultado">
            <v-card class="rounded-xl overflow-hidden" elevation="3">
              <v-img
                :src="resultadoImg"
                height="540"
                contain
                class="align-end text-white"
              >
              
              </v-img>
            </v-card>
          </v-window-item>

        </v-window>
      </v-col>

      <!-- Coluna Lateral Informativa -->
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

// Estado para controlar a aba ativa ('pesquisa' ou 'resultado')
const activeTab = ref('pesquisa')
const currentSlide = ref(0)

// Função auxiliar para carregar imagens dinamicamente no Vite
function getImageUrl(name) {
  return new URL(`../assets/pesquisa-pasta/${name}`, import.meta.url).href
}

// Imagem única do resultado da pesquisa (Altere o nome do ficheiro para a sua imagem real)
const resultadoImg = getImageUrl('pesquisa-resultado.jpg')

const images = ref([
  { 
    src: getImageUrl('pesquisa-1.jpg'), 
    title: 'Página 1', 
    description: 'Capa' 
  },
  { 
    src: getImageUrl('pesquisa-2.jpg'), 
    title: 'Página 2', 
    description: 'Problema Mobilizador' 
  },
  { 
    src: getImageUrl('pesquisa-3.jpg'), 
    title: 'Página 3', 
    description: 'Fundamentação Teórica' 
  },
  { 
    src: getImageUrl('pesquisa-4.jpg'), 
    title: 'Página 4', 
    description: 'Justificativa' 
  },
  { 
    src: getImageUrl('pesquisa-5.jpg'), 
    title: 'Página 5', 
    description: 'Objetivos' 
  },
  { 
    src: getImageUrl('pesquisa-6.jpg'), 
    title: 'Página 6', 
    description: 'Apoio à Família' 
  },
  { 
    src: getImageUrl('pesquisa-7.jpg'), 
    title: 'Página 7', 
    description: 'Resultados' 
  },
  { 
    src: getImageUrl('pesquisa-8.jpg'), 
    title: 'Página 8', 
    description: 'Produto Final' 
  },
  { 
    src: getImageUrl('pesquisa-9.jpg'), 
    title: 'Página 9', 
    description: 'Referência' 
  },
  { 
    src: getImageUrl('pesquisa-10.jpg'), 
    title: 'Página 10', 
    description: 'Referência' 
  },
  { 
    src: getImageUrl('pesquisa-11.jpg'), 
    title: 'Página 11', 
    description: 'Referência' 
  }
])
</script>
