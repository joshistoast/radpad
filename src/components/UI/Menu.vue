<script setup lang="ts">

</script>

<template>
  <div class="rp-menu">
    <slot />
  </div>
</template>

<style>

.rp-menu {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5em;
  padding: 0.5em 0
}

</style>
