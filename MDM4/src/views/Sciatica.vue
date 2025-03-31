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
        @click="secondaryValue += 'acute pain due to trauma;  '"
      >
        Trauma Pain
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in left leg; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right leg '"
      >
        pain right
        </v-btn>
                
        <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'radiculopathy lumbar region; '"
      >
        radiculopathy
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' muscle spasm of back; '"
      >
         muscle spasm
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'SPRAIN OF LIGAMENTS OF LUMBAR SPINE, INITIAL ENCOUNTER; '"
      >
          lumbar strain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'LUMBAGO WITH SCIATICA, LEFT SIDE; '"
      >
      Lumbago with sciatica, LEFT  
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'LUMBAGO WITH SCIATICA, RIGHT SIDE; '"
      >
      Lumbago with sciatica, Right  
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'SCIATICA, LEFT SIDE; '"
      >
      SCIATICA, LEFT 
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'SCIATICA, RIGHT SIDE; '"
      >
      SCIATICA, RIGHT 
      </v-btn>
            <v-btn
        color="#f542ef"
        class="ma-2"
        @click="secondaryValue += 'DORSALGIA, UNSPECIFIED - [M54.9], LOW BACK PAIN - [M54.5], LOW BACK PAIN, UNSPECIFIED - [M54.50], OTHER LOW BACK PAIN - [M54.59], SPRAIN OF LIGAMENTS OF LUMBAR SPINE, INITIAL ENCOUNTER - [S33.5XXA] '"
      >
          back pain everything
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
  name: "Sciatica",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with back pain radiating to the leg.\n\nLumbar disc herniation can cause nerve compression, leading to pain radiating down the leg. The absence of significant weakness, bowel or bladder dysfunction, or other red flag symptoms makes this less likely.\n\nLumbar strain typically causes localized back pain without radiation to the legs. The presence of radiating pain suggests nerve involvement, so this is more complicated.\n\nSpinal stenosis can lead to leg pain due to narrowing of the spinal canal, but the acute onset makes me think this is sciatica.\n\nBased on the clinical presentation of back pain radiating to the leg, with no signs of more serious pathology, sciatica is considered the most likely diagnosis.\n\nThe patient is considered safe for outpatient management and is encouraged to follow up with their primary care physician soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Pediatric MDM text not created",
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
