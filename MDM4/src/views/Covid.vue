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
        @click="secondaryValue += 'Ncov (Covid-19) Acute Respiratory Disease; '"
      >
        Covid
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Nasal congestion; '"
      >
        congestion
      </v-btn>

      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Cough; '">
        Cough
      </v-btn>
              <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="
          secondaryValue +=
            'Contact With And (Suspected) Exposure To Other Viral Communicable Diseases Including Covid-19; Ncov (Covid-19) Acute Respiratory Disease; Encounter For Screening For Other Covid-19;  Cough; Nasal Congestion; '
        "
      >
        everything Covid
      </v-btn>
               <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Myalgia; '"
      >
        Myalgia
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
  name: "Covid",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with cough and congestion.\n\nInfluenza could cause cough and congestion, but it is often accompanied by high fever, body aches, and significant fatigue. These symptoms are not present here.\n\nAllergic rhinitis might lead to congestion and a cough due to post-nasal drip, but it typically includes itching, sneezing, or watery eyes, which is not the case.\n\nAcute bronchitis can present with cough and sometimes congestion, but it frequently includes chest discomfort or more prominent mucus production. This seems to be different.\n\nCOVID-19 commonly presents with cough and congestion; the patient’s symptoms align well with this diagnosis.\n\nThe patient is not septic.\n\nThe patient is safe for discharge and outpatient management. Follow-up is advised if symptoms worsen or fail to improve.\n\nThe patient was provided with guidelines on preventive measures and returning to work, based on current CDC recommendations.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with cough and congestion.\n\nInfluenza could cause cough and congestion, but it is often accompanied by high fever, body aches, and significant fatigue. These symptoms are not present here.\n\nAllergic Rhinitis might lead to congestion and a cough due to post-nasal drip, but it typically includes itching, sneezing, or watery eyes, which is not the case.\n\nAcute Bronchitis can present with cough and sometimes congestion, but it frequently includes chest discomfort or more prominent mucus production. This seems to be different.\n\nCOVID-19 commonly presents with cough and congestion; the patient’s symptoms align well with this diagnosis.\n\nPatient is not septic, nor toxic.\n\nThe patient is safe for discharge and outpatient management. Follow-up with pediatrician is advised if symptoms worsen or fail to improve.\n\nThe patient was provided with guidelines on preventive measures and returning to school, based on current CDC recommendations.",
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
