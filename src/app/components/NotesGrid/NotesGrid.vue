<template>
  <div :class="$style.root">
    <div v-for="note in notes"
         :key="note.id"
         :class="$style.note">
      <h1 :class="$style.title">
        {{ note.title }}
      </h1>
      <div :class="$style.description">
        {{ note.description }}
      </div>
      <ActionsButtons :id="note.id"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ActionsButtons } from '../Buttons/ActionsButtons'
import { NotesGridProps } from './NotesGrid.props'

defineProps<NotesGridProps>()
</script>

<style lang="scss" module>
@import "../../../css/variables.scss";
.root {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 24px;
  margin-left: 26px;
}

.note {
  display: grid;
  grid-template-rows: repeat(3, max-content);
  border: 1px solid $border-color;
  border-radius: 6px;
  align-content: space-between;
  height: 100%;
  max-height: 235px;
  max-width: 270px;
  padding: 16px;
  box-sizing: border-box;
  transition: 0.3s ease-in-out;
  gap: 12px;

  &:hover {
    border: 1px solid #000;
  }
}

.title {
  font-size: 2rem;
  font-weight: 600;
}

.description {
  font-size: 1.6rem;
  line-height: 25px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
