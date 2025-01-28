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
        @click="secondaryValue += 'Corneal Abrasion, left eye; '">
        Corneal Abrasion Left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Corneal Abrasion, right eye; '">
        Corneal Abrasion Right

      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Headache;  '"
      >
        headache    
    </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Left eye pain; '"
      >
        Left eye pain
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' Right eye pain; '"
      >
        Right eye pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Photophobia; '"
      >
        Photophobia
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Visual Disturbances;  '"
      >
        Blurry
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Epiphora; '">
        Tearing
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
  name: "Abrasion",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "Patient presents with eye pain and redness.\n\n______ There is a small amount of fluorescein uptake on physical exam.\n\nConjunctivitis can cause eye redness and discomfort but is usually associated with discharge and itching rather than sharp pain.\n\nUveitis involves inflammation of the middle layer of the eye and can present with eye pain and redness. However, there are no other symptoms like decreased vision or floaters.\n\nForeign body in the eye can cause similar symptoms to a corneal abrasion if the object remains in the eye, causing ongoing irritation. The lack of visible foreign particles rules this out.\n\nCorneal Abrasion is considered the most likely diagnosis.\n\nThe patient is considered safe for outpatient management but will be referred to an ophthalmologist for confirmation of the diagnosis and to ensure no foreign bodies are retained. Patients will be advised to avoid rubbing the eye and to monitor for signs of worsening symptoms, such as increased pain or vision changes, which require immediate re-evaluation.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "no Pediatric MDM text created",
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
