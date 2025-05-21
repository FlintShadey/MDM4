<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> no repair </v-btn>
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
        @click="secondaryValue += 'Pain in _____ left; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in ______ right; '"
      >
        pain right
      </v-btn>
               <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Laceration without a foreign object on the left ______ during the initial encounter ; '"
      >
        Laceration left
      </v-btn>
            <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Laceration without a foreign object on the right ______ during the initial encounter ; '"
      >
        Laceration right
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

    <!-- Laceration Note Modal -->
    <div class="mt-5">
      <v-btn @click="noteDialog = true" color="yellow">
        Laceration Note
      </v-btn>
      <v-dialog v-model="noteDialog" max-width="800px">
        <v-card>
          <v-card-title>Laceration Note</v-card-title>
          <v-card-text>
            <v-textarea
              v-model="lacerationNote"
              auto-grow
              outlined
              rows="10"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="copyLacerationNote">
              Copy Text
            </v-btn>
            <v-btn text color="primary" @click="noteDialog = false">
              Close
            </v-btn>
          </v-card-actions>
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
  name: "Laceration",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "Patient had a laceration that was cleaned in the ED after copious irrigation. After exploration of the wound, there was no evidence of a retained foreign body.\n\nThere is no evidence of nerve damage.\n\nThere is no evidence of vascular or arterial insufficiency\n\nNo evidence of underlying fracture.\n\nPatient's tetanus immunization status is addressed.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient has a laceration that is small and superficial.\n\nThere is no evidence of a retained foreign body or underlying fracture.\n\nNo closure is necessary at this time, as unnecessary repair would result in increased risks without added benefit.\n\nThe wound should heal with good function and cosmesis without a futile repair.\n\nThe patient agrees with this assessment.",
      // Snackbar controls
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
      dialog: false,
      dialogImgUrl: "",
      // Modal for laceration note
      noteDialog: false,
      lacerationNote: `Procedure Performed by: me, J. Flint Smith, MD
Procedure Performed: Laceration Repair of ________ 
The area was prepped with saline and Betadine solution and draped in a sterile manner.
Local anesthesia was administered using Lidocaine ________ .
The laceration was repaired using ________ simple interrupted sutures with Ethilon.
The wound was copiously irrigated with normal saline to ensure removal of any debris.
Minimal bleeding was noted and controlled with direct pressure.
No active bleeding was observed at the conclusion of the procedure.
Estimated blood loss: Minimal.
No neurovascular compromise was noted distal to the injury.
No damage to surrounding tissues was identified.
The wound was dressed with a non-adherent dressing.
The patient tolerated the procedure well, and there were no immediate complications.
Follow-up instructions were provided.`,
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
     * Copies the content of 'lacerationNote' to the clipboard.
     */
    copyLacerationNote() {
      navigator.clipboard.writeText(this.lacerationNote).then(
        () => {
          this.showSnackbar("Laceration note copied to clipboard!", "success");
        },
        (err) => {
          console.error("Failed to copy note: ", err);
          this.showSnackbar("Failed to copy laceration note.", "error");
        }
      );
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
