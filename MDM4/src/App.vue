<!-- filepath: /Users/flint/Library/Mobile Documents/com~apple~CloudDocs/Developer Cloud/MDM4/MDM4/src/App.vue -->
<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Main Layout -->
        <v-row>
          <!-- Left Drawer -->
          <v-navigation-drawer app color="#912737" class="rounded" width="200">
            <v-list>
              <v-list-item>
                <v-list-item-title>Quick Access Buttons</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-btn color="yellow">HOME / Refresh</v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn color="#63b0cf" @click="openDialog('/option1')"
                  >MDM</v-btn
                >
              </v-list-item>
              <v-list-item>
                <v-btn color="#63b0cf" @click="openDialog('/option2')"
                  >Diagnosis Codes</v-btn
                >
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <!-- Main Content -->
          <v-container>
            <v-row>
              <v-col>
                <img src="./assets/ImageHeadInjury.png" alt="Head Injury" />
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  @click="openDialog('/headinjury')"
                >
                  Head Injury
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  @click="openDialog('/headinjury-no-ct')"
                >
                  Head Injury No CT
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  @click="openDialog('/concussion')"
                >
                  Concussion
                </v-btn>
              </v-col>
            </v-row>
            <hr />
          </v-container>
        </v-row>
      </v-container>

      <!-- Dialog for Router View -->
      <v-dialog v-model="showRouterView" max-width="1000px">
        <v-card color="#2d5f73">
          <!-- <v-card-title class="headline">Details</v-card-title> -->
          <v-card-text>
            <router-view />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDialog">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Right Drawer -->
      <v-navigation-drawer
        permanent
        app
        color="#3281a8"
        class="rounded"
        location="right"
        width="450"
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      >
        <v-list>
          <v-list-item>
            <v-list-item-title>Calculations</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Likely MDM</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Observation</v-list-item-title>
          </v-list-item>
          <v-list-item>CB Randomizer</v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showRouterView: false, // Controls the visibility of the dialog
    };
  },
  methods: {
    openDialog(route) {
      this.$router.push(route);
      // The watcher will handle showing the dialog based on the route
    },
    closeDialog() {
      this.showRouterView = false;
      this.$router.push("/"); // Redirect to home or another default route
    },
  },
  watch: {
    $route(to) {
      const dialogRoutes = ["/headinjury", "/headinjury-no-ct", "/concussion"];
      if (dialogRoutes.includes(to.path)) {
        this.showRouterView = true;
      } else {
        this.showRouterView = false;
      }
    },
    showRouterView(newVal) {
      if (!newVal) {
        this.$router.push("/"); // Navigate back when dialog is closed
      }
    },
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
