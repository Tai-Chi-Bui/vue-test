<template>
  <header class="flex justify-between items-center h-16 bg-gray-800 text-white p-4">
    <nav class="flex items-center gap-3">
      <RouterLink
        v-for="route in navigationRoutes"
        :key="route.path"
        :to="route.path"
        class="text-white hover:text-red-300 flex items-center"
      >
        <component v-if="route.icon" :is="route.icon" class="h-6 w-6" />
        <span v-if="route.name">{{ route.name }}</span>
      </RouterLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { HomeIcon } from '@heroicons/vue/24/solid'

export default {
  data() {
    return {
      navigationRoutes: [
        {
          path: '/',
          icon: HomeIcon,
          name: '',
        },
        {
          path: '/mythical-creatures',
          name: 'Mythical',
        },
        {
          path: '/calculator',
          name: 'Calculator',
        },
        {
          path: '/profile',
          name: 'Profile',
        },
      ],
    }
  },
}
</script>
