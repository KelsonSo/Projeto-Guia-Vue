<template>
<v-sheet color="grey-lighten-4" class="py-12">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8" class="text-center mb-6">
        <h2 class="text-h4 font-weight-bold mb-2">Área da Pesquisa</h2>
        <p class="text-subtitle-1 text-medium-emphasis">
          Seção ideal para links úteis, referências ou ferramentas de busca.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-text-field
          label="Pesquisar conteúdos..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          bg-color="surface"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</v-sheet>
</template>

<script setup>
// Lógica de pesquisa, se quiser deixar dinâmica depois
</script>