import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Header from '@/components/login/components/Header'
import bg from'@/components/login/components/bg'


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        keepalive:true
      }
    },

    
  ]
})
