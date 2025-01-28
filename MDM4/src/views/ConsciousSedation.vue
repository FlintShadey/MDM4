<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Post check </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'acute pain due to trauma;  '"
      >
        Trauma Pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Intravenous sedation used for an emergent procedure, performed by the same physician performing the procedure; '"
      >
        IV sedation
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Intramuscular sedation used for an emergent procedure, performed by the same physician performing the procedure; '"
      >
        IM sedation
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'total time for sedation was between 11 and 29 minutes; '"
      >
        11-29 min
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'total time for sedation was greater than 31 minutes; '"
      >
        > 31 min
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
    <div class="mt-5 ma-2">
      <v-btn @click="openExternalLink" color="#8d42f5">
        Adult sedation meds
      </v-btn>
      <v-dialog v-model="dialog" max-width="57%">
        <v-card>
          <v-img :src="dialogImgUrl" height="800px" contain></v-img>
        </v-card>
      </v-dialog>

      <!-- SECOND LINK BUTTON -->

      <v-btn @click="openSecondDialog" color="#42f5c2">
        pediatric sedation meds
      </v-btn>
      <v-dialog v-model="dialog2" max-width="38%">
        <v-card>
          <v-img :src="dialogImgUrl2" height="800px" contain></v-img>
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
  name: "ConsciousSedation",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient currently has an emergency condition that requires sedation for the procedure.\n\nI will be performing both the sedation and the procedure.\n\nI will ensure that there is agreement  before beginning the sedation and procedure.\n\nI believe the patient is a good candidate for this, and I will take all necessary precautions to minimize potential complications.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "I have rechecked on the patient multiple times.\n\nVital signs are within normal limits.\n\nIt seems that they are breathing well and mentating well.\n\nThey should be safe for discharge, and I don't foresee any complications from the sedation.",
      // Snackbar controls
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
      dialog: false,
      dialog2: false, // Add this
      dialogImgUrl: "",
      dialogImgUrl2: "", // Add this
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
      this.dialogImgUrl = "/MDM4/src/assets/adultsedation.png";
      this.dialog = true;
    },
    openSecondDialog() {
      this.dialogImgUrl2 = "/MDM4/src/assets/pediatricsedation.png";
      this.dialog2 = true;
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
