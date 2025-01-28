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
        @click="secondaryValue += 'Contusion of the left wrist; '"
      >
       contusion left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'contusion of the right wrist; '"
      >
        contusion right 
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
            <v-btn
        color="#4287f5"
        class="ma-2"
        @click="secondaryValue += 'PAIN IN LEFT WRIST - [M25.532]; SPRAIN OF CARPAL JOINT OF LEFT WRIST, INITIAL ENCOUNTER - [S63.512A]; SPRAIN OF OTHER PART OF LEFT WRIST AND HAND, INITIAL ENCOUNTER - [S63.8X2A]; UNSPECIFIED SPRAIN OF LEFT WRIST, INITIAL ENCOUNTER - [S63.502A]; ACUTE PAIN DUE TO TRAUMA - [G89.11]; '"
      >
         LEFT SPrain everything
      </v-btn>
            <v-btn
        color="#f542ef"
        class="ma-2"
        @click="secondaryValue += 'PAIN IN RIGHT WRIST - [M25.531], SPRAIN OF CARPAL JOINT OF RIGHT WRIST, INITIAL ENCOUNTER - [S63.511A], SPRAIN OF OTHER PART OF RIGHT WRIST AND HAND, INITIAL ENCOUNTER -[S63.8X1A], UNSPECIFIED SPRAIN OF RIGHT WRIST, INITIAL ENCOUNTER - [S63.501A], ACUTE PAIN DUE TO TRAUMA - [G89.11] '"
      >
         right  SPrain everything
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
  name: "WristSprain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with a wrist injury.\n\nWrist Fracture could cause pain, swelling, and tenderness over the bone, often with a history of significant trauma. The absence of severe tenderness or deformity makes this less likely.\n\nTendonitis might cause localized pain with specific movements, but it usually develops gradually due to repetitive strain rather than an acute injury.\n\nWrist Dislocation can lead to severe pain and visible deformity, but there is no indication of a misaligned joint, which makes this less likely.\n\nWrist Sprain involves overstretching or tearing of the ligaments in the wrist, leading to pain, swelling, and sometimes bruising. The patient’s presentation aligns well with this diagnosis.\n\nBased on the clinical presentation, wrist sprain is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
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
