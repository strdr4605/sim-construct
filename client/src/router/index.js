import Vue from 'vue'
import Router from 'vue-router'
import MyProducts from '../components/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: MyProducts
    }
  ],
  mode: 'history'
})
