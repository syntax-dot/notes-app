<template>
  <div v-if="note"
       :class="$style.root">
    <a :class="$style.link"
       @click="$router.push('/')">Главная</a>
    <span :class="$style.inactive_link"> / {{ note.title }}</span>

    <div :class="$style.info">
      <h1 :class="$style.title">
        {{ note.title }}
      </h1>

      <div :class="$style.description">
        {{ note.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { noteStore } from '../store/notes.store'
import { Note } from '../types/Note'

interface Props {
  noteId: string
}

// let note: Note

const props = defineProps<Props>()

// onMounted(() => {
//   // note = noteStore.load().find(v => v.id === props.noteId)
//   console.log('type', typeof (props.noteId))
// })
const note: Note = noteStore.load().find(v => v.id === +props.noteId)!
</script>

<style lang="scss" module>
.root {
  padding: 50rem 0;
  height: 100%;
  max-width: 1240rem;
  width: 100%;
  margin: 0 auto;
}

.link,
.inactive_link {
  font-size: 16rem;
  font-weight: 600;
}

.link {
  color: $link-color;
  cursor: pointer;
  border-bottom: 1px solid $link-color;
}

.inactive_link {
  color: rgb(133, 133, 133);
  cursor: default;
}

.info {
  display: grid;
  gap: 24px;
  padding: 16px 0;
}

.description {
  line-height: 25px;
}
</style>
