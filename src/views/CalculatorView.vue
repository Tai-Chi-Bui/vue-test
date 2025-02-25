<template>
  <div class="flex flex-col items-center justify-start mt-5 h-screen gap-5">
    <h1 class="text-2xl font-bold text-blue-600">Calculator</h1>
    <BaseButton variant="secondary" @click="handleClick">
      <template #leftIcon>
        <PlusCircleIcon class="w-4 h-4" />
      </template>
      <template #default> Hello </template>
    </BaseButton>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/base/button/button.vue'
import { PlusCircleIcon } from '@heroicons/vue/24/solid'
export default {
  components: {
    BaseButton,
    PlusCircleIcon,
  },
  setup() {
    return { PlusCircleIcon }
  },
  methods: {
    handleClick() {
      console.log('clicked')
    },
  },
}
</script>

<style scoped></style>
