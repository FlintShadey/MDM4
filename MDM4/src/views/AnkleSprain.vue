<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue">
        post brace check
      </v-btn>
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
        @click="secondaryValue += 'Pain in left ankle; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right ankle; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sprain of the left _______'"
      >
        sprain of left ___
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Sprain of the right ____'"
      >
        sprain of right ___
      </v-btn>
      <v-btn
        color="#42bcf5"
        class="ma-2"
        @click="
          secondaryValue +=
            'SPRAIN OF UNSPECIFIED LIGAMENT OF LEFT ANKLE, INITIAL ENCOUNTER -[S93.402A], SPRAIN OF TIBIOFIBULAR LIGAMENT OF LEFT ANKLE, INITIAL ENCOUNTER -[S93.432A], PAIN IN LEFT ANKLE AND JOINTS OF LEFT FOOT - [M25.572] ACUTE PAIN DUE TO TRAUMA - [G89.11]; '
        "
      >
        Left Sprain lateral
      </v-btn>
      <v-btn
        color="#f242f5"
        class="ma-2"
        @click="
          secondaryValue +=
            'SPRAIN OF UNSPECIFIED LIGAMENT OF RIGHT ANKLE, INITIAL ENCOUNTER - [S93.401A], SPRAIN OF CALCANEOFIBULAR LIGAMENT OF RIGHT ANKLE, INITIAL ENCOUNTER -[S93.411A], SPRAIN OF TIBIOFIBULAR LIGAMENT OF RIGHT ANKLE, INITIAL ENCOUNTER -[S93.431A], ACUTE PAIN DUE TO TRAUMA - [G89.11], pain in the right ankle and joints of the right foot - [M25.571]'
        "
      >
        right sprain lateral
      </v-btn>
            <v-btn
        color="#42bcf5"
        class="ma-2"
        @click="
          secondaryValue +=
            'SPRAIN OF UNSPECIFIED LIGAMENT OF LEFT ANKLE, INITIAL ENCOUNTER -[S93.402A],  PAIN IN LEFT ANKLE AND JOINTS OF LEFT FOOT - [M25.572] ACUTE PAIN DUE TO TRAUMA - [G89.11]; Sprain of deltoid ligament left ankle'
        "
      >
        Left Sprain medial
      </v-btn>
      <v-btn
        color="#f242f5"
        class="ma-2"
        @click="
            secondaryValue +=
            'SPRAIN OF UNSPECIFIED LIGAMENT OF RIGHT ANKLE, INITIAL ENCOUNTER - [S93.401A], ACUTE PAIN DUE TO TRAUMA - [G89.11], pain in the right ankle and joints of the right foot - [M25.571]; Sprain of deltoid ligament right ankle, '
        "
      >
        right sprain medial
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' FALL, initial encounter; '"
      >
        fall
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
      <v-btn @click="openExternalLink" color="yellow"> ankle ligaments </v-btn>
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
  name: "AnkleSprain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "Patient presents with an ankle injury.\n\nAnkle Fracture could cause severe pain, swelling, and difficulty bearing weight, but the absence of significant deformity, localized bony tenderness, or inability to bear weight reduces the likelihood of this diagnosis.\n\nTendon Rupture might present with significant weakness or instability, especially during movement, but the patient likely maintains some functional range of motion, making a complete rupture less probable.\n\nLigament Tear could be considered in the case of severe instability and swelling, but partial ligament injuries are more consistent with the current presentation.\n\nDislocation would present with obvious deformity and difficulty moving the joint. The absence of these findings makes dislocation unlikely.\n\nBased on the clinical presentation, ankle sprain is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management with recommendations for rest, ice, compression, and elevation along with over-the-counter pain relief. Follow-up is recommended if symptoms persist or worsen.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "After applying the brace, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the brace as it wasn't exerting pressure on any nerve or blood vessel. The patient received guidance on when to seek further medical care.",
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
      //   window.open("https://www.google.com", "_blank");
      this.dialogImgUrl = "/MDM4/src/assets/ankleLigaments.png";
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
