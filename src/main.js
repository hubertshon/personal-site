import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false

//icons
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faFileDownload, faChevronCircleRight, faChevronCircleLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFileLines, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'


library.add(faGithubSquare, faLocationDot, faEnvelope, faLinkedin, faEnvelope, faFileLines, faFileDownload, faArrowAltCircleRight, faChevronCircleLeft, faChevronCircleRight, faChevronLeft, faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
