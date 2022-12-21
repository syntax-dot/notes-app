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
