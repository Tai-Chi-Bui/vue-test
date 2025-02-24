import type { RouteRecordRaw } from 'vue-router'

export const mythicalRoutes: RouteRecordRaw[] = [
  {
    path: '/mythical-creatures',
    name: 'mythical',
    // component: () => import('@/views/MythicalView.vue'),
    redirect: '/',
    meta: {
      title: 'Mythical Creatures',
      requiresAuth: false,
    },
  },
]
