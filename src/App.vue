<template>
  <app-header-component></app-header-component>
  <div class="main-content-wrapper">
    <div v-if="isLoading">loading</div>
    <div v-else>
      <h3 class="page-title">Gitlab Issues Emoji</h3>
      <issue-list-component
        v-bind:listData="state.issuesWithMilestones"
      ></issue-list-component>
      <issue-list-component
        v-bind:listData="state.issuesWithOutMilestones"
      ></issue-list-component>
    </div>
  </div>
  <footer-component />
</template>

<script>
  import { useStore } from "vuex";
  import { computed, reactive, onBeforeMount, onMounted, ref } from "vue";
  import AppHeaderComponent from "./components/shared/appheader/AppHeaderComponent.vue";
  import FooterComponent from "./components/shared/footer/FooterComponent.vue";
  import IssueListComponent from "./components/IssueList/IssueListComponent.vue";

  export default {
    name: "App",
    components: {
      AppHeaderComponent,
      FooterComponent,
      IssueListComponent,
    },
    setup() {
      const store = useStore();
      let isLoading = ref(true);
      let state = reactive({});

      onBeforeMount(async () => {
        await store.dispatch("getIssues");
      });

      onMounted(async () => {
        isLoading.value = false;

        state.issues = computed(() => {
          return store.state.issues.issueList;
        });

        state.issuesWithOutMilestones = computed(() => {
          let list = store.state.issues.issueList.filter((issue) => {
            if (issue.milestone == null) {
              return issue;
            }
          });
          return { issueList: list, title: "Issues without milestones" };
        });

        state.issuesWithMilestones = computed(() => {
          let newlist = store.state.issues.issueList.filter((issue) => {
            if (issue.milestone != null) {
              return issue;
            }
          });
          return { issueList: newlist, title: "Issues with milestones" };
        });
      });

      return {
        state,
        isLoading,
      };
    },
  };
</script>

<style lang="scss"></style>
