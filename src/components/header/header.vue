<template>
  <header class="flex justify-between items-center h-16 bg-gray-800 text-white p-4">
    <nav class="flex items-center gap-3">
      <RouterLink to="/" class="text-white hover:text-red-300">
        <HomeIcon class="h-6 w-6" />
      </RouterLink>
      <RouterLink to="/mythical-creatures" class="text-white hover:text-red-300"
        >Mythical</RouterLink
      >
      <RouterLink to="/profile" class="text-white hover:text-red-300">Profile</RouterLink>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
import { HomeIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'Header', // Defines the component name that appears in Vue DevTools
  components: {
    RouterLink, // Makes RouterLink component available to use in template
    HomeIcon, // Makes HomeIcon component available to use in template
  },
}
</script>
