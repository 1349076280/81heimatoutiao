import Vue from 'vue'
import App from './App.vue'
import router from './permission.js'
import ElementUI from 'element-ui'
import Component from './components/index'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'
import axios from './untils/axios.config'
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(Component)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
