import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import store from './store'
import * as VueTypedJs from 'vue-typed-js'
import VueRouter from 'vue-router';
import router from './router'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueTypedJs)
Vue.use(VueRouter);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
