import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import Home from './views/Home.vue'
import systenMseeage from './components/content/systemMessage/systenMseeage.vue'
import documentation from './components/content/documentation/documentation.vue'
import Content from './components/content/userManagement/Content.vue'
import roleManagement from './components/content/roleManagement/roleManagement.vue'
import departmentManagement from './components/content/departmentManagement/departmentMangement.vue'
import DictionaryManaged from './components/content/DictionaryManaged/DictionaryManaged.vue'
import menuManagement from './components/content/menuManagement/menuManagement.vue'
import logging from './components/content/logging/logging.vue'
import businessDiary from './components/content/businessDiary/businessDiary.vue'
import monitoring from './components/content/monitoring/monitoring.vue'
import notification from './components/content/notification/notification.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/systenMseeage',
          name: 'systenMseeage',
          component: systenMseeage,
        },
        {
          path: '/documentation',
          name: 'documentation',
          component: documentation,
        },
        {
          path: '/Content',
          name: 'Content',
          component: Content
        },
        {
          path: '/roleManagement',
          name: 'roleManagement',
          component: roleManagement
        },
        {
          path: '/departmentMangement',
          name: 'departmentManagement',
          component: departmentManagement 
        },
        {
          path: '/DictionaryManaged',
          name: 'DictionaryManaged',
          component: DictionaryManaged
        },
        {
          path: '/menuManagement',
          name: 'menuManagement',
          component: menuManagement
        },
        {
          path: '/logging',
          name: 'logging',
          component: logging
        },
        {
          path: '/businessDiary',
          name: 'businessDiary',
          component: businessDiary
        },
        {
          path: '/monitoring',
          name: 'monitoring',
          component: monitoring
        },
        {
          path: '/notification',
          name: 'notification',
          component: notification
        },
      ]},
    
  ]
});



