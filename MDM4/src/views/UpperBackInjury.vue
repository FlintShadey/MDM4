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
        @click="secondaryValue += 'Acute pain due to trauma; '"
      >
        trauma pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Strain of muscle and tendon of back wall of thorax; '"
      >
        thorax sprain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Fracture of thoracic vertebra, closed intial encounter; '"
      >
        thoracic vertebra fracture
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Superficial injury of back wall of thorax; '"
      >
        superficial injury
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in thoracic spine; '"
      >
        thoracic pain
      </v-btn>
              <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ' Radiculopathy, Thoracic Region; '">
            Thoracic Radiculopathy
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ' Dorsalgia; '">
            dorsalgia

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
        @click="secondaryValue += 'headache; '"
      >
       headache
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
  name: "upperbackinjury",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with an upper back injury.\n\nInitial considerations include a thoracic spine fracture, which may lead to spinal instability or nerve compression, but the patient has no neurological deficits.\n\nAlso considered is a rib fracture with potential complications such as lung injury or internal bleeding. There could be a scapular fracture, which could lead to weakness and loss of range of motion in the shoulder.\n\nA traumatic pneumothorax is also a possibility, potentially leading to compromised lung function.\n\nThe patient may have a sprain or ligament injury of the back, which can cause discomfort and limited mobility.\n\nCurrently, the patient seems safe for outpatient management and is instructed to follow up with the primary care physician in the next few days.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with an upper back injury.\n\nInitial considerations include a thoracic spine fracture, which may lead to spinal instability or nerve compression, but the patient has no neurological deficits.\n\nAlso considered is a rib fracture with potential complications such as lung injury or internal bleeding. There could be a scapular fracture, which could lead to weakness and loss of range of motion in the shoulder.\n\nA traumatic pneumothorax is also a possibility, potentially leading to compromised lung function.\n\nThe patient may have a sprain or ligament injury of the back, which can cause discomfort and limited mobility.\n\nCurrently, the patient seems safe for outpatient management and the guardian is instructed to follow up with the pediatrician in the next few days.",
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
