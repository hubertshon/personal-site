import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Main from '../components/Main.vue'
import Contact from '../components/Contact.vue'
import Projects from '../components/Projects.vue';
// import Home from '../views/Home.vue'
// import Life from '../components/Life.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About

    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/life',
  //   name: 'Life',
  //   component: Life
  // },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
