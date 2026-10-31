import { createApp } from 'vue'
import App from './App.vue'

// Estilos e Ícones do Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Instância do Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customTheme = {
  dark: false,
  colors: {
    primary: '#0288D1',
    secondary: '#00897B',
    accent: '#7B1FA2',
    background: '#F4F6F9',
    surface: '#FFFFFF',
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  }
})

createApp(App).use(vuetify).mount('#app')