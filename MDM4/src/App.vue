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
            <!-- <hr> -->
            <v-row class="small-vertical">
              <v-col>
                <img src="./assets/ImageHeadInjury.png" alt="Head Injury" />
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  rounded="xl"
                  @click="openDialog('/headinjury')"
                >
                  Head Injury
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  rounded="xl"
                  @click="openDialog('/headinjury-no-ct')"
                >
                  Head Injury No CT
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  rounded="xl"
                  @click="openDialog('/concussion')"
                >
                  Concussion
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color="primary"
                  size="small"
                  rounded="xl"
                  @click="openDialog('/nonaccidental')"
                >
                  Non-Accidental
                </v-btn>
              </v-col>
              <v-col>
                <v-btn
                  color=white
                  size="small"
                  
                  @click="openDialog('/pediheadinjuryalgorithm')"
                >
                  Pedi Algorithm
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
        <hr />

        <v-row class="small-vertical">
          <v-col>
            <img src="./assets/eye.png" alt="eye" />
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              size="small"
              rounded="xl"
              @click="openDialog('/sty')"
            >
              Sty
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              size="small"
              rounded="xl"
              @click="openDialog('/conjunctivitis')"
            >
              conjunctivitis
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              size="small"
              rounded="xl"
              @click="openDialog('/eyefb')"
            >
              eye FB
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              size="small"
              rounded="xl"
              @click="openDialog('/abrasion')"
            >
              abrasion
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              color="primary"
              size="small"
              rounded="xl"
              @click="openDialog('/cornealzoster')"
            >
              corneal zoster
            </v-btn>
          </v-col>
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
        "/nonaccidental",
        "/pediheadinjuryalgorithm",
        "/sty",
        "/conjunctivitis",
        "/eyefb",
        "/abrasion",
        "/cornealzoster",
        "/pediheadinjuryalgorithm",
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

<style scoped>
.small-vertical {
  margin-top: -8px;
  margin-bottom: -8px;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
