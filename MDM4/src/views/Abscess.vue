<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> I&D Procedure note </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in the left _____; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right _____; '"
      >
        pain right
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cutaneous abscess, unspecified; '"
      >
        abscess, unspecified
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cutaneous abscess of head; '"
      >
        head
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cutaneous abscess of face; '"
      >
       face
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cutaneous abscess of neck; '"
      >
       neck
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fever; '"
      >
        fever
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fatigue; '"
      >
        fatigue
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Lymphadenopathy; '"
      >
        Lymphadenopathy
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cutaneous Abscess of the left _______; '"
      >
         type the body part left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' Cutaneous Abscess of the right _______; '"
      >
        type the body part right
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
  name: "Abscess",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "Patient presents with a localized skin abscess.\n\nI do not believe that this represents a deep tissue infection, such as necrotizing fasciitis, because the infection appears to be localized to the superficial layers of the skin without signs of deeper or more aggressive infection.\n\nClinical exam does not support this condition being due to a foreign body reaction, which could cause localized inflammation and pus formation, as the patient does not report any recent injuries or introduction of foreign material into the skin.\n\nThe patient does not have a fever.\n\nThey deny any recent IV drug use.\n\nThere is no crepitus noted.\n\nCurrently, there is no evidence of necrotizing fasciitis, pyomyositis, osteomyelitis, or other emergent problems as a cause for this presentation.\n\nPatient is not septic or ill appearing.\n\nThe patient does not currently require IV antibiotics or admission.\n\nThe patient is safe for outpatient management and is advised to follow up with primary care or dermatology for further evaluation and management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Procedure Note: Incision and Drainage of Abscess\n\nPerformed by me, J Flint Smith MD\n\nIndication: The patient presented with pain, swelling, and erythema, consistent with an abscess.\n\nPhysical examination revealed a fluctuant, tender mass with a possible drainage point at the natal cleft.\n\nPre-Procedure Assessment: Verbal consent was obtained. The risks, benefits, and potential complications (bleeding, infection, recurrence, scarring) were explained to the patient.\n\nThe area was prepped with a Betadine solution and draped in a sterile manner. Local infiltration with 1% lidocaine with epinephrine was administered around the area of fluctuance. The patient tolerated the local anesthetic injections without complication.\n\nA small, linear incision was made over the most fluctuant or pointing area using a No. 11 blade scalpel.\n\nThick, purulent material was expressed. The cavity was gently probed and broken up to ensure complete evacuation of loculations. The abscess cavity was copiously irrigated with normal saline to remove any debris or residual purulent material.\n\nA small ribbon of gauze was packed into the wound to allow continued drainage.\n\nMinimal bleeding was noted and controlled with direct pressure.\n\nEstimated blood loss was minimal.\n\nThe area was dressed with a non-adherent dressing.\n\nThe patient tolerated the procedure well, and there were no immediate complications.\n\nNo neurovascular compromise was noted, and no damage to surrounding tissues was observed.\n\nThe patient was instructed on proper wound care and follow-up instructions.",
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
