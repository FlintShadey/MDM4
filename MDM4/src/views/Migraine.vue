<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> cocktail </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            '  Migraine with aura, not intractable, without status migrainosus; '
        "
      >
        with aura
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            'Migraine without aura, not intractable, with status migrainosus; '
        "
      >
        without aura
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Ophthalmoplegic migraine, not intractable; '"
      >
        Ophthalmoplegic
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cyclical vomiting, in migraine; '"
      >
        Cyclical vomiting
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Nausea; '">
        Nausea
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'visual disturbances; '"
      >
        visual disturbances
      </v-btn>
    </div>

    <!-- SECONDARY TEXTAREA -->
    <div class="mt-5">
      <v-textarea v-model="secondaryValue" auto-grow outlined></v-textarea>

      <div class="text-center">
        <v-btn @click="copyToClipboardSecond" color="yellow">
          Copy Diagnosis
        </v-btn>
      </div>
    </div>

    <!-- EXAMPLE LINK BUTTON -->
    <div class="mt-5">
      <v-btn @click="openExternalLink" color="yellow">
        Open External Link + Show Modal
      </v-btn>
      <v-dialog v-model="dialog" max-width="80%">
        <v-card>
          <v-img :src="dialogImgUrl" height="800px" contain></v-img>
        </v-card>
      </v-dialog>
    </div>

    <!-- SNACKBAR (Close button removed) -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="3000"
      style="left: 50%; transform: translateX(-50%)"
      variant="tonal"
      max-width="600"
    >
      {{ snackbarText }}
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: "Headache",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with symptoms of a headache.\n\nCurrently, there are no systemic symptoms such as fever, and there is no history of neoplasm.\n\nThere is no neurological deficit, and the onset of the headache was not sudden or thunderclap.\n\nThe patient has had headaches like this in the past, and there is no pattern change from prior headaches.\n\nThe headache does not seem to be positional and was not precipitated by sneezing, coughing, or exercise, ruling out a hemorrhage.\n\nOn physical exam, there is no papilledema, and there is no painful eye with autonomic features.\n\nThe headache's onset was not post-traumatic, and the patient is immunocompetent.\n\nThere is no evidence of analgesic abuse, and no focal neurological symptoms are present. The neurological exam is benign.\n\nCurrently, the patient does not appear toxic or to be in extremis and is without acute neurological findings.\n\nThere appears to be almost no chance of intracranial pathology; there is no current indication for a CT scan as that carries a risk of causing harm in the future.\n\nThe patient is instructed to follow up with their primary care physician in the next 2-3 days if the headache has not resolved.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "Patient was given an IV, with intravenous fluids, benadryl, toradol, and Reglan, and allowed to rest in a ER room, after some time there was a reduction in the symptoms of the headache.",
      // Snackbar controls
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
      dialog: false,
      dialogImgUrl: "",
    };
  },
  methods: {
    /**
     * Copies the content of 'primaryValue' to the clipboard.
     */
    copyToClipboard() {
      navigator.clipboard.writeText(this.primaryValue).then(
        () => {
          this.showSnackbar("MDM copied to clipboard!", "success");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
          this.showSnackbar("Failed to copy MDM text.", "error");
        }
      );
    },

    /**
     * Copies the content of 'secondaryValue' to the clipboard.
     */
    copyToClipboardSecond() {
      navigator.clipboard.writeText(this.secondaryValue).then(
        () => {
          this.showSnackbar("Diagnosis copied to clipboard!", "success");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
          this.showSnackbar("Failed to copy diagnosis text.", "error");
        }
      );
    },

    /**
     * Sets the 'primaryValue' to the predefined alternate text.
     */
    setAlternateValue() {
      this.primaryValue = this.alternateValue;
    },

    /**
     * Opens a new browser tab to an external URL.
     */
    openExternalLink() {
      window.open("https://www.google.com", "_blank");
      this.dialogImgUrl = "@/assets/visionLoss.png";
      this.dialog = true;
    },

    /**
     * Utility to display the snackbar with a specific message and color.
     * @param {String} message - The snackbar text to display.
     * @param {String} color - The color of the snackbar ('success' or 'error').
     */
    showSnackbar(message, color) {
      this.snackbarText = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
/* Customize your component styles here */
.v-snackbar {
  max-width: 400px;
}
</style>
