<template>
  <v-container class="py-12">
    <v-row align="center">
      <!-- Coluna Principal com o Carrossel do Projeto -->
      <v-col md="1"></v-col>
      <v-col cols="12" md="10">
        <h2 class="text-h4 font-weight-bold mb-4">Imagens da Produção</h2>

        <v-card class="rounded-xl overflow-hidden" elevation="3">
          <v-carousel
            v-model="currentSlide"
            height="450"
            show-arrows="hover"
            cycle
            interval="5000"
            hide-delimiter-background
            color="prime"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(img, index) in images"
              :key="index"
              :src="img.src"
              contain
              
            >
              <!-- Opcional: Mostrar a descrição se quiser -->
              
            </v-carousel-item>
          </v-carousel>

          <!-- Barra de navegação inferior -->
          <v-card-actions class="pa-4 bg-surface d-flex justify-space-between align-center">
            <span class="text-caption text-medium-emphasis">
              {{ currentSlide + 1 }} de {{ images.length }}
            </span>
            <v-card-actions class="pa-4 bg-surface d-flex justify-space-between align-center">
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
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col md="1"></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

// Função auxiliar para carregar imagens da pasta assets dinamicamente no Vite
function getImageUrl(name) {
  return new URL(`../assets/fotos/${name}`, import.meta.url).href
}


// Geração automática de 1 a 30 para o array de imagens
const images = ref(
  Array.from({ length: 32 }, (_, index) => {
    const num = index + 1
    return {
      src: getImageUrl(`${num}.jpeg`), // Altere para .jpeg ou .png se necessário
    }
  })
)
</script>

<style>
</style>