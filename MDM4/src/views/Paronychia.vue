<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Procedure note </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in left digit; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right digit; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Acute infected paronychia; '"
      >
        paronychia
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
  name: "Paronychia",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with swelling of a digit, likely due to paronychia.\nHerpetic whitlow features painful blisters and can mimic paronychia, but this does not have grouped vesicles on an erythematous base, so I believe this is different.\nA felon is a deep infection of the digit pad, presenting with intense pain and swelling. Unlike paronychia, which is localized around the nail, a felon affects the deeper tissues of the digit pad.\nGout or pseudogout can present with acute inflammation of a single digit, but this seems different from that.\nBased on the clinical examination and the presence of redness, tenderness, and swelling localized around the nail, paronychia is considered the most likely diagnosis.\nThe patient is considered safe for outpatient management, with treatment including warm soaks.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Procedure Note: Incision and Drainage of Acute Paronychia\nAttending Provider: J. Flint Smith, MD\nIndication:\nThe patient presented with pain, swelling, and erythema in the nail fold.\nPhysical examination revealed a fluctuant, tender mass with a possible drainage point at the nail fold.\nConsent:\nVerbal informed consent was obtained. The risks, benefits, and potential complications (bleeding, infection, recurrence, scarring) were explained to the patient.\nPreparation:\nThe area was prepped with a Betadine solution and draped in a sterile manner.\nAnesthesia:\nRing block infiltration with 1% lidocaine without epinephrine was performed around the area of fluctuance.\nThe patient tolerated the local anesthetic injections without complication.\nIncision and Drainage:\nA small, linear incision was made over the most fluctuant or pointing area using a No. 11 blade scalpel.\nPurulent material was expressed.\nThe cavity was gently probed and broken up to ensure complete evacuation of loculations.\nHemostasis:\nMinimal bleeding was noted and controlled with direct pressure.\nNo active bleeding at the conclusion of the procedure.\nEstimated blood loss: Minimal.\nComplications: None immediate. No neurovascular compromise noted. No damage to surrounding tissues noted.\nDisposition and Follow-Up:\nThe patient was instructed on wound care and hygiene measures.\nThe patient was advised to watch for signs of infection or recurrent abscess.",
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
