<template>
  <div :class="$style.root">
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
                @input="autoHeight"/>
    </div>
    <AddButton @click="handleClick"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Note } from '../../types/Note'
import { AddButton } from '../AddButton'

const textarea = ref<HTMLTextAreaElement>()

const addedNote = ref<Note>({
  id: 0,
  title: '',
  description: '',
})

function autoHeight() {
  if (!textarea.value)
    return

  textarea.value.style.height = `${textarea.value.scrollHeight}px`
}

function handleClick() {

}
</script>

<style lang="scss" module>
@import "../../../css/variables.scss";
.root {
  display: grid;
  min-width: 415px;
  gap: 20px;
  align-content: flex-start;
}

.input_title,
.input_description {
  margin-top: 10px;
  border: 1px solid $border-color;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 8px;
  box-sizing: border-box;
}

.input_title {
  min-height: 36px;
  width: 100%;
  font-weight: 500;
}

.input_description {
  min-height: 60px;
  width: 100%;
  resize : none;
  outline: none;
  overflow-y: auto;
  overflow: hidden;
  word-wrap: break-word;
}
</style>
