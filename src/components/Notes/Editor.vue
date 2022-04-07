<script setup lang="ts">

const props = defineProps<{
  noteId: string
}>()

</script>

<template>
  <div>
    {{ noteId }}
  </div>
</template>
