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
        @click="secondaryValue += 'Chest pain, unspecified; '"
      >
        unspecified
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Chest pain on breathing; '"
      >
        on breathing
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Precordial Pain; '"
      >
        Precordial
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Shortness of breath; '"
      >
        Shortness of breath
      </v-btn>
      <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="secondaryValue += 'Unstable angina ; '"
      >
        Unstable angina 
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Acute Pericarditis; '"
      >
         Acute Pericarditis
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Costochondritis; '"
      >
        Costochondritis
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Panic Attack with Chest Pain; '"
      >
        Panic Attack with Chest Pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Esophageal Spasm; '"
      >
        Esophageal Spasm
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Musculoskeletal Chest Pain; '"
      >
         Musculoskeletal 

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
        Heart score
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
  name: "ChestPain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "Patient presents with chest pain.\n\nInitial concern would be for myocardial infarction which can lead to heart failure, or even death. However, the patient does not have electrocardiogram changes consistent with AMI.\n\nAlso in the differential diagnosis would be pulmonary embolism, however I do not believe that the patient has a PE as there is no hypoxia or sign of DVTs.\n\nI do not believe that this represents an aortic dissection because the patient is not complaining about severe tearing or ripping chest pain that radiates to the back.\n\nClinical exam does not support this condition being due to pneumothorax which can cause severe difficulty breathing and potentially lead to a complete collapse of the lung.\n\nAdditionally, gastroesophageal reflux disease must be considered because it can lead to complications like esophageal ulcers or stricture, but this does not seem to be GERD in nature.\n\nHEART Score: risk of major acute cardiac event is exceedingly low.\n\nCurrently the patient is safe and at almost no risk of ACS, pneumothorax, bacterial pneumonia, pulmonary embolism, tamponade, aortic dissection or other emergent problems as a cause for this presentation.\n\nPatient is safe for discharge and outpatient management and is instructed to follow up with cardiology for further evaluation.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with adolescent chest wall pain.\n\nCardiac causes, such as pericarditis or myocardial issues, might cause chest pain, but they typically present with shortness of breath, palpitations, or abnormal heart sounds, which are not here.\n\nPulmonary causes, such as pneumonia or pleurisy, could cause chest pain, but they usually involve fever, cough, or difficulty breathing, which are not present.\n\nGastrointestinal causes, like reflux or esophageal spasms, can lead to chest pain, but they are often associated with burning sensations, regurgitation, or meals, which does not appear to be the case.\n\nThe patient’s presentation aligns with musculoskeletal pain, possibly involving the chest wall muscles or costochondral junctions, and is commonly seen in adolescents.\n\nThe patient is not septic or toxic.\n\nThe patient is safe for discharge and should follow up with the pediatrician very soon.",
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
      window.open("https://www.mdcalc.com/calc/3975/heart-pathway-early-discharge-acute-chest-pain", "_blank");
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
