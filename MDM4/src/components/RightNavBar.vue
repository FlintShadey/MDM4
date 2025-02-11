<template>
  <v-navigation-drawer
    permanent
    app
    color="#3281a8"
    class="rounded"
    location="right"
    width="250"
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <v-list>
      <!-- Search area -->
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-model="searchQuery"
            label="Search"
            clearable
            prepend-icon="mdi-magnify"
            @keyup.enter="doSearch"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import emitter from "@/eventBus";

export default {
  name: "RightNavBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    doSearch() {
      console.log("Searching for:", this.searchQuery);
      emitter.emit("search", this.searchQuery.trim());
    }
  }
};
</script>

<style scoped>
.v-list-item {
  padding: 12px 16px;
}
</style>
