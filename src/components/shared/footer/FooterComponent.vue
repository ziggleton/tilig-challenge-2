<template>
  <footer id="app_footer">
    <small class="colophon">GitLab issues challenge</small>
  </footer>
</template>

<script setup></script>

<style lang="scss">
#app_footer {
  background: $black;
  height: 2.25rem;
  width: 100vw;
  position: fixed;
  bottom: 0;
  line-height: 2.25rem;
  text-align: center;

  .colophon {
    color: $white;
  }
}
</style>
