import { createRouter, createWebHistory } from 'vue-router'
import store        from '@/store'
import HomeView     from '../views/HomeView.vue'
import Detail       from '../views/Detail.vue'
import AboutView    from '../views/AboutView.vue'
import Profile      from '../views/Profile.vue'
import Add          from '../views/Add.vue'
import Login        from '../views/Login.vue'
import Logout       from '../views/Logout.vue'
import Register     from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article/:slug',
    name: 'detail',
    component: Detail
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { redirectAuth: true },
     
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { redirectAuth: true },
     
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
     meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: '/add',
    name: 'add',
    component: Add,
    meta: { requiresAuth: true },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.isAuthenticated) {
      next()
    } else {
      next('./login')
    }
  }
  else if (to.matched.some(record => record.meta.redirectAuth)){
    if (!store.state.isAuthenticated) {
      next()
    } else {
      next('./profile')
    }
  } 
  else {
    next()
  }
})

export default router
