<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Main Layout -->
        <v-row>
          <!-- Left Drawer -->
          <v-navigation-drawer app color="red" class="rounded">
            <v-list>
              <v-list-item title="Drawer Left"></v-list-item>
              <v-list-item
                title="Left Column will be used for quick access buttons"
              ></v-list-item>
              <v-list-item>
                <v-btn color="primary" @click="openDialog('/option1')">Option 1</v-btn>
              </v-list-item>

              <v-list-item>
                <v-btn color="primary" @click="openDialog('/option2')">Option 2</v-btn>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>

          <!-- Main Content -->

          <v-col>
            <v-row>
              <v-col>
                <img src="./assets/ImageHeadInjury.png" alt="HI">
              </v-col>
              <v-col>
                <v-btn color="surface-variant" size="x-small" @click="openDialog('/headinjury')">Head Injury</v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" size="x-small" @click="openDialog('/headinjury-no-ct')">Head Injury No CT</v-btn>
              </v-col>
              <v-col>
                <v-btn color="primary" size="x-small" @click="openDialog('/concussion')">Concussion</v-btn>
              </v-col>
            </v-row>
            <hr>
            <v-dialog v-model="showRouterView" persistent max-width="600px">
              <router-view />
            </v-dialog>
          </v-col>

          <!-- Right Drawer -->
          <v-navigation-drawer
            v-model="rightDrawer"
            app
            location="right"
            color="blue"
            class="rounded"
          >
            <v-list>
              <v-list-item title="Drawer Right"></v-list-item>
              <v-list-item title="Settings"></v-list-item>
              <v-list-item title="Help"></v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showRouterView: false,
      routeToLoad: '',
    };
  },
  methods: {
    openDialog(route) {
      this.routeToLoad = route;
      this.$router.push(route);
      this.showRouterView = true;
    },
  },
};
</script>
