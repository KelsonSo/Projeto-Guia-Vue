<template>
<v-app-bar color="prime" elevation="2" class="px-md-4">
  <v-app-bar-title class="font-weight-bold d-flex align-center">
    <v-icon icon="mdi-ribbon" class="mr-2 neurodiversity-gradient" size="large"></v-icon>
  </v-app-bar-title>

  <v-spacer></v-spacer>

  <!-- Menu Desktop -->
  <div class="d-none d-md-flex">
    <v-btn variant="text" @click="$emit('navigate', 'inicio')">Início</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'projeto')">Projeto</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'pesquisa')">Pesquisa</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'quiz')">Quiz</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'imagens')">Imagens</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'infor')">Informações</v-btn>
    
  </div>



  <!-- Botão Menu Mobile -->
  <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
</v-app-bar>

<!-- Drawer Mobile -->
<v-navigation-drawer v-model="drawer" temporary location="right">
  <v-list nav>
    <v-list-item prepend-icon="mdi-home" title="Início" @click="navigateMobile('inicio')"></v-list-item>
    <v-list-item prepend-icon="mdi-book-open-page-variant" title="Projeto" @click="navigateMobile('projeto')"></v-list-item>
    <v-list-item prepend-icon="mdi-email" title="Projeto" @click="navigateMobile('pesquisa')"></v-list-item>
    <v-list-item prepend-icon="mdi-help-circle" title="Quiz" @click="navigateMobile('quiz')"></v-list-item>
    <v-list-item prepend-icon="mdi-help-circle" title="Quiz" @click="navigateMobile('imagens')"></v-list-item>
    <v-list-item prepend-icon="mdi-help-circle" title="Infor" @click="navigateMobile('infor')"></v-list-item>
    
  </v-list>
</v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const emit = defineEmits(['navigate'])
const drawer = ref(false)
const theme = useTheme()


function navigateMobile(id) {
drawer.value = false
emit('navigate', id)
}
</script>

<style scoped>
.neurodiversity-gradient {
  background: linear-gradient(45deg, #f44336, #ffeb3b, #4caf50, #2196f3, #9c27b0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>