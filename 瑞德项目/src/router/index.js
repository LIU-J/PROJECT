import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'

import place from '@/components/place'

import brand from '@/components/brand'
import course from '@/components/course'
import activity from '@/components/activity'
import mba from '@/components/mba'
import news from '@/components/news'
import reserve from '@/components/reserve'

import listDetail from '@/components/list-detail'
import activityDetail from '@/components/activity-detail'

import activitySignUp from '@/components/activity-signUp'
import activityForm from '@/components/activity-form'
import activitySignUpIndex from '@/components/activity-signUp-index'
import activitySignUpReg from '@/components/activity-signUp-reg'

import refreshMore from '@/components/common/refreshMore'

import reserveSucceed from '@/components/reserve-succeed'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/place',
      name: 'place',
      component: place
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/activity',
      name: 'activity',
      component: activity
    },
    {
      path: '/mba',
      name: 'mba',
      component: mba
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: reserve
    },
    {
      path: '/list/detail',
      name: 'listDetail',
      component: listDetail
    },
    {
      path: '/activity/detail',
      name: 'activityDetail',
      component: activityDetail
    },
    {
      path: '/activity/signUp',
      name: 'activitySignUp',
      component: activitySignUp
    },
    {
      path: '/activity/form',
      name: 'activityForm',
      component: activityForm
    },
    {
      path: '/activity/signUp-index',
      name: 'activitySignUpIndex',
      component: activitySignUpIndex
    },
    {
      path: '/activity/signUp-reg',
      name: 'activitySignUpReg',
      component: activitySignUpReg
    },
    {
      path: '/refreshMore',
      name: 'refreshMore',
      component: refreshMore
    },
    {
      path: '/reserve/succeed',
      name: 'reserveSucceed',
      component: reserveSucceed
    }
  ]
})
