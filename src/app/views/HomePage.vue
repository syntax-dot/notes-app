<template>
  <div :class="$style.root">
    <h1>
      Заметки
    </h1>
    <div :class="$style.content">
      <AddNote @update="handleUpdate"/>
      <NotesGrid v-if="notes"
                 :notes="notes"
                 @update="handleUpdate"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { AddNote } from '../components/AddNote'
import { NotesGrid } from '../components/NotesGrid'
import { noteStore } from '../store/notes.store'
import { Note } from '../types/Note'

const notes = ref<Note[]>(noteStore.load())

function handleUpdate(note: Note) {
  notes.value = [...notes.value, note]
}

onMounted(() => {
  if (!notes.value.length) {
    notes.value = [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Culpa, illo.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      },
      {
        id: 2,
        title: 'It is a long established fact that a reader will be distracted.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      },
      {
        id: 3,
        title: 'It is a long established fact that a reader.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      },
      {
        id: 4,
        title: 'It is a long established fact that a reader.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      },
    ]
  }
})

watch(notes, noteStore.save)
</script>

<style lang="scss" module>
.root {
  padding-top: 14rem;
  // margin-top: 14rem;
  margin-left: 211rem; // костыль для вёрстки
  // padding: 0 120rem;
  overflow: hidden;
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
