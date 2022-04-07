<script setup lang="ts">
import { toRefs } from 'vue'
import { Icon } from '@iconify/vue'
import { useSettings } from '../../stores/settings'
const settings = useSettings()
const { ...palette } = settings.getTheme?.palette

const props = defineProps<{
  icon?: string
  label: string
  active?: boolean
  disabled?: boolean
}>()
const { icon, label, active, disabled } = toRefs(props)

</script>

<template>
  <div
    class="rp-menu__item"
    :class="{
      'rp-menu__item--active': active,
      'rp-menu__item--disabled': disabled
    }"
  >
    <Icon v-if="icon" :icon="icon" class="mr-2" />
    <div class="rp-menu__item__label">{{ label }}</div>
    <slot />
  </div>
</template>

<style lang="postcss" scoped>

.rp-menu__item {
  @apply py-2 px-4 cursor-default rounded-lg transform-gpu font-semibold flex flex-row items-center;
  background: v-bind('palette.elementBg');
}
.rp-menu__item:hover {
  background: v-bind('palette.elementBgHover');
}
.rp-menu__item:active {
  @apply scale-95
}
.rp-menu__item--active,
.rp-menu__item--active:hover {
  background: v-bind('palette.accent');
}
.rp-menu__item--disabled {
  @apply opacity-50 pointer-events-none
}

</style>
