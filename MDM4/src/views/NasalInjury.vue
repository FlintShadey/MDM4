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
        @click="secondaryValue += 'Acute pain of trauma; '"
      >
        Trauma pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Unspecified injury of face, Left; '"
      >
       Unspecified left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Unspecified injury of face, Right; '"
      >
       Unspecified right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' headache; '"
      >
        headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Contusion of the ; '"
      >
        Contusion of the ...
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Laceration without foreign body of the Left ; '">
      Laceration Left
      </v-btn>
         <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Laceration without foreign body of the right ; '">
      Laceration Right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Fracture of Nasal Bones;  '">
        Nasal Fracture
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Subluxation and Dislocation of Nasal Cartilagee; '">
        Dislocation
      </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ' Epistaxis; '">
            Epistaxis
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ' Nasal Septal Hematoma; '">
            Nasal Septal Hematoma
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ' Deviated Nasal Septum acquired; '">
         Deviated Nasal Septum
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ' intial encounter; '">
            intial
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
  name: "GenericTemplate",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with an injury to the nose.\n\nTenderness and swelling are isolated to the bony bridge of the nose.\n\nThe patient can breathe through each naris.\n\nThe nose is straight, and there is no deviation of the septum.\n\nThere is no septal hematoma.\n\nGiven this, I believe that the patient is safe for outpatient management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with an injury to the nose.\n\nTenderness and swelling are isolated to the bony bridge of the nose.\n\nThe patient can breathe through each naris.\n\nThe nose is straight, and there is no deviation of the septum.\n\nThere is no septal hematoma.\n\nGiven this, I believe that the patient is safe for outpatient management.\n\nGuardian is instructed to get close pediatric follow-up.",
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
