<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue">
       Epistaxis Procedure note
      </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Epistaxis, initial encounter '"
      >
        Epistaxis
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Essential (primary) hypertension; '"
      >
        HTN Essential
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Hypertensive urgency; '"
      >
        HTN Urgency
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += ', left nare; '">
        left 
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ', right nare; '"
      >
        right
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
  name: "Epistaxis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with a nosebleed.\n\nDry air exposure is one of the most common causes of nosebleeds, and this could be the cause in this case.\n\nNasal trauma, such as picking the nose or a direct impact to the nose, can easily cause bleeding, but the patient denies this.\n\nHypertension can exacerbate nosebleeds; however, the patient's current blood pressure is not excessive.\n\nBlood thinners or anticoagulation therapy can increase the risk of bleeding, including from minor nasal irritation, but the patient is not on blood-thinning medication.\n\nBased on the clinical examination and considering common causes of nosebleeds, along with the patient's history and environmental factors, dry air exposure and nasal trauma are the most likely causes.\n\nThere are no risk factors for bleeding disorders, and the patient is hemodynamically stable. No evidence of anemia.\n\nThe patient is generally safe for discharge and outpatient management. The patient is encouraged to follow up with ENT soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "Performed by: J. Flint Smith, MD\n\nProcedure: Management of Epistaxis\n\nIndications:\nPatient presents with active nosebleed.\n\nExamination:\nNasal mucosa inspected. Source of bleeding identified as\n\nManagement:\n- Nasal packing: Anterior nasal packing applied.\n- Cauterization: Chemical cauterization performed with silver nitrate.\n- Topical medications: Applied Afrin spray to nasal mucosa.\n- Pressure: Nasal pressure applied for 10 minutes.\n\nFindings:\nEpistaxis controlled.\n\nComplications:\nNone.",
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
