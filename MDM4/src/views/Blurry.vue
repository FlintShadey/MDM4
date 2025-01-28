<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Visual Disturbance;  '"
      >
        Blurry
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sample text Diagnosis #2; '"
      >
        Add Diagnosis #2
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sample text Diagnosis #3; '"
      >
        Add Diagnosis #3
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sample text Diagnosis #4; '"
      >
        Add Diagnosis #4
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sample text Diagnosis #5; '"
      >
        Add Diagnosis #5
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
        Vison Change flow Chart
      </v-btn>
      <v-dialog v-model="dialog"  max-width="80%">
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
  name: "Blurry",
  data() {
    return {
      dialog: false,
      dialogImgUrl: "",
      // Main text (primary text area)
      primaryValue:
        "The patient presents with blurry vision.\n\nThe patient does not have signs or symptoms of a cerebral vascular accident. There is no change in mental status, loss of balance, or loss of strength or sensation.\n\nThese symptoms are not from retinal detachment, as there have been no flashes of light, no eye floaters, and no peripheral decrease in vision.\n\nThe symptoms are not caused by a brain tumor, as there have been no persistent headaches, confusion, memory loss, or loss of balance.\n\nI considered closed-angle glaucoma; however, there is no headache, severe eye pain, nausea, vomiting, or halo around lights.\n\nI do not believe this to be wet macular degeneration because there is no loss of vision, no dark or blind spots in the central vision, no wavy vision, and no difficulty with facial recognition.\n\nThis does not appear to be diabetic retinopathy because there is no double vision, floaters, or dark spots in the field of vision.\n\nThere is no cell and flare on exam to indicate uveitis.\n\nThere is no history to suggest keratitis.\n\nThe timing does not indicate cataract changes.\n\nThe patient is safe for outpatient management and is instructed to follow up with ophthalmology in the next few days.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Pediatric MDM text",
      // Snackbar controls
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
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
      this.dialogImgUrl = "/MDM4/src/assets/visionLoss.png";
      this.dialog = true;
    },
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
};
</script>

<style scoped>
/* Customize your component styles here */
.v-snackbar {
  max-width: 400px;
}
</style>
