import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowUp,
  faCaretDown,
  faCaretUp,
  faCircleCheck,
  faEllipsisVertical,
  faFire,
  faPencil,
  faPhone,
  faPlus,
  faTrash,
  faUser,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {BootstrapVue3 } from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

import router from '@/router'

library.add(faPhone, faFire, faXmark, faCircleCheck, faPlus, faPencil,faTrash, faArrowUp, faUser, faCopyright, faCaretUp, faCaretDown, faEllipsisVertical);
createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
