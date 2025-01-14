<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Main Layout -->
        <v-row>
          <!-- Left Drawer -->
          <LeftNavBar />

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
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  @click="openDialog('/non-accidental')"
                >
                  Non-Accidental Injury
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
      <RightNavBar />
    </v-main>
  </v-app>
</template>

<script>
import LeftNavBar from "./components/LeftNavBar.vue";
import RightNavBar from "./components/RightNavBar.vue";

export default {
  data() {
    return {
      showRouterView: false, // Controls the visibility of the dialog
    };
  },
  components: {
    LeftNavBar,
    RightNavBar,
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
      const dialogRoutes = [
        "/headinjury",
        "/headinjury-no-ct",
        "/concussion",
        "/NonAccidental",
      ];
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
