import type { RouteRecordRaw } from 'vue-router'

export const mythicalRoutes: RouteRecordRaw[] = [
  {
    path: '/mythical-creatures',
    name: 'mythical',
    component: () => import('@/views/MythicalCreatures.vue'),
    meta: {
      title: 'Mythical Creatures',
      requiresAuth: false,
    },
  },
]
