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
      <!-- Other menu items -->
      <v-list-item>
        <v-list-item-title>Calculations</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Likely MDM</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Conscious Sedcation</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Observation</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>CB Randomizer</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title>Calendar</v-list-item-title>
      </v-list-item>
            <v-list-item>
        <v-list-item-title>work excuse</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          >image / light that shows internet status</v-list-item-title
        >
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
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
