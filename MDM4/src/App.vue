<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <!-- Left Drawer -->
          <LeftNavBar />

          <!-- Main Content -->
          <router-view />

          <!-- Right Drawer -->
          <RightNavBar />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftNavBar from "./components/LeftNavBar.vue";
import RightNavBar from "./components/RightNavBar.vue";

export default {
  name: "App",
  components: {
    LeftNavBar,
    RightNavBar
  },
  methods: {
    notify() {
      this.$toast.success('Hello Toast!')
    }
  }
}
</script>

<style scoped>
/* Add or keep any global styles if needed */
</style>