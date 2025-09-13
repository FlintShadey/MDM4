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
        color="#4CAF50"
        class="ma-2"
        @click="secondaryValue += 'Hand sprain, right; '"
      >
        hand sprain right
      </v-btn>
      <v-btn
        color="#4CAF50"
        class="ma-2"
        @click="secondaryValue += 'Hand sprain, left; '"
      >
        hand sprain left
      </v-btn>
      <v-btn
        color="#4CAF50"
        class="ma-2"
        @click="secondaryValue += 'Hand sprain, unspecified; '"
      >
        hand sprain unspecified
      </v-btn>
      <v-btn
        color="#2196F3"
        class="ma-2"
        @click="secondaryValue += 'Finger sprain, unspecified; '"
      >
        finger sprain unspecified
      </v-btn>
      <v-btn
        color="#2196F3"
        class="ma-2"
        @click="
          secondaryValue += 'Finger sprain (IP joint), unspecified finger; '
        "
      >
        finger sprain (IP joint) unspecified finger
      </v-btn>
      <v-btn
        color="#2196F3"
        class="ma-2"
        @click="
          secondaryValue += 'Finger sprain (MCP joint), unspecified finger; '
        "
      >
        finger sprain (MCP joint) unspecified finger
      </v-btn>
      <v-btn
        color="#FF9800"
        class="ma-2"
        @click="secondaryValue += 'Hand pain, right; '"
      >
        hand pain right
      </v-btn>
      <v-btn
        color="#FF9800"
        class="ma-2"
        @click="secondaryValue += 'Hand pain, left; '"
      >
        hand pain left
      </v-btn>
      <v-btn
        color="#FF9800"
        class="ma-2"
        @click="secondaryValue += 'Hand pain, unspecified; '"
      >
        hand pain unspecified
      </v-btn>
      <v-btn
        color="#F44336"
        class="ma-2"
        @click="secondaryValue += 'Traumatic pain; '"
      >
        traumatic pain
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
  name: "HandSprain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with a hand injury.\n Open fracture or dislocation could cause deformity, crepitus, exposed bone, or a mechanical block to motion; these findings are not present.\n Acute compartment syndrome could cause severe pain out of proportion to examination, pain with passive finger stretch, tense swelling, paresthesia, pallor, or diminished pulses; these features are not present.\n High-pressure injection injury could present with a small puncture wound, disproportionate pain, and rapidly progressive swelling after exposure to paint, grease, or air; this scenario is not present.\n Septic flexor tenosynovitis could cause fusiform swelling, the finger held in slight flexion, pain with passive extension, and tenderness along the flexor sheath; these signs are not present.\n Septic arthritis could cause fever, a hot swollen joint, effusion, and severe pain with passive motion; these features are not present.\n Tendon laceration or rupture could cause loss of active flexion or extension or an abnormal finger cascade; strength and function are intact.\n Neurovascular injury could cause numbness in median, ulnar, or radial distributions or delayed capillary refill; sensation and perfusion are intact.\n Closed fracture could cause focal bony tenderness, ecchymosis, crepitus, or pain with axial loading; these findings are not present.\nThe patient's presentation aligns well with a hand sprain.\n The patient is safe for discharge and should follow up with their health care provider or hand surgeon very soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Pediatric hand injury MDM text not created",
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
