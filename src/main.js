/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import "@mdi/font/css/materialdesignicons.css";
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '../src/plugins/'

import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

registerPlugins(app)

app.use(router).use(vuetify).mount('#app')

