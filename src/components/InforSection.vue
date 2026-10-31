<template>
<v-container class="py-12">
  <div class="text-center mb-8">
    <h2 class="text-h4 font-weight-bold primary--text">Módulo Educacional e Informações</h2>
    <p class="text-body-1 text-medium-emphasis">Explore os tópicos essenciais sobre o Transtorno do Espectro Autista (TEA)</p>
  </div>

  <!-- Lista de Cards Informativos -->
  <v-row>
    <v-col v-for="article in filteredArticles" :key="article.id" cols="12" sm="6" md="4">
      <v-card elevation="2" class="h-100 d-flex flex-column rounded-lg">
        <v-card-item>
          <template v-slot:prepend>
            <v-avatar color="primary" variant="tonal" class="mr-3">
              <v-icon :icon="article.icon"></v-icon>
            </v-avatar>
          </template>
          <v-card-title class="text-wrap font-weight-bold">{{ article.title }}</v-card-title>
          <v-card-subtitle>{{ article.category }}</v-card-subtitle>
        </v-card-item>

        <v-card-text class="flex-grow-1 text-medium-emphasis">
          {{ article.summary }}
        </v-card-text>

        <v-card-actions class="pa-4 pt-0">
          <v-btn color="primary" variant="text" block append-icon="mdi-arrow-right" @click="openArticle(article)">
            Ler Artigo Completo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <!-- Modal para Leitura Completa -->
  <v-dialog v-model="dialog" max-width="600">
  <v-card v-if="activeArticle" class="rounded-lg">
    <v-card-title class="d-flex align-center bg-primary text-white pa-4 text-wrap">
      <v-icon :icon="activeArticle.icon" class="mr-3"></v-icon>
      {{ activeArticle.title }}
    </v-card-title>
    <v-card-text class="pa-6 text-body-1">
      <p>{{ activeArticle.fullContent }}</p>
    </v-card-text>
    <v-card-actions class="pa-4 pt-0">
      <v-spacer></v-spacer>
      <v-btn color="primary" variant="flat" @click="dialog = false">Fechar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const selectedTag = ref('Todos')
const dialog = ref(false)
const activeArticle = ref(null)

const articles = ref([
{
id: 1,
title: 'O que é o TEA?',
category: 'Diagnóstico',
icon: 'mdi-brain',
summary: 'O Transtorno do Espectro Autista é uma condição do neurodesenvolvimento com características específicas de comunicação e comportamento.',
fullContent: 'O Transtorno do Espectro Autista (TEA) é uma condição de desenvolvimento neurológico caracterizada por alterações na comunicação, na interação social e pelo aparecimento de padrões de comportamento repetitivos e de interesses restritos. <h/> Por ser um "espectro", cada pessoa apresenta um conjunto único de características e necessidades. Algumas pessoas necessitam de suporte contínuo para atividades diárias, enquanto outras vivem de forma totalmente autônoma. O diagnóstico precoce e as intervenções terapêuticas multidisciplinares são fundamentais para o desenvolvimento integral do indivíduo.'
},
{
id: 2,
title: 'Direitos da Pessoa com TEA',
category: 'Direitos',
icon: 'mdi-scale-balance',
summary: 'Conheça a Lei Berenice Piana e as garantias legais no Brasil para saúde, educação e prioridade de atendimento.',
fullContent: 'No Brasil, a Lei 12.764/2012 equipara a pessoa com TEA à pessoa com deficiência para todos os efeitos legais, garantindo acesso prioritário, acompanhante especializado na escola e atendimento multidisciplinar no SUS.'
},
{
id: 3,
title: 'Acomodações Sensoriais',
category: 'Inclusão',
icon: 'mdi-ear-hearing',
summary: 'Entenda como estímulos sonoros, luminosos e táteis afetam pessoas autistas e como criar ambientes mais acolhedores.',
fullContent: 'Muitas pessoas no espectro possuem hipersensibilidade sensorial. Reduzir barulhos excessivos, disponibilizar protetores auriculares e ajustar a iluminação são medidas simples que fazem grande diferença na inclusão.'
},
{
id: 4,
title: 'Rede de Apoio Familiar',
category: 'Família',
icon: 'mdi-account-group',
summary: 'A importância do cuidado mental com pais, cuidadores e irmãos de pessoas no espectro autista.',
fullContent: 'A rotina de diagnósticos e terapias pode ser desgastante. Grupos de apoio e acompanhamento psicológico para os cuidadores garantem um ambiente saudável para o desenvolvimento de toda a família.'
},
{
  id: 5,
  title: 'Ambiente Sensorial e Acessibilidade em Escolas',
  category: 'Inclusão',
  readTime: '5 min',
  color: 'warning',
  icon: 'mdi-school-outline',
  summary: 'Estratégias para adaptar salas de aula e espaços públicos reduzindo sobrecargas sensoriais.',
  fullContent: `Muitas pessoas no espectro apresentam hipersensibilidade ou hiposensibilidade sensorial.\n\nPara criar um ambiente verdadeiramente inclusivo na escola ou trabalho:\n• Disponibilize espaços calmos para autorregulação quando houver crises sensoriais.\n• Utilize comunicação visual (rotinas ilustradas com pictogramas).\n• Permita o uso de abafadores de ruído em ambientes barulhentos.`
}
])

const filteredArticles = computed(() => {
return articles.value.filter(art => {
const matchesSearch = art.title.toLowerCase().includes(search.value.toLowerCase()) || 
                      art.summary.toLowerCase().includes(search.value.toLowerCase())
const matchesTag = selectedTag.value === 'Todos' || art.category === selectedTag.value
return matchesSearch && matchesTag
})
})

function openArticle(article) {
activeArticle.value = article
dialog.value = true
}
</script>