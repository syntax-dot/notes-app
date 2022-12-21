<template>
  <div :class="$style.root">
    <h1>
      Заметки
    </h1>
    <div :class="$style.content">
      <AddNote @update="handleUpdate"/>
      <NotesGrid :notes="nones"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { AddNote } from '../components/AddNote'
import { NotesGrid } from '../components/NotesGrid'
import { noteStore } from '../store/notes.store'
import { Note } from '../types/Note'

const notes = ref<Note[]>(noteStore.load())

function handleUpdate(note: Note) {
  notes.value = [...notes.value.filter(it => it.id !== note.id), note]
}

watch(notes, noteStore.save)

const nones: Note[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Culpa, illo.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Augue mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac.',
  },
  {
    id: 2,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque. Augue mauris augue neque gravida in fermentum et. Senectus et netus et malesuada fames ac.',
  },
  {
    id: 3,
    title: 'It is a long established fact that a reader.',
    description: 'It is a long established fact that a reader will be distracted.It is a long established fact that a reader will be distracted.',
  },
  {
    id: 4,
    title: 'It is a long established fact that a reader.',
    description: 'It is a long established fact that a reader will be distracted.It is a long established fact that a reader will be distracted.',
  },
]
</script>

<style lang="scss" module>
.root {
  padding-top: 14rem;
  // margin-top: 14rem;
  margin-left: 211rem; // костыль для вёрстки
  // padding: 0 120rem;
}

.root,
.content {
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: max-content 1fr;
  margin-top: 24rem;
}
</style>
