<template>
<v-footer class="bg-prime text-center d-flex flex-column pa-6">
  <div>
    <v-btn icon="mdi-heart" variant="text" color="red"></v-btn>
    <v-btn icon="mdi-github" variant="text" href="https://github.com/KelsonSo/ProjetoTea" target="_blank"></v-btn>
  </div>

  <div class="pt-2 text-body-2 text-medium-emphasis">
    <strong>Projeto TEA</strong> — Promovendo a Inclusão e o Respeito através da Informação.
  </div>

  <v-divider class="my-4 w-100"></v-divider>

  <div class="text-caption text-medium-emphasis">
    {{ new Date().getFullYear() }} — Desenvolvido com Vue 3 + Vuetify
  </div>
</v-footer>
</template>