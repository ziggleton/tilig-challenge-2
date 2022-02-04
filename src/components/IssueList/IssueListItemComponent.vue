<template>
  <div class="list-item" @click="state.changeEmoji()">
    <div class="emoji">
      <span :ref="state.emojiItem">{{ state.renderEmoji }}</span>
    </div>
    <div class="content">
      <h4 class="item-title">{{ state.issue.title }}</h4>
      <p v-if="state.issue.milestone">
        Milestone: {{ state.issue.milestone.title }}
      </p>
    </div>
  </div>
</template>

<script>
  import { reactive, computed, ref } from "vue";
  import { useStore } from "vuex";
  export default {
    props: ["issue"],
    setup(props) {
      const store = useStore();
      let state = reactive({
        emojiItem: computed(() => {
          return ref();
        }),
        setEmojis: computed(() => {
          return store.state.issues.setEmojis();
        }),
        emojiList: computed(() => {
          return store.state.issues.emojis;
        }),
        issue: computed(() => {
          return props.issue;
        }),
        randomEmoji: computed(() => {
          return state.emojiList[
            Math.floor(Math.random() * state.emojiList.length)
          ];
        }),
        changeEmoji: async () => {
          state.emojiItem.value.textContent =
            store.state.issues.emojis[
              Math.floor(Math.random() * store.state.issues.emojis.length)
            ].emoji;
          store.dispatch("updateIssue", {
            id: state.issue.id,
            emoji: state.emojiItem.value.textContent,
          });
        },
        renderEmoji: computed(() => {
          if (!state.setEmojis)
            return (
              state?.emojiItem?.value?.textContent || state.randomEmoji.emoji
            );
          const item = state.setEmojis.find((i) => i.id == state.issue.id);
          if (item) {
            return item.emoji;
          } else {
            return state.randomEmoji.emoji;
          }
        }),
      });

      return { state };
    },
  };
</script>

<style lang="scss" scoped>
  .list-item {
    background: $bg-primary;
    color: $text-primary;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    min-height: 90px;
    overflow: hidden;
    .emoji {
      width: 46px;
      background: $brand-primary;
      display: flex;
      padding: 0px 16px;
      flex-direction: row;
      align-items: center;
    }
    .content {
      padding: 8px;
      flex: 1;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
