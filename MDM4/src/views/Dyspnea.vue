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
        @click="secondaryValue += 'Dyspnea, unspecified; '"
      >
        Dyspnea
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Orthopnea; '"
      >
        Orthopnea
      </v-btn>
         <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Shortness of breath; '"
      >
        Shortness of breath
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Acute respiratory distress; '">
        Acute respiratory distress
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Stridor; '"
      >
        Stridor
      </v-btn>

      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Hyperventilation; '"
      >
        Hyperventilation
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Mouth breathing; '"
      >
        Mouth breathing
      </v-btn>
   
   
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Tachypnea, not elsewhere classified; '"
      >
        Tachypnea
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
  name: "Dyspnea",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient came to the ER due to shortness of breath.\n\nOne immediate concern is pulmonary embolism, which can be life-threatening if not addressed quickly. However, the patient's symptoms don't align closely with this condition.\n\nAnother potential cause could be an acute exacerbation of chronic obstructive pulmonary disease, which might result in respiratory failure.\n\nPneumonia is also a possibility, as it can lead to respiratory failure or sepsis. Yet, the patient lacks symptoms like fever, productive cough, chest pain, and abnormal lung sounds.\n\nCongestive heart failure was considered in the differential diagnosis since it can induce pulmonary edema and respiratory distress. However, the patient isn't showing signs of fluid retention.\n\nI considered an asthma exacerbation, which can culminate in respiratory failure, but the patient isn't exhibiting typical symptoms such as wheezing, cough, or chest tightness.\n\nThe patient is not septic.\n\nGiven the current assessment, the patient is safe for discharge and outpatient care and is advised to follow up within the next few days.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient came to the ER due to shortness of breath.\n\nPneumonia is also a possibility, as it can lead to respiratory failure or sepsis. Yet, the patient lacks symptoms like fever, productive cough, chest pain, and abnormal lung sounds.\n\nI considered an asthma exacerbation, which can culminate in respiratory failure, but the patient isn't exhibiting typical symptoms such as wheezing, cough, or chest tightness.\n\nThe patient is not septic and not toxic appearing.\n\nGiven the current assessment, the patient is safe for discharge and outpatient care and is advised to follow up with pediatrician within the next few days.",
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
