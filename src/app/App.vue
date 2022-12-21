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

}
.content {
  // max-width: 1390px;
  height: 100%;
  // margin: 0 auto;
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
  font-size: 4rem;
  letter-spacing: -1.5px;
}

body {
  background-color: $main-bg-color;
  font-family: 'Inter', sans-serif;
}
</style>
