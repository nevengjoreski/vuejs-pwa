// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {store} from './store/store'
import moment from 'moment';
import * as firebase from 'firebase'
import iApp from './iApp'

//Components
import AlertComp from '@/components/Shared/Alert'

// Helpers
import colors from 'vuetify/es5/util/colors'
Vue.component('custom-alert', AlertComp)

Vue.use(Vuetify, {
  theme: {
    primary: colors.cyan.darken1, // #E53935
    secondary: colors.cyan.lighten5, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})

Vue.config.productionTip = false
Vue.prototype.$moment = moment();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { iApp },
  template: '<iApp/>',
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyAMwXjk7MEMw-6r3-oXCp-nOO-vGCQqZJo",
      authDomain: "vuejs-pwa-60fc0.firebaseapp.com",
      databaseURL: "https://vuejs-pwa-60fc0.firebaseio.com",
      projectId: "vuejs-pwa-60fc0",
      storageBucket: "vuejs-pwa-60fc0.appspot.com" //"gs://vuejs-pwa-60fc0.appspot.com/"
    })

    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.$store.dispatch('autoSignIn', user)
      }
    })

    this.$store.dispatch('loadMeetups')
  }
})
