<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> no alt text </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
              <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'COPD with acute exacerbation; '"
      >
        exacerbation
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'COPD with acute lower respiratory infection; '"
      >
        with URI
      </v-btn>
         <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += '  Unspecified chronic bronchitis; '"
      >
        chronic
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
            ' COPD with acute exacerbation,  Dyspnea, unspecified; Cough; Shortness of breath; Wheezing; Acute bronchospasm; '
        "
      >
        everything asthma
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Hypoxemia; '"
      >
        Hypoxemia
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
        @click="secondaryValue += ' Chest pain on breathing; '"
      >
        Chest pain
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
  name: "COPD",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with dyspnea.\n\nAsthma could cause difficulty breathing, but exacerbations typically involve wheezing, chest tightness, and a known history of asthma, which is not the case here.\n\nPneumonia might present with dyspnea, but it is usually associated with fever and a productive cough. This seems to be different.\n\nHeart failure can cause dyspnea, especially with exertion or when lying flat, but it is often associated with peripheral edema, fatigue, and other systemic signs, which are not present here.\n\nChronic obstructive pulmonary disease (COPD) exacerbation commonly presents with worsening shortness of breath and wheezing. The patient’s symptoms and possible history of COPD suggest this diagnosis.\n\nThe patient is not septic.\n\nThe patient is safe for discharge and outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "no alt text for this template",
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
