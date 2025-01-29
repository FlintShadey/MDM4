<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Cerumen removal procedure note </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in the left ear; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right ear; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Impacted cerumen, left ear; '"
      >
        Left cerumen
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Impacted cerumen, right ear; '"
      >
        Right cerumen
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Impacted cerumen, bilateral; '"
      >
        cerumen bilateral
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
  name: "CerumenImpaction",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with hearing loss and ear fullness.\n\nThis patient could have otitis media, which could lead to the spreading of the infection to the mastoid bone, however the eardrum is not visible.\n\nIt is also possible that the patient could have otitis externa, which can lead to inflammation of the cartilage of the outer ear, such as perichondritis, potentially resulting in deformity or damage to the cartilage.\n\nIt is also possible that the patient has Meniere's disease, which could account for the hearing loss and fullness.\n\nBarotrauma can result in ear pain, hearing loss, and a feeling of fullness in the ears; however, the patient does not have a history of this.\n\nCurrently, physical exam suggests that this is cerumen impaction, which could lead to conductive hearing loss and ear drum injury.\n\nThe patient is safe for discharge.\n\nThe patient is educated about ear hygiene and advised to follow up with ENT if the problems persist.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Performed by: J. Flint Smith, MD\n\nProcedure: Removal of Ear Cerumen Impaction\n\n Indications: Patient presents with ear fullness and hearing loss.\nOtoscopic examination reveals complete occlusion of the ear canal with cerumen.\n\nExamination: Thoroughly examined the ear canal with an otoscope.\nIrrigation: Gently irrigated the ear canal with normal saline.\n\nCerumen Removal: Cerumen impaction removed successfully with irrigation and a curette, under direct visualization.\n\nPost-procedure: Ear canal inspected for any residual debris.\n\nFindings: Cerumen impaction successfully removed.\nThere is some mild erythema of the ear canal, with no signs of infection.\n\nComplications: None.",
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
