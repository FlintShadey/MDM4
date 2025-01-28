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
        @click="secondaryValue += 'Cervicalgia; '"
      >
        Cervicalgia
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sprain of Ligaments of Cervical Spine ; '"
      >
        cervical sprain
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
        @click="secondaryValue += 'Neck Spasm; '"
      >
        Other muscle spasm
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
            @click="secondaryValue += 'Radiculopathy, Cervical Region; '"
        >   Cervical Radiculopathy 
        </v-btn>
        <v-btn
        
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += 'Cervical Disc Disorder; '"
        >
            Cervical Disc Disorder
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += 'Cervical Disc Degeneration; '">Cervical Disc Degeneration
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
  name: "GenericTemplate",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with neck pain.\n\nNeck Strain could cause localized muscle tenderness and stiffness, typically related to overexertion or poor posture. The absence of a recent injury or mention of muscle tenderness makes this less likely.\n\nMeningitis might present with neck pain or stiffness, but it is usually accompanied by fever, headache, photophobia, or other systemic symptoms, which are not present.\n\nOsteoarthritis can cause chronic neck pain and stiffness, often worse in older individuals with degenerative changes, but it is usually a more gradual onset with a longer history of pain, which does not seem to be the case here.\n\nBased on the clinical presentation, cervical radiculopathy is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with neck pain.\n\nNeck Strain could cause localized muscle tenderness and stiffness, typically related to overexertion or poor posture. The absence of a recent injury or mention of muscle tenderness makes this less likely.\n\nMeningitis might present with neck pain or stiffness, but it is usually accompanied by fever, headache, photophobia, or other systemic symptoms, which are not present.\n\nThe patient is otherwise well and not septic\n\nBased on the clinical presentation, cervical radiculopathy is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up with the pediatrician is advised if symptoms worsen or fail to improve.",
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
