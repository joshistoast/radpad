<script setup lang="ts">
import { useSettings } from './stores/settings'

const settings = useSettings()
const theme = settings.getTheme
const { ...palette } = settings.getTheme?.palette

</script>

<template>
  <div
    class="app"
  >
    <router-view />
  </div>
</template>

<style lang="postcss" scoped>

.app {
  @apply min-h-screen;
  background: v-bind('palette.background');
  color: v-bind('palette.text');
}

</style>
