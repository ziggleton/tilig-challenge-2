<template>
  <section class="issue-list">
    <p class="issues-title">{{ state.title }}</p>
    <div class="issue-list-container">
      <issue-list-item-component
        v-for="issue in state.list"
        :key="issue.id"
        :issue="issue"
        >{{ issue }}</issue-list-item-component
      >
    </div>
  </section>
</template>

<script>
  import { reactive, computed } from "vue";
  import IssueListItemComponent from "./IssueListItemComponent.vue";
  export default {
    props: ["listData"],
    components: {
      IssueListItemComponent,
    },
    setup(props) {
      let state = reactive({
        title: computed(() => {
          return props.listData.title;
        }),
        list: computed(() => {
          return props.listData.issueList;
        }),
      });
      return {
        state,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .issue-list {
    margin-top: 1rem;
    .issues-title {
      color: $text-muted;
      margin-bottom: 1rem;
      font-weight: 500;
    }
    .issue-list-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
      grid-gap: 1rem;
      align-items: flex-start;
      grid-auto-flow: dense;
    }
  }
</style>
