<script setup lang="ts">
import { useIcon } from '../helpers/icons'

const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
  sm: {
    type: Boolean,
    default: false
  },
  lg: {
    type: Boolean,
    default: false
  },
})

const icon = useIcon(props.name)

</script>

<template>
  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-html="icon" /></span>
</template>

<style>

</style>
