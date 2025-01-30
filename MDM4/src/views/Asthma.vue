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
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Unspecified asthma with (acute) exacerbation; '"
      >
        asthma
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Severe persistent asthma, uncomplicated; '"
      >
        Severe
      </v-btn>
         <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Cough variant asthma; '"
      >
        Cough variant asthma
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Cough; '">
        Cough
      </v-btn>
          <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Shortness of breath; '">
        Shortness of breath
      </v-btn>
            
          <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Wheezing; '">
       Wheezing
      </v-btn>
                <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Acute bronchospasm; '">
       bronchospasm
      </v-btn>
              <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="
          secondaryValue +=
            '  Unspecified asthma with (acute) exacerbation; Cough; Shortness of breath; Wheezing; Acute bronchospasm; '
        "
      >
        everything asthma
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
  name: "Asthma",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with acute difficulty breathing.\n\nThe patient did not exhibit symptoms that typically point to pneumonia.\n\nThe patient also did not show discomfort while lying flat or waking up at night short of breath, which would usually indicate heart failure.\n\nThere was no evidence of the patient suddenly choking, so I do not think this is aspiration of a foreign body.\n\nThere wasn't any swelling in the legs to suggest deep vein thrombosis, which could lead to a pulmonary embolism.\n\nThe patient's heart sounds were clear, without any jugular vein distention or low blood pressure, ruling out cardiac tamponade.\n\nThere were no complaints of chest pain, excessive sweating, or heart palpitations. This makes acute coronary syndrome less likely based on their physical examination and medical history.\n\nAnother positive aspect of the patient's presentation is the absence of altered mental status, silent breathing, abdominal breathing, or any signs that might indicate impending respiratory failure.\n\nFurthermore, the patient has never been intubated or hospitalized due to severe asthma.\n\nGiven these findings, I will treat the patient for bronchospasm and ensure they are safe for discharge and outpatient management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with acute difficulty breathing.\n\nThe patient did not exhibit symptoms that typically point to pneumonia.\n\nThere was no evidence of the patient suddenly choking, so I do not think this is aspiration of a foreign body.\n\nAnother positive aspect of the patient's presentation is the absence of altered mental status, silent breathing, abdominal breathing, or any signs that might indicate impending respiratory failure.\n\nThe patient is euvolemic and does not appear toxic.\n\nFurthermore, the patient has never been intubated or hospitalized due to severe asthma.\n\nGiven these findings, I will treat the patient for bronchospasm and ensure they are safe for discharge and outpatient management. Guardian is instructed to follow up with the pediatrician in the next few days.",
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
