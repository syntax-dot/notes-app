<template>
  <div :class="$style.root">
    <button :class="$style.open">
      Открыть
    </button>

    <button :class="$style.close">
      Удалить
    </button>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" module>
@import "../../../css/variables.scss";
.root {
  display: flex;
  justify-content: space-between;
  margin: 0 4px;
}

.open,
.close {
  height: 31px;
  width: 73px;
  font-size: 1.4rem;
  font-weight: 500;
  border-radius: 4px;
  background: transparent;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}

.open {
  border: 1px solid $action-open-btn;
  color: $action-open-btn;

  &:hover {
    background-color: $action-open-btn;
    color: #fff;
  }
}

.close {
  border: 1px solid $action-remove-btn;
  color: $action-remove-btn;

  &:hover {
    background-color: $action-remove-btn;
    color: #fff;
  }
}
</style>
