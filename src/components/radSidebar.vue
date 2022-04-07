<script setup lang="ts">
import { useSettings } from '../stores/settings'
const settings = useSettings()
const { ...palette } = settings.getTheme?.palette

</script>

<template>
  <div class="rp-sidebar">
    <div class="rp-sidebar__head" v-if="!!$slots.sup || !!$slots.title || !!$slots.supAction">
      <div class="rp-sidebar__sup" v-if="!!$slots.sup"><slot name="sup" /></div>
      <div class="rp-sidebar__title" v-if="!!$slots.title"><slot name="title" /></div>
    </div>
    <div class="rp-sidebar__body"><slot /></div>
    <div class="rp-sidebar__foot"><slot name="foot" /></div>
  </div>
</template>

<style lang="postcss" scoped>

.rp-sidebar {
  @apply grid grid-cols-1 gap-4 flex-none w-80 px-6 pt-16 pb-8 min-h-full content-start;
  background: v-bind('palette.foreground');
}
.rp-sidebar__sup,
.rp-sidebar__sup--action,
.rp-sidebar__title {
  @apply font-extrabold cursor-default
}
.rp-sidebar__sup {
  @apply mb-1 leading-none inline-block px-2 py-1 -ml-2 rounded-full;
}
.rp-sidebar__sup {
  color: v-bind('palette.muted');
}
.rp-sidebar__sup--action {
  color: v-bind('palette.primary');
}
.rp-sidebar__sup--action:hover {
  background: v-bind('palette.elementBg');
}
.rp-sidebar__title {
  @apply text-2xl leading-none
}

</style>
