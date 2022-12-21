<template>
  <div :class="$style.root">
    <div>*</div>
    <div>*</div>
    <div>*</div>
    <div>*</div>
    <div>*</div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
.root {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
</style>
