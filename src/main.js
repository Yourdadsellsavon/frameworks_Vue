import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* Import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* Import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Import specific icons */
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
/* Add icons to the library */
library.add(faArrowUp)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

// createApp(App).mount('#app')
