<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Note } from './types/Note'

const nones: Note[] = [
  {
    id: 1,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
  {
    id: 2,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
  {
    id: 3,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
  {
    id: 4,
    title: 'It is a long established fact that a reader will be distracted.',
    description: 'It is a long established fact that a reader will be distracted.',
  },
]
</script>

<style lang="scss" module>
.root,
.content {
  // max-width: 1390px;
  width: 1390px;
  height: 100%;
  margin: 0 auto;
}
</style>

<style lang="scss">
@import "../css/variables.scss";

:root {
  font-size: 62.5%;
}

#app,
* {
  margin: 0;
  padding: 0;
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 4rem;
  letter-spacing: -1.5px;
}

body {
  background-color: $main-bg-color;
  font-family: 'Inter', sans-serif;
}
</style>
