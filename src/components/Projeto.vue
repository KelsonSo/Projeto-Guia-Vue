<template>
<v-container class="py-12">
  <v-row align="center">
    <v-col cols="12" md="9">
      <h2 class="text-h4 font-weight-bold mb-4">Sobre o Projeto</h2>
      <v-window
      v-model="window"
      show-arrows>
      <v-window-item
        v-for="n in length"
        :key="n">
        <v-card class="d-flex justify-center align-center" height="200px">
          <span class="text-display-large">Card {{ n }}</span>
        </v-card>
      </v-window-item>
    </v-window>
    </v-col>
    <v-col cols="12" md="3" class="text-center">
      <v-card class="pa-8 rounded-xl" color="primary" variant="tonal">
        <v-icon size="64" icon="mdi-heart-outline" class="mb-2"></v-icon>
        <h3 class="text-h6 font-weight-bold">Inclusão na Prática</h3>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
    }),
  }
</script>