import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Users from './components/Users.vue'
import MainBody from './components/MainBody.vue'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/users', component: Users },
  { path: '/', component: MainBody },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
