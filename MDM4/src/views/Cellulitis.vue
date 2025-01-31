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
        @click="secondaryValue += 'Pain in the left _____; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right _____; '"
      >
        pain right
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis, unspecified; '"
      >
        Cellulitis, unspecified
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of head; '"
      >
        head
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of face; '"
      >
       face
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of neck; '"
      >
       neck
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fever; '"
      >
        fever
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
        @click="secondaryValue += 'Lymphadenopathy; '"
      >
        Lymphadenopathy
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of the left _______; '"
      >
         type the body part left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of the right _______; '"
      >
        type the body part right
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
  name: "Cellulitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "Patient presents with skin redness.\n\nContact Dermatitis could cause redness, but it is typically associated with itching and exposure to an irritant or allergen, which is not the case.\n\nErythema Multiforme can cause skin redness, but it is usually associated with a target-like appearance of lesions and systemic symptoms, which are not present in this case.\n\nCellulitis is a bacterial skin infection characterized by redness, warmth, swelling, and tenderness in the affected area. The patient’s symptoms align well with this diagnosis, particularly if redness is spreading or there are systemic symptoms like fever.\n\nClinically, this is not Necrotizing Fasciitis, Abscess, Osteomyelitis, Myositis, or another emergent problem as a cause for this presentation.\n\nCurrently, there is no abscess.\n\nThis appears to be cellulitis at this time. There is no abscess to incise or drain.\n\nNo evidence of serious bacterial illness.\n\nAt present, the patient shows no signs of altered mental status. There is no evidence of tachycardia, tachypnea, or hypotension. The skin does not display any mottling or indications of poor perfusion. Clinically, there seem to be no signs of sepsis.\n\nVital signs are within normal limits. Low risk for treatment failure based on history.\n\nPatient is safe for discharge and outpatient management with close follow-up with the primary care physician.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Patient presents with skin redness.\n\nContact Dermatitis could cause redness, but it is typically associated with itching and exposure to an irritant or allergen, which is not the case.\n\nErythema Multiforme can cause skin redness, but it is usually associated with a target-like appearance of lesions and systemic symptoms, which are not present in this case.\n\nCellulitis is a bacterial skin infection characterized by redness, warmth, swelling, and tenderness in the affected area. The patient’s symptoms align well with this diagnosis, particularly if redness is spreading or there are systemic symptoms like fever.\n\nClinically, this is not Necrotizing Fasciitis, Abscess, Osteomyelitis, Myositis, or another emergent problem as a cause for this presentation.\n\nCurrently, there is no abscess.\n\nThis appears to be cellulitis at this time. There is no abscess to incise or drain.\n\nNo evidence of serious bacterial illness.\n\nAt present, the patient shows no signs of altered mental status. There is no evidence of tachycardia, tachypnea, or hypotension. The skin does not display any mottling or indications of poor perfusion. Clinically, there seem to be no signs of sepsis.\n\nVital signs are within normal limits. Low risk for treatment failure based on history.\n\nThe patient is euvolemic and does not appear toxic.\n\nThe patient is safe for discharge and outpatient management. Guardian is instructed to follow up with the pediatrician in the next few days.",
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
