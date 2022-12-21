<template>
  <div v-if="notes"
       :class="$style.root">
    <transition-group name="notes" appear>
      <div v-for="note in notes"
           :key="note.id"
           :class="$style.note">
        <h1 :class="$style.title">
          {{ note.title }}
        </h1>
        <div :class="$style.description">
          {{ note.description }}
        </div>
        <ActionsButtons :id="note.id"
                        @remove="handleRemove"/>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { ActionsButtons } from '../Buttons/ActionsButtons'
import { NotesGridEmits, NotesGridProps } from './NotesGrid.props'

const props = defineProps<NotesGridProps>()
const emit = defineEmits<NotesGridEmits>()

function handleRemove(id: number) {
  emit('update', props.notes.filter(note => note.id === id))
}
</script>

<style lang="scss" module>
.root {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 24rem;
  margin-left: 26rem;
  align-content: start;
}

.note {
  display: grid;
  grid-template-rows: repeat(3, max-content);
  border: 1rem solid $border-color;
  border-radius: 6rem;
  align-content: space-between;
  height: 100%;
  max-height: 235rem;
  max-width: 270rem;
  padding: 16rem;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  gap: 12rem;

  &:hover {
    border: 1rem solid #000;
  }
}

.title {
  font-size: 20rem;
  font-weight: 600;
}

.description {
  font-size: 16rem;
  line-height: 25rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

<style>
.notes-enter-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.notes-leave-active {
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}
</style>
