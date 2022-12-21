<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <div>Заголовок</div>
      <input type="text">
    </div>
    <div :class="$style.description">
      <div>Описание</div>
      <input type="text">
    </div>
    <AddButton/>
  </div>
</template>

<script lang="ts" setup>
import { AddButton } from '../AddButton'

</script>

<style lang="scss" module>
.root {

}
</style>
