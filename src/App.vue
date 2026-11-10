<template>
<v-app>
  <Navbar @navigate="scrollTo" />
  
  <v-main>
    <HomeSection id="inicio" />
    <Projeto id="projeto" />
    <Pesquisa id="pesquisa" />
    <QuizSection id="quiz" />
    <InforSection id="infor" />
    <ImagensSection id="imagens" />
    
  </v-main>

  <AppFooter />
</v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HomeSection from './components/HomeSection.vue'
import InforSection from './components/InforSection.vue'
import Pesquisa from './components/Pesquisa.vue'
import Projeto from './components/Projeto.vue'
import QuizSection from './components/QuizSection.vue'
import AppFooter from './components/AppFooter.vue'
import ImagensSection from './components/ImagensSection.vue'

function scrollTo(elementId) {
const el = document.getElementById(elementId)
if (el) {
  el.scrollIntoView({ behavior: 'smooth' })
}
}
</script>

<style>
html {
scroll-behavior: smooth;
}
</style>