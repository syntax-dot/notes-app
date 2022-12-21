<template>
  <div :class="$style.root">
    <h1>
      Заметки
    </h1>
    <div :class="$style.content">
      <AddNote/>
      <NotesGrid :notes="nones"/>
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
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Culpa, illo.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Augue mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac.',
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
  margin-top: 14px;
  margin-left: 211px; // костыль для вёрстки
  // padding: 0 120px;
}

.root,
.content {
  // height: 100%;
}

.content {
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-top: 24px;
}
</style>
