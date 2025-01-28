<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Splint check </v-btn>
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
        @click="secondaryValue += 'Pain in left wrist; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right wrist ; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the left wrist, initial encounter;  '"
      >
       fracture left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the right wrist, initial encounter; '"
      >
        fracture right 
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the navicular [scaphoid] bone of  left wrist, initial encounter;  '"
      >
       fracture navicular left
      </v-btn>
                        <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the navicular [scaphoid] bone of right wrist, initial encounter;  '"
      >
       fracture navicular right
      </v-btn>
                        <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the carpal bone of left wrist, initial encounter;  '"
      >
       fracture carpal left
      </v-btn>
                          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the carpal bone of right wrist, initial encounter;  '"
      >
       fracture carpal right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sprain of the left wrist '"
      >
        left sprain
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'sprain of the right wrist; '"
      >
        right  sprain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Muscle Spasm; '"
      >
        Muscle Spasm
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
        @click="secondaryValue += ', left; '"
      >
         left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ', right; '"
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
  name: "WristFX",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with a wrist injury.\n\nTendonitis might cause localized pain with movement, but it usually develops over time due to repetitive strain rather than an acute injury.\n\nWrist dislocation could cause severe pain and visible deformity, but this generally involves a clear joint misalignment, which is not present.\n\nA wrist fracture often results from a fall on an outstretched hand or direct impact. It typically presents with significant pain, swelling, and tenderness over the affected bone, and may limit range of motion. The patient’s symptoms align well with this diagnosis.\n\nBased on the clinical presentation, wrist fracture is considered the most likely diagnosis.\n\nThe patient does not currently demonstrate complications of fracture, such as compartment syndrome, arterial or nerve injury.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "After applying the splint, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the splint as it wasn't exerting pressure on any nerve or blood vessel. The patient received guidance on splint care and was informed about when to seek further medical care.",
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
