<template>
  <div :class="$style.root">
    <h1>
      Заметки
    </h1>
    <div :class="$style.content">
      <AddNote/>
      <NotesGrid/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { AddNote } from '../components/AddNote'
import { NotesGrid } from '../components/NotesGrid'
import { Note } from '../types/Note'

const nones: Note[] = [
  {
    id: 1,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
  {
    id: 2,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
  {
    id: 3,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
  {
    id: 4,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
]
</script>

<style lang="scss" module>
.root {
  // padding: 0 120px;
}

.root,
.content {
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-top: 24px;
}
</style>
