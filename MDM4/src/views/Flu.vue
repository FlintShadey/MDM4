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
        @click="
          secondaryValue +=
            ' Influenza due to other identified influenza virus with other respiratory manifestations; '
        "
      >
        FLu - URI
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="
          secondaryValue +=
            'Influenza due to other identified influenza virus with gastrointestinal manifestations; '
        "
      >
        FLu - GI
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Nasal congestion; '"
      >
        congestion
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
        @click="secondaryValue += 'headache; '"
      >
        headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Fever, unspecified; '"
      >
        Fever
      </v-btn>
      <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="
          secondaryValue +=
            'Influenza Due To Unidentified Influenza Virus With Other Respiratory, Manifestations;  Acute Upper Respiratory Infection, Unspecified;  Headache, Unspecified; Illness, Unspecified; Myalgia; Chills; Fever; Contact With And (Suspected) Exposure To Other Viral Communicable Diseases Including Covid-19;  '
        "
      >
        everything FLU
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
  name: "Flu",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with URI symptoms and myalgias.\n\nPneumonia is a consideration due to respiratory symptoms; however, there are no signs such as lung crackles or increased work of breathing.\n\nSepsis is unlikely, as the patient appears non-toxic with no signs of systemic infection or organ dysfunction.\n\nMeningitis is also improbable since the patient does not have neck stiffness, altered consciousness, or focal neurological deficits.\n\nAn asthma exacerbation is less likely, as there is no indication of significant respiratory distress during the clinical examination.\n\nPulmonary embolism is not likely because there is no acute shortness of breath, chest pain, or leg swelling.\n\nThe patient seems to have influenza.\n\nThe patient is safe for discharge and outpatient management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with URI symptoms and malaise.\n\nPneumonia is a consideration due to respiratory symptoms; however, there are no signs such as lung crackles or increased work of breathing.\n\nSepsis is unlikely, as the patient appears non-toxic with no signs of systemic infection or organ dysfunction.\n\nMeningitis is also improbable since the patient does not have neck stiffness, altered consciousness, or focal neurological deficits.\n\nAn asthma exacerbation is less likely, as there is no indication of significant respiratory distress during the clinical examination.\n\nThe patient seems to have influenza.\n\nPatient is not toxic and is euvolemic.\n\nThe patient is safe for discharge and outpatient management. Follow-up with the pediatrician is advised if symptoms worsen.",
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
