import Vue from 'vue'
import Router from 'vue-router'
import MyProducts from '../components/Products'
import MyContacts from '../components/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyProducts',
      component: MyProducts
    },
    {
      path: '/contacts',
      name: 'MyContacts',
      component: MyContacts
    }
  ],
  mode: 'history'
})
