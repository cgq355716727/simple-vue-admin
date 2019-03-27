import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '@/view/home'

import classes from '@/view/class/classes'
import student from '@/view/student/student'
import tree from '@/view/tree'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
          path: '/classes',
          component: classes,
          name: '班级管理'
        },
        {
          path: '/student',
          component: student,
          name: '学生管理'
        }
      ]
    }, {
      path: '/home',
      name: 'Home',
      component: Home

    }

  ]

})
