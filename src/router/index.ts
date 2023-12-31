import { createRouter, createWebHistory } from 'vue-router'
import PlayView from "@/views/PlayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'play',
      component: PlayView
    },
    {
      path: '/rules',
      name: 'rules',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RulesView.vue')
    }
  ]
})

export default router
