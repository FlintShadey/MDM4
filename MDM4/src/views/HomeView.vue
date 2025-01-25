<template>
  <v-container>
    <!-- <hr> -->
    <v-row >
        <img
        src="../assets/ImageHeadInjury.png"
        alt="Head Injury"
        height="32px"
        class="mt-2"
        
      />

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
          color="grey"
          size="small"
          @click="openDialog('/pediheadinjuryalgorithm')"
        >
          Pedi Algorithm
        </v-btn>
      </v-col>
    </v-row>
    <hr />

    <v-row class="small-vertical">
      <v-col>
        <img src="../assets/eye.png" alt="eye" />
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
          Conjunctivitis
        </v-btn>
      </v-col>
      <v-col>
        <!-- Continue with other buttons as needed -->
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  name: "HomeView",
  data() {
    return {
      showRouterView: false,
    };
  },
  methods: {
    openDialog(route) {
      this.$router.push(route);
    },
    closeDialog() {
      this.showRouterView = false;
      this.$router.push("/");
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
      ];
      this.showRouterView = dialogRoutes.includes(to.path);
    },
    showRouterView(newVal) {
      if (!newVal) this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.small-vertical {
  margin-top: -8px;
  margin-bottom: -8px;
}
</style>