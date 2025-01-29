<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Pediatric OE</v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in the left ear; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right ear; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Otitis Externa, left ear; '"
      >
        Left oe
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Otitis Externa, right ear; '"
      >
        Right Oe
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Otitis Externa, bilateral ears; '"
      >
        bilateral oe
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of external ear '"
      >
        cellulitis
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' Hemorrhagic otitis externa '"
      >
        Hemorrhagic
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += ', left; '">
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
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ', bilateral; '"
      >
        bilateral
      </v-btn>
<v-btn
        color="#42cbf5"
        class="ma-2"
        @click="secondaryValue += 'SWIMMER EAR, LEFT EAR - [H60.332], UNSPECIFIED ACUTE NONINFECTIVE OTITIS EXTERNA, LEFT EAR - [H60.502], UNSPECIFIED OTITIS EXTERNA, LEFT EAR - [H60.92], OTALGIA, LEFT EAR - [H92.02] '"
      >
        OE ALL Left

</v-btn>
<v-btn
        color="#dd42f5"
        class="ma-2"
        @click="secondaryValue += 'SWIMMER EAR, RIGHT EAR - [H60.331], UNSPECIFIED ACUTE NONINFECTIVE OTITIS EXTERNA, RIGHT EAR - [H60.501], UNSPECIFIED OTITIS EXTERNA, RIGHT EAR - [H60.91], OTALGIA, RIGHT EAR - [H92.01] '"
      >
        OE ALL Right

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
  name: "OtitisExterna",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presented with a complaint of otalgia.\n\nInitial considerations in this patient included otitis externa, malignant otitis externa, auricular hematoma, acute otitis media, mastoiditis, ear foreign body, tympanic membrane rupture, and other upper respiratory infections.\n\nThe patient does not have evidence of swelling, erythema, or tenderness to the mastoid process to suggest mastoiditis.\n\nThe patient is without immunocompromise and has no evidence of fever or other systemic infectious symptoms suggestive of malignant otitis externa.\n\nThe patient does have erythema and swelling in the external auditory canal, consistent with otitis externa.\n\nThe patient is safe for discharge and is safe for outpatient management.\n\nWe discussed return precautions, specifically for worsening infection, treatment with antibiotics, and follow-up with the primary care doctor or ENT within 3 days for further evaluation.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        " The patient presented with a complaint of otalgia.\n\nInitial considerations in this patient included otitis externa, malignant otitis externa, auricular hematoma, acute otitis media, mastoiditis, ear foreign body, tympanic membrane rupture, and other upper respiratory infections.\n\nThe patient does not have evidence of swelling, erythema, or tenderness to the mastoid process to suggest mastoiditis.\n\nThe patient does have erythema and swelling in the external auditory canal, consistent with otitis externa.\n\nThe patient is not septic or ill-appearing.\n\nThe patient is safe for discharge and is safe for outpatient management.\n\nCurrently, this patient is safe for discharge and to follow up with the primary pediatrician.",
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
