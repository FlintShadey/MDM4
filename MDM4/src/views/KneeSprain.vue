<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> post brace check </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'acute pain due to trauma;  '"
      >
        Trauma Pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in left knee; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right knee; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue += 'sprain of the left knee collateral ligament '
        "
      >
        left collateral sprain
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="
          secondaryValue += 'Sprain of the right knee collateral ligament '
        "
      >
        right collateral sprain
      </v-btn>
      <v-btn color="#42bcf5" class="ma-2" @click="secondaryValue += 'PAIN IN LEFT KNEE - [M25.562]; SPRAIN OF UNSPECIFIED CRUCIATE LIGAMENT OF LEFT KNEE, INITIAL ENCOUNTER- [S83.502A];  UNSPECIFIED INTERNAL DERANGEMENT OF LEFT KNEE - [M23.92]; ACUTE PAIN DUE TO TRAUMA; '">
        Left Sprain everything
      </v-btn>
      <v-btn
        color="#f242f5"
        class="ma-2"
        @click="secondaryValue += 'PAIN IN RIGHT KNEE - [M25.561]; SPRAIN OF UNSPECIFIED CRUCIATE LIGAMENT OF RIGHT KNEE, INITIAL ENCOUNTER - [S83.501A], UNSPECIFIED INTERNAL DERANGEMENT OF RIGHT KNEE - [M23.91], ACUTE PAIN due to trauma; '"
      >
        right sprain everything
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
  name: "KneeSprain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
"The patient presents with a knee injury.\n\nKnee fracture could cause severe pain, swelling, and an inability to bear weight, but there is no deformity.\n\nLigament tear might present with instability, swelling, and difficulty with knee movement, but because the patient retains some range of motion, I do not think this is a complete tear.\n\nBecause there are no significant locking or catching symptoms, this is probably not a meniscal tear.\n\nI don't think this is a patellar dislocation because there is not the typical visible deformity.\n\nBased on the clinical presentation, a knee sprain is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management with recommendations for follow-up if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "After applying the brace, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the brace as it wasn't exerting pressure on any nerve or blood vessel. The patient received guidance on when to seek further medical care.",
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
