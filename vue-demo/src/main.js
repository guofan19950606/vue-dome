import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/comment.css'
import {post,get} from './api/requset'
import iView from 'iview'    //引入ivew库
import '../node_modules/iview/dist/styles/iview.css'


Vue.prototype.$post = post
Vue.prototype.$get = get

Vue.use(ElementUI);
Vue.use(iView);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

