<template>
  <div :class="$style.root">
    <div>
      <h1 :class="$style.title">
        Заметки
      </h1>
      <AddNote/>
    </div>

    <NotesGrid/>
  </div>
</template>

<script lang="ts" setup>
import { AddNote } from '../components/AddNote'
import { NotesGrid } from '../components/NotesGrid'
</script>

<style lang="scss" module>
.root {
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 0 120px;
}
</style>
