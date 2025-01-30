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
        @click="secondaryValue += 'Seasonal allergic rhinitis; '"
      >
        rhinitis
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
        @click="secondaryValue += 'Allergic rhinitis, unspecified; '"
      >
        Allergic
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Headache; '">
        Headache
      </v-btn>
           <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sneezing; '"
      >
        Sneezing
      </v-btn>
              <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="
          secondaryValue +=
            'seasonal allergic rhinitis; Nasal congestion; Headache; Sneezing;  '
        "
      >
        everything Rhinitis
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
  name: "AllergicRhinitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with cough and congestion, likely due to allergic rhinitis from seasonal allergies.\n\nAsthma, which can be exacerbated by allergies, is considered; however, the absence of wheezing, chest tightness, or difficulty breathing during this visit suggests asthma is not the diagnosis.\n\nUpper respiratory infection can cause similar symptoms to allergic rhinitis but usually includes a low-grade fever, so I don't think this is a URI.\n\nThe absence of severe facial pain or prolonged symptom duration suggests that sinusitis is not present.\n\nThe lack of heartburn, chest pain, or reflux symptoms makes GERD an unlikely cause of the cough.\n\nBased on the clinical examination and the presence of symptoms like nasal congestion, allergic rhinitis is considered the most likely diagnosis.\n\nThe patient is considered safe for discharge and outpatient management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
            "The patient presents with cough and congestion, likely due to allergic rhinitis from seasonal allergies.\n\nAsthma, which can be exacerbated by allergies, is considered; however, the absence of wheezing, chest tightness, or difficulty breathing during this visit suggests asthma is not the diagnosis.\n\nUpper respiratory infection can cause similar symptoms to allergic rhinitis but usually includes a low-grade fever, so I don't think this is a URI.\n\nThe absence of severe facial pain or prolonged symptom duration suggests that sinusitis is not present\n\nBased on the clinical examination and the presence of symptoms like nasal congestion, allergic rhinitis is considered the most likely diagnosis.\n\nThe patient is not toxic or ill appering.\n\nThe patient is considered safe for discharge and outpatient management and follow up with pediatrician.",
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
