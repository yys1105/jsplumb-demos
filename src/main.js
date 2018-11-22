import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import moduleEvent from './event/moduleEvent';
import * as filters from './utils/filters';
import components from './components'
import fetch from './utils/fetch'
import './plugins/element.js'

Vue.config.productionTip = false

let myPlugin = {}
myPlugin.install = function (vue, options) {
  vue.prototype.$event = moduleEvent;
  vue.prototype.$http = fetch;
}
Vue.use(myPlugin);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

components.forEach(component => Vue.component(component.name, component.instance))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')