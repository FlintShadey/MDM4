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
        @click="secondaryValue += ' Headache; '"
      >
         Headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Headache with orthostatic component,; '"
      >
        orthostatic Headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Tension-type headache; '"
      >
        Tension-type 
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cluster headache syndrome; '"
      >
        cluster
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Nausea; '"
      >
        Nausea
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
      primaryValue: "The patient presents with a headache.\n\nInitial concern would be for a cerebral vascular event, such as a stroke or aneurysm, which can lead to severe neurological deficits or even death. However, the patient does not show focal neurological deficits, altered consciousness, or other signs suggestive of a stroke or aneurysm.\n\nAlso in the differential diagnosis would be meningitis, which could cause severe complications like brain damage or sepsis. However, the patient does not exhibit neck stiffness, fever, or other classic signs of meningitis.\n\nAdditionally, cluster headache must be considered due to its severe, unilateral pain often around the eye, but the lack of accompanying symptoms such as eye redness, tearing, or nasal congestion makes this diagnosis less likely.\n\nThe risk of a major neurological event appears to be low.\n\nCurrently there's no evidence of giant cell arteritis. There's no stiffness of the neck or shoulders. There is no tenderness of the temporal artery. The temporal artery is without thickening or nodularity. There are no visual disturbances, no jaw claudication, no fever, no malaise or fatigue. \n\nCurrently, the patient is safe and at minimal risk of serious conditions such as cerebral hemorrhage, meningitis, or brain tumors as a cause for this presentation.\n\nThe patient is safe for outpatient management and is advised to follow up with their primary care physician or neurology for further evaluation and management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Patient was given an IV, with intravenous fluids, benadryl, toradol, and Reglan, and allowed to rest in a ER room, after some time there was a reduction in the symptoms of the headache.",
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
