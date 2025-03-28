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
        @click="secondaryValue += 'Pilonidal cyst and sinus with abscess '"
      >
       Pilonidal cyst and sinus with abscess
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pilonidal cyst and sinus without abscess '"
      >
        without abscess
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
  name: "PilonidalCyst",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with swelling and pain in the buttock.\n\nPhysical examination revealed a fluctuant, tender mass with a possible drainage point at the natal cleft.\n\nHematoma can result in swelling and pain following trauma, but the absence of any significant recent injury makes this diagnosis less likely.\n\nA pilonidal cyst often presents with localized pain, swelling, and sometimes redness over the buttock, especially near the coccyx. Given the location and symptoms, this is the most likely diagnosis.\n\nThe patient is considered safe for outpatient management, with recommendations to follow up with surgery for further evaluation.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
        alternateValue: "Procedure Note: Incision and Drainage of Pilonidal Cyst \nPerformed by me, J Flint Smith MD\nIndication: The patient presented with pain, swelling, and erythema in the sacrococcygeal region, consistent with a pilonidal abscess/cyst.\n Physical examination revealed a fluctuant, tender mass with a possible drainage point at the natal cleft.\nPre-Procedure Assessment: Verbal consent was obtained. The risks, benefits, and potential complications (bleeding, infection, recurrence, scarring) were explained to the patient.\nPositioning and Preparation: The patient was placed in the prone position. The area was prepped with a Betadine solution and draped in a sterile manner. Local infiltration with 1% lidocaine with epinephrine was administered around the area of fluctuance. The patient tolerated the local anesthetic injections without complication.\nProcedure: A small, linear incision was made over the most fluctuant or pointing area using a No. 11 blade scalpel.\n Thick, purulent material was expressed. The cavity was gently probed and broken up to ensure complete evacuation of loculations. The abscess cavity was copiously irrigated with normal saline to remove any debris or residual purulent material.\n A small ribbon of gauze was packed into the wound to allow continued drainage.\n Minimal bleeding was noted and controlled with direct pressure.\n Estimated blood loss was minimal.\nThe area was dressed with a non-adherent dressing.\nPost-Procedure:\n The patient tolerated the procedure well, and there were no immediate complications.\n No neurovascular compromise was noted, and no damage to surrounding tissues was observed.The patient was instructed on proper wound care and follow-up instructions.",
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
