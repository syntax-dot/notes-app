<template>
  <div :class="$style.root">
    <div>
      <router-link :class="$style.link"
                   slots="button"
                   :to="{ name: 'note', params: { noteId: note.id } }">
        <button :class="$style.open">
          Открыть
        </button>
      </router-link>
    </div>

    <button :class="$style.close"
            @click="handleRemove(note.id)">
      Удалить
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ActionsButtonsProps, ActionsButtonsEmits } from './ActionsButtons.props'

defineProps<ActionsButtonsProps>()
const emit = defineEmits<ActionsButtonsEmits>()

function handleRemove(id: number) {
  emit('remove', id)
}
</script>

<style lang="scss" module>
.root {
  display: flex;
  justify-content: space-between;
  margin: 0 4rem;
}

.open,
.close {
  height: 31rem;
  width: 73rem;
  font-size: 14rem;
  font-weight: 500;
  border-radius: 4rem;
  background: transparent;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
}

.open {
  border: 1rem solid $action-open-btn;
  color: $action-open-btn;

  &:hover {
    background-color: $action-open-btn;
  }
}

.close {
  border: 1rem solid $action-remove-btn;
  color: $action-remove-btn;

  &:hover {
    background-color: $action-remove-btn;
  }
}
</style>
