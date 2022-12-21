<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" module>
.root {
  height: 100%;
}
.content {
  // max-width: 1390rem;
  height: 100%;
  // margin: 0 auto;
}
</style>

<style lang="scss">
@import "../css/variables.scss";

:root {
  font-size: 6.25%;
}

#app,
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  cursor: pointer;
}

#app,
body,
html {
  height: 100%;
  width: 100%;
}

h1 {
  font-size: 40rem;
  letter-spacing: -1.5rem;
}

h2 {
  font-size: 16rem;
}

body {
  background-color: $main-bg-color;
  font-family: "Inter", sans-serif;
  font-size: 16rem;
}
</style>
