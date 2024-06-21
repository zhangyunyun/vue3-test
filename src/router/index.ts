import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VoiceVideo from '../views/VoiceVideo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  // {
  //   path: '/',
  //   name: 'voicevideo',
  //   component: VoiceVideo
  //   //component: () => import(/* webpackChunkName: "voicevideo" */ '../views/VoiceVideo.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
