<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> procedure for FB removal </v-btn>
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
        @click="secondaryValue += 'Pain in the left ______; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right ______; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Puncture wound with foreign body, left _____, initial encounter; '"
      >
        Left with FB
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' Puncture wound with foreign body, right _____, initial encounter; '"
      >
        right with FB
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
  name: "FBRemoval",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents for a possible foreign body.\n\nGiven the history and exam, there does not seem to be necrotizing fasciitis, abscess, osteomyelitis, or other emergent problems as a cause for this presentation.\n\nThere is no evidence of serious bacterial illness. The patient is not septic and is nontoxic.\n\nUsing anesthetic and incision, I was able to remove the foreign body. The patient tolerated the procedure well.\n\nI will prescribe antibiotics to minimize the risk of infection.\n\nThe patient is not septic or ill appearing. The patient will do well with outpatient management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Procedure Performed by: me, J. Flint Smith, MD\n\nProcedure Performed: Incision Removal of Subcutaneous Foreign Body\n\nThe patient presented with pain consistent with a retained foreign body.\n\nThe area was prepped with a Betadine solution and draped in a sterile manner.\n\nLocal infiltration with 1% lidocaine without epinephrine was performed around the area of interest.\n\nThe patient tolerated the local anesthetic injections without complication.\n\nA small, linear incision was made over the area using a No. 11 blade scalpel.\n\nThe material was removed using sterile technique.\n\nThe cavity was gently probed to ensure complete removal of the foreign body.\n\nThe incision was copiously irrigated with normal saline to remove any debris or residual purulent material.\n\nMinimal bleeding was noted and controlled with direct pressure.\n\nNo active bleeding at the conclusion of the procedure.\n\nEstimated blood loss: Minimal.\n\nNo neurovascular compromise noted.\n\nNo damage to surrounding tissues noted.\n\nThe wound was dressed with a non-adherent dressing.\n\nThe patient tolerated the procedure well, and there were no immediate complications. Follow-up instructions were provided. ",
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
