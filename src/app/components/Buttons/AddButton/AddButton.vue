<template>
  <div :class="$style.root">
    <button :class="$style.btn">Добавить</button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
@import "../../../../css/variables.scss";
.btn {
  background-color: $add-btn;
  border-radius: 6px;
  min-height: 38px;
  min-width: 100px;
  color: #fff;
  font-size: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(0, 0, 255, 1);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 255, 0.2);
  }
}
</style>
