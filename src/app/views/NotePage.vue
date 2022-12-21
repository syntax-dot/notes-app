<template>
  <div v-if="note"
       :class="$style.root">
    <a :class="$style.link"
       @click="$router.push('/')">Главная <span>/ {{ note.title }}</span></a>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { noteStore } from '../store/notes.store'
import { Note } from '../types/Note'

interface Props {
  noteId: number
}

// let note: Note

const props = defineProps<Props>()

// onMounted(() => {
//   note = noteStore.load().find(v => v.id === props.noteId)
// })
const note: Note = noteStore.load().find(v => v.id === props.noteId)

console.log('id', props.noteId) // ID
console.log('note', note) // undefined
</script>

<style lang="scss" module>
.root {
  padding: 50rem 0;
  height: 100%;
  max-width: 1240rem;
  width: 100%;
  margin: 0 auto;
}

.link {
  font-size: 16rem;
  color: $link-color;
  cursor: pointer;
}
</style>
