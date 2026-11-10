<template>
  <v-container class="py-12">
    <v-row align="center">
      <!-- Coluna Principal com o Carrossel do Projeto -->
      <v-col cols="12" md="9">
        <h2 class="text-h4 font-weight-bold mb-4">Sobre o Projeto</h2>

        <v-card class="rounded-xl overflow-hidden" elevation="3">
          <v-carousel
            v-model="currentSlide"
            height="450"
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
              <!-- Overlay com título e descrição da imagem -->
              <div class="d-flex align-end fill-height pa-4 text-white">
                <div>
                  <div class="text-h6 font-weight-bold">{{ img.title }}</div>
                  <div class="text-subtitle-2">{{ img.description }}</div>
                </div>
              </div>
            </v-carousel-item>
          </v-carousel>

          <!-- Barra de navegação inferior -->
          <v-card-actions class="pa-4 bg-surface d-flex justify-space-between align-center">
            <span class="text-caption text-medium-emphasis">
              Imagem {{ currentSlide + 1 }} de {{ images.length }}
            </span>

            <div>
              <v-btn
                variant="tonal"
                color="prime"
                size="small"
                prepend-icon="mdi-chevron-left"
                class="mr-2"
                @click="currentSlide = (currentSlide - 1 + images.length) % images.length"
              >
                Anterior
              </v-btn>
              
              <v-btn
                variant="flat"
                color="prime"
                size="small"
                append-icon="mdi-chevron-right"
                @click="currentSlide = (currentSlide + 1) % images.length"
              >
                Próxima
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Coluna Lateral imagem -->
      <v-col cols="hiden" md="3" class="d-none d-md-flex">
        <v-img
        height="400"
        image-class="transition-400 hover:scale-90 elevation-2"
        rounded="pill"
        :src="imagemLateral"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

// Função auxiliar para carregar imagens da pasta assets dinamicamente no Vite
function getImageUrl(name) {
  return new URL(`../assets/slides/${name}`, import.meta.url).href
}
function getImageUrl2(name) {
  return new URL(`../assets/imagens/${name}`, import.meta.url).href
}

const imagemLateral = getImageUrl2("imagem1.png")
const images = ref([
  { 
    src: getImageUrl('1.jpg'), 
    title: 'Página 1', 
    description: 'Capa' 
  },
  { 
    src: getImageUrl('2.jpg'), 
    title: 'Página 2', 
    description: 'Problema Mobilizador' 
  },
  { 
    src: getImageUrl('3.jpg'), 
    title: 'Página 3', 
    description: 'Fundamentação Teórica' 
  },
  { 
    src: getImageUrl('4.jpg'), 
    title: 'Página 4', 
    description: 'Justificativa' 
  },
  { 
    src: getImageUrl('5.jpg'), 
    title: 'Página 5', 
    description: 'Objetivos' 
  },
  { 
    src: getImageUrl('6.jpg'), 
    title: 'Página 6', 
    description: 'Apoio à Família' 
  },
  { 
    src: getImageUrl('7.jpg'), 
    title: 'Página 7', 
    description: 'Resultados' 
  },
  { 
    src: getImageUrl('8.jpg'), 
    title: 'Página 8', 
    description: 'Produto Final' 
  },
  { 
    src: getImageUrl('9.jpg'), 
    title: 'Página 9', 
    description: 'Referência' 
  },

])
</script>

<style>

</style>
