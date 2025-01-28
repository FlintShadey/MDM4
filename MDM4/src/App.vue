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
  data() {
    return {
      timeoutId: null
    };
  },
  methods: {
    resetInactivityTimer() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.$router.push('/');
      }, 990000);
      // change back to 180000
    },
    setupInactivityListener() {
      const events = ['mousemove', 'keydown', 'click', 'scroll'];
      events.forEach((event) => {
        window.addEventListener(event, this.resetInactivityTimer);
      });
    }
  },
  mounted() {
    this.setupInactivityListener();
    this.resetInactivityTimer();
  },
  beforeUnmount() {
    const events = ['mousemove', 'keydown', 'click', 'scroll'];
    events.forEach((event) => {
      window.removeEventListener(event, this.resetInactivityTimer);
    });
    clearTimeout(this.timeoutId);
  }
};
</script>
