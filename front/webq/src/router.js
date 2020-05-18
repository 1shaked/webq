import Vue from 'vue'
import Router from 'vue-router'
// imports views
const Home = () => import('./views/Home.vue')
const Create = () => import('./views/Create.vue')
const Questionnaire = () => import('./views/Questionnaire.vue')
const EditPage = () => import('./views/EditPage.vue')
const PageNotFound = () => import('./views/PageNotFound.vue')
const AfterFilledWebQ = () => import('./views/AfterFilledWebQ.vue')
const Dashbored = () => import('./views/Dashbored.vue')
const Archive = () => import('./views/Archive.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: Questionnaire
    },
    {
      path: '/dashbored',
      name: 'dashbored',
      component: Dashbored
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path : '/PageNotFound',
      name : 'PageNotFound',
      component : PageNotFound
    },
    {
      path : '/AfterFilledWebQ',
      name : 'AfterFilledWebQ',
      component : AfterFilledWebQ
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
  ]
})
