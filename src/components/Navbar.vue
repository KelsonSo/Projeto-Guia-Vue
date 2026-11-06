<template>
<v-app-bar color="prime" elevation="2" class="px-md-4">
  <v-app-bar-title class="font-weight-bold d-flex align-center">
    <v-icon icon="mdi-puzzle-outline" class="mr-2" size="large"></v-icon>
    Projeto TEA
  </v-app-bar-title>

  <v-spacer></v-spacer>

  <!-- Menu Desktop -->
  <div class="d-none d-md-flex">
    <v-btn variant="text" @click="$emit('navigate', 'inicio')">Início</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'projeto')">Projeto</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'pesquisa')">Pesquisa</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'quiz')">Quiz</v-btn>
    <v-btn variant="text" @click="$emit('navigate', 'infor')">Informações</v-btn>
    
  </div>

  <!-- Toggle de Tema -->
  <v-btn icon @click="toggleTheme" class="ml-2">
    <v-icon>{{ theme.global.name.value === 'dark' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
  </v-btn>

  <!-- Botão Menu Mobile -->
  <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
</v-app-bar>

<!-- Drawer Mobile -->
<v-navigation-drawer v-model="drawer" temporary location="right">
  <v-list nav>
    <v-list-item prepend-icon="mdi-home" title="Início" @click="navigateMobile('inicio')"></v-list-item>
    <v-list-item prepend-icon="mdi-book-open-page-variant" title="Projeto" @click="navigateMobile('projeto')"></v-list-item>
    <v-list-item prepend-icon="mdi-email" title="Projeto" @click="navigateMobile('projeto')"></v-list-item>
    <v-list-item prepend-icon="mdi-help-circle" title="Quiz" @click="navigateMobile('quiz')"></v-list-item>
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

function toggleTheme() {
theme.global.name.value = theme.global.current.value.dark ? 'customTheme' : 'dark'
}

function navigateMobile(id) {
drawer.value = false
emit('navigate', id)
}
</script>