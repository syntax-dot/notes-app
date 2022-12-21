<template>
  <div :class="$style.root">
    <h1>
      Заметки
    </h1>
    <div :class="$style.content">
      <AddNote @update="handleUpdate"/>
      <NotesGrid v-if="notes"
                 :notes="notes"
                 @remove="handleRemove"/>
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
  notes.value = [...notes.value.filter(v => v.id !== note.id), note]
}

function handleRemove(removedId: number) {
  notes.value = [...notes.value.filter(v => v.id !== removedId)]
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
  padding: 14rem 40px;
  // padding: 14px 210px; // как на макете
  max-width: 1390rem;
  margin: 0 auto;
  box-sizing: border-box;
}

.root,
.content {
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: max-content 1fr;
  margin: 24rem 0;
  gap: 26px;
}

@media screen and (max-width: 1024px) {

  .content {
    grid-template-columns: 1fr;
  }

}

@media screen and (max-width: 375px) {

  .root {
      padding: 14rem 14px;
  }

}
</style>
