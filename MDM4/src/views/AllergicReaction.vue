<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> angioedema </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Allergy, unspecified, initial encounter; '"
      >
        Allergy
      </v-btn>
      
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Allergic urticaria; '"
      >
        Allergic urticaria
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Anaphylactic reaction due to unspecified food, initial encounter; '"
      >
        food
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Angioedema, initial encounter; '"
      >
      Angioedema
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Anaphylaxis due to tree nuts or seeds, initial encounter; '"
      >
        nuts or seeds
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Intrinsic (allergic) eczema; '"
      >
        eczema
      </v-btn>
   
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += 'Anaphylactic reaction to insect stings, initial encounter; '"
            >
            insect stings
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += 'Anaphylactic reaction to drugs, initial encounter; '"
            >
            drugs
        </v-btn>
           <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Anaphylactic shock, unspecified, initial encounter; '"
      >
        Anaphylactic shock
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
  name: "AllergicReaction",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "Patient presents with symptoms suggestive of an allergic reaction.\n\nThis could be anaphylaxis, but the absence of respiratory distress, hypotension, or severe systemic symptoms suggests a less severe allergic reaction.\n\nThis does not appear to be angioedema because there is no airway compromise.\n\nI don't think that this is an asthma exacerbation because there is no significant wheezing on exam.\n\nBased on the clinical examination and the absence of severe systemic symptoms such as significant respiratory distress, hypotension, or anaphylaxis, conditions like anaphylaxis and acute asthma exacerbation seem unlikely.\n\nPatient is breathing well with normal vital signs.\n\nThe patient is safe for discharge and outpatient management with their primary care doctor.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with swelling.\n\nCellulitis could cause swelling but typically includes redness, warmth, and possibly fever, which are not present.\n\nTrauma might lead to swelling, but the patient does not report a recent injury.\n\nHereditary causes of swelling are possible, though these are less common and often have a chronic or recurrent pattern, which is not described by the patient.\n\nThe patient’s presentation aligns well with angioedema, which often presents as sudden, painless swelling and may be associated with allergic or idiopathic factors.\n\nThe patient does not have any sign of anaphylaxis or mucosal membrane involvement.\n\nThe patient is safe for discharge and should follow up with a primary care physician very soon.",      // Snackbar controls
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
