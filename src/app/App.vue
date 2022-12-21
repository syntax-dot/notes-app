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

body {
  background-color: $main-bg-color;
}
</style>
