<template>
  <transition-group name="add" appear>
    <div :key="addedNote.id"
         :class="$style.root">
      <div :class="$style.title">
        <h2>Заголовок</h2>
        <input v-model="addedNote.title"
               :class="$style.input_title"
               type="text">
      </div>
      <div :class="$style.description">
        <h2>Описание</h2>
        <textarea ref="textarea"
                  v-model="addedNote.description"
                  :class="$style.input_description"
                  maxlength="1500"
                  @input="autoHeight"/>
      </div>

      <AddButton @click="handleClick"/>
    </div>
  </transition-group>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { noteStore } from '../../store/notes.store'
import { Note } from '../../types/Note'
import { AddButton } from '../Buttons/AddButton'
import { AddNoteEmits } from './AddNote.emits'

const emit = defineEmits<AddNoteEmits>()

const textarea = ref<HTMLTextAreaElement>()

const addedNote = ref<Note>({
  id: 0,
  title: '',
  description: '',
})

function autoHeight() {
  if (!textarea.value)
    return

  textarea.value.style.height = '1rem'
  textarea.value.style.height = `${textarea.value.scrollHeight}rem`
}

function handleClick() {
  if (addedNote.value.description.length < 6 || addedNote.value.title.length < 6)
    return

  emit('update', { ...addedNote.value, id: noteStore.generateId() })

  addedNote.value.id = 0
  addedNote.value.title = ''
  addedNote.value.description = ''
}
</script>

<style lang="scss" module>
.root {
  display: grid;
  min-width: 415rem;
  gap: 20rem;
  align-content: start;
}

.input_title,
.input_description {
  margin-top: 10rem;
  border: 1rem solid $border-color;
  border-radius: 4rem;
  font-size: 16rem;
  padding: 8rem;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: 1rem solid #000;
  }
}

.input_title {
  min-height: 36rem;
  width: 100%;
  font-weight: 600;
}

.input_description {
  min-height: 60rem;
  width: 100%;
  resize: none;
  // overflow: auto;
  overflow: hidden;
  word-wrap: break-word;
}

@media screen and (max-width: 1024px) {

  .root {
    min-width: 100%;
  }
}
</style>

<style>
.add-enter-active {
  animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.add-leave-active {
  animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}
</style>
