<template>
  <v-app>
    <v-main>
      <!-- Search Button -->
      <v-btn
        icon
        color="primary"
        class="search-toggle"
        @click="showSearch = !showSearch"
        style="position: fixed; top: 16px; right: 16px; z-index: 100;"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- Search Overlay -->
      <v-fade-transition>
        <v-card
          v-if="showSearch"
          class="search-overlay pa-2"
          style="position: fixed; top: 64px; right: 16px; width: 300px; z-index: 100;"
        >
          <v-text-field
            v-model="searchQuery"
            label="Search"
            clearable
            hide-details
            density="compact"
            variant="outlined"
            @keyup.enter="doSearch"
            @keyup.esc="showSearch = false"
            autofocus
          ></v-text-field>
        </v-card>
      </v-fade-transition>

      <v-container>
        <v-row>
          <!-- Left Drawer -->
          <LeftNavBar />

          <!-- Main Content -->
          <router-view />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftNavBar from "./components/LeftNavBar.vue";
import emitter from "@/eventBus";

export default {
  name: "App",
  components: {
    LeftNavBar
  },
  data() {
    return {
      timeoutId: null,
      showSearch: false,
      searchQuery: ""
    };
  },
  methods: {
    resetInactivityTimer() {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.$router.push('/');
      }, 180000);
    },
    setupInactivityListener() {
      const events = ['mousemove', 'keydown', 'click', 'scroll'];
      events.forEach((event) => {
        window.addEventListener(event, this.resetInactivityTimer);
      });
    },
    doSearch() {
      if (this.searchQuery.trim()) {
        emitter.emit("search", this.searchQuery.trim());
      }
    }
  },
  mounted() {
    this.setupInactivityListener();
    this.resetInactivityTimer();

    // Close search on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.showSearch = false;
      }
    });
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

<style scoped>
.search-toggle {
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.search-overlay {
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}
</style>
