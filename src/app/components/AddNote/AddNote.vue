<template>
  <div :class="$style.root">
    <div :class="$style.title">
      <h2>Заголовок</h2>
      <input :class="$style.input_title" type="text">
    </div>
    <div :class="$style.description">
      <h2>Описание</h2>
      <input :class="$style.input_description" type="text">
    </div>
    <AddButton/>
  </div>
</template>

<script lang="ts" setup>
import { AddButton } from '../AddButton'

</script>

<style lang="scss" module>
@import "../../../css/variables.scss";
.root {
  display: grid;
  min-width: 415px;
  gap: 20px;
  align-content: flex-start;
}

.input_title,
.input_description {
  margin-top: 10px;
  border: 1px solid $border-color;
  border-radius: 4px;
  font-size: 1.6rem;
}

.input_title {
  min-height: 36px;
  width: 100%;
  font-weight: 500;
}

.input_description {
  min-height: 60px;
  width: 100%;
}
</style>
