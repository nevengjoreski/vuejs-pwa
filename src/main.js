// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store/store'

import iApp from './iApp'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.cyan.darken1, // #E53935
    secondary: colors.cyan.lighten5, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

// Vue.use(Vuetify, {
//   theme: {
//     primary: colors.purple.base,
//     secondary: colors.grey.darken1,
//     accent: colors.shades.black,
//     error: colors.red.accent3
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { iApp },
  template: '<iApp/>'
})
