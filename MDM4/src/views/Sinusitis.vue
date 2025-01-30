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
        @click="secondaryValue += ' Acute maxillary sinusitis, unspecified; '"
      >
        maxillary
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Acute frontal sinusitis, unspecified; '">
        frontal

      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Nasal congestion; '"
      >
        congestion
        </v-btn>
              <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="
          secondaryValue +=
            'Acute Maxillary Sinusitis, Unspecified, Contact With And Exposure To Other Viral Communicable Diseases;  Headache, Nasal Congestion, Acute Upper Respiratory Infection; '
        "
      >
        everything sinus
      </v-btn>
  
     
         <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Myalgia; '"
      >
        Myalgia
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Cough; '">
        Cough
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sneezing; '"
      >
        Sneezing
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Fever, unspecified; '"
      >
        Fever
      </v-btn>
   
   
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fatigue; '"
      >
        fatigue
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
  name: "Sinusitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with sinus congestion.\n\nAllergic rhinitis might cause nasal congestion and sneezing, but it is typically accompanied by itching, watery eyes, or a known allergen exposure, which are not present here.\n\nNasal polyp could cause persistent congestion, but it usually develops gradually and may also affect the sense of smell, which is not reported.\n\nSinusitis involves inflammation of the sinuses, commonly presenting with congestion and facial pressure. The patient’s symptoms align well with this diagnosis.\n\nBased on the clinical presentation, sinusitis is considered the most likely diagnosis.\n\nCurrently, there's no indication of more severe and potentially dangerous conditions like orbital cellulitis, preseptal cellulitis, intracranial abscess, or meningitis, as evidenced by the absence of high persistent fever, periorbital edema, cranial nerve abnormalities, abnormal eye movements, proptosis, changes in vision, altered mental state, or signs of meningeal irritation.\n\nThe patient is safe for discharge and outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with sinus congestion.\n\nAllergic rhinitis might cause nasal congestion and sneezing, but it is typically accompanied by itching, watery eyes, or a known allergen exposure, which are not present here.\n\nNasal polyp could cause persistent congestion, but it usually develops gradually and may also affect the sense of smell, which is not reported.\n\nSinusitis involves inflammation of the sinuses, commonly presenting with congestion and facial pressure. The patient’s symptoms align well with this diagnosis.\n\nBased on the clinical presentation, sinusitis is considered the most likely diagnosis.\n\nCurrently, there's no indication of more severe and potentially dangerous conditions like orbital cellulitis, preseptal cellulitis, intracranial abscess, or meningitis, as evidenced by the absence of high persistent fever, periorbital edema, cranial nerve abnormalities, abnormal eye movements, proptosis, changes in vision, altered mental state, or signs of meningeal irritation.\n\nPatient is not toxic and is euvolemic.\n\nThe patient is safe for discharge and outpatient management. Follow-up with the pediatrician is advised if symptoms worsen.",
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
