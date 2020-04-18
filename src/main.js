import Vue from 'vue'
// BootstrapVue
import './plugins/BootstrapVue'

// Vue Font-Awesome
import './plugins/fontAwesome'

import App from './App.vue'
import router from './router'
import store from './store'
// Custom directives
import './directives'

// CSS global
import './assets/css/main.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init () {
      store.dispatch('oauth/getToken')
    }
  },
  // Hook created
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
