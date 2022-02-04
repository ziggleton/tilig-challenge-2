<template>
  <header id="app_header">
    <div class="logo"><h4 class="page-title">Tilig</h4></div>
    <div class="menu">
      <ToggleMenuComponent></ToggleMenuComponent>
    </div>
  </header>
</template>

<script>
  import ToggleMenuComponent from "./ToggleMenu.Component.vue";
  export default {
    components: {
      ToggleMenuComponent,
    },
  };
</script>

<style lang="scss" scoped>
  #app_header {
    height: 54px;
    background: $bg-primary;
    color: $text-primary !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    .logo {
      flex: 1;
      padding-left: 1rem;
      margin-right: 1rem;
    }
    .menu {
      height: inherit;
      width: 48px;
      line-height: 3.375rem;
    }
  }
</style>
