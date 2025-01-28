<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Pediatric </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Mucopurulent conjunctivitis  '"
      >
        Mucopurulent
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Acute toxic conjunctivitis  '"
      >
        toxic
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Unspecified conjunctivitis '"
      >
        Unspecified</v-btn
      >
<v-btn
      color="#72728a" 
      class="ma-2"
      @click="secondaryValue += ' Blepharoconjunctivitis  '"      
>
Blepharoconjunctivitis
</v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += ' left'">
        left
      </v-btn>
      <v-btn color="#665153" class="ma-2" @click="secondaryValue += ' right'">
        right
      </v-btn>
      <v-btn
        color="#515f66"
        class="ma-2"
        @click="secondaryValue += ' bilateral'"
      >
        bilateral
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
        Open External Link
      </v-btn>
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
  name: "conjunctivitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient has a red and irritated eye without any recent injury, making trauma an unlikely cause. There is no fluid leakage from the eye, and without an injury, keratitis is also improbable. \n\nThe patient does not report severe pain or vision problems, which helps rule out corneal ulcers and scleritis. Additionally, there are no signs on physical exam of angle-closure glaucoma or anterior uveitis, and the patient has not experienced vision loss.\n\nHerpetic conjunctivitis was excluded because there were no specific indicators like dendrites or Hutchinsons sign.\n\nOverall, the patients condition seems stable for outpatient management. It is recommended that the patient follow up with an ophthalmologist within the next two days.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient has a red and irritated eye without any recent injury, making trauma an unlikely cause. There is no fluid leakage from the eye, and without an injury, keratitis is also improbable.\n\nThe patient does not report severe pain or vision problems, which helps rule out corneal ulcers and scleritis. Additionally, there are no signs on physical exam of angle-closure glaucoma or anterior uveitis, and the patient has not experienced vision loss.\n\nHerpetic conjunctivitis was excluded because there were no specific indicators like dendrites or Hutchinsons sign.\n\nOverall, the patients condition seems stable for outpatient management. It is recommended that the patient follow up with their pediatirican or ophthalmologist within the next two days.",
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
      window.open("https://example.com", "_blank");
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
