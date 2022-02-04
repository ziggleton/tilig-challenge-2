<template>
  <div class="toggle-menu" :class="state.menuClass" @click="state.toggleMenu()">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="menu-content" :class="state.menuClass">
    <div class="menu-head">
      <h4 class="page-title white">Menu</h4>
    </div>
  </div>
</template>

<script>
  import { reactive, computed } from "vue";
  export default {
    setup() {
      const state = reactive({
        isOpen: false,
        menuClass: computed(() => {
          if (!state.isOpen) return null;
          return "open";
        }),
        toggleMenu: () => {
          state.isOpen = !state.isOpen;
        },
      });
      return {
        state,
      };
    },
  };
</script>

<style lang="scss">
  .toggle-menu {
    pointer-events: auto;
    position: absolute;
    top: 1rem;
    cursor: pointer;
    z-index: 1;
    height: 20px;
    &:hover {
      cursor: pointer;
    }

    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;
      pointer-events: none;
      background: $white;
      border-radius: 3px;
      z-index: 1;
      transform-origin: 4px 0px;
      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }
    span:first-child {
      transform-origin: 0% 0%;
    }
    span:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }
  .toggle-menu.open > span {
    opacity: 1;
    transform: rotate(-45deg) translate(-9px, -4px);
    background: $white;
  }

  .toggle-menu.open > span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  .toggle-menu.open > span:nth-last-child(2) {
    transform: rotate(45deg) translate(-12px, -1px);
  }
  .menu-content {
    background: $black;
    border-radius: 0.3125rem;
    border: 0.0625rem solid $black;
    height: auto;
    min-width: 23.4375rem;
    opacity: 0;
    padding: 0.5rem;
    position: absolute;
    right: 0.5em;
    top: 62px;
    transform: translate(110%, 0);
    z-index: 10000;
    animation: slideOut 0.5s;
  }
  .menu-content.open {
    transform: translate(0, 0);
    animation: slidein 0.5s;
    opacity: 1;
  }

  @keyframes slidein {
    from {
      transform: translateX(110%);
    }

    to {
      transform: translateX(0%);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(110%);
    }
  }
</style>
