<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> no text </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">


      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Type 2 diabetes mellitus with hyperglycemia; '"
      >      type 2 DM
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Type 1 diabetes mellitus with hyperglycemia; '"
      >       type 1 DM
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Hyperglycemia, unspecified; '"
      >      Hyperglycemia, unspecified
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'diabetes mellitus with ketoacidosis without coma; '"
      >      DKA
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Diabetes mellitus due to underlying condition with hyperglycemia; '"
      >
        DM due to underlying condition 
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fatigue; '"
      >
        fatigue
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Dehydration; '"
      >
        Dehydration
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Weakness; '"
      >
         Weakness
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
  name: "Hyperglycemia",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "he patient presents with weakness, likely due to hyperglycemia.\n\nHypoglycemia: Could also cause weakness, but there is no reported history of diabetes management errors, missed meals, or associated symptoms such as sweating or shakiness.\n\nElectrolyte Imbalances: Such as hypokalemia or hyponatremia could contribute to weakness, but there are no signs of dehydration or muscle cramps.\n\nAnemia: May present with weakness, but the patient does not report significant fatigue, pallor, or shortness of breath.\n\nNeurological Causes: Such as stroke or transient ischemic attack should be considered in cases of sudden focal weakness, but there are no associated neurological deficits.\n\nThe patient’s symptoms align well with hyperglycemia, which can cause fatigue, polyuria, and general malaise.\n\nCurrently, there is no sign of diabetic ketoacidosis, such as excessive thirst, frequent urination, dry mouth and skin, nausea and vomiting, abdominal pain, rapid breathing, confusion or altered mental state, fatigue or drowsiness, sweet or fruity-smelling breath, or breathing difficulties.\n\nNo signs of nephropathy, including swelling in the ankles, legs, and feet, foamy or bubbly urine, or decreased urine output.\n\nThe patient is safe for outpatient management and should follow up with their primary care physician for further evaluation and glucose management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Pediatric MDM text not created",
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
