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
  border-radius: 6rem;
  min-height: 38rem;
  min-width: 100rem;
  color: #fff;
  font-size: 16rem;
  border: 1rem solid rgba(0, 0, 0, 0);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    border: 1rem solid rgba(0, 0, 255, 1);
    box-shadow: 0rem 0rem 8rem 0rem rgba(0, 0, 255, 0.2);
  }
}
</style>
