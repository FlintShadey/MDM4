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
        @click="secondaryValue += 'Abscess of Bartholins gland; '"
      >
        Bartholins
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pelvic and perineal pain; '"
      >
        pelvic pain
      </v-btn>
  
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Cellulitis of buttock; '"
      >
     Cellulitis of buttock
      </v-btn>
      
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Lymphadenopathy; '"
      >
        Lymphadenopathy
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
  name: "Bartholins",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with a vaginal mass.\n\nVaginal Prolapse: Could present as a vaginal mass, but it is not present.\n\nSkene's Cyst: Can present as a vaginal mass near the urethra, but it is less common and usually associated with urinary symptoms, which are not present.\n\nBased on the clinical presentation, Bartholin's cyst is considered the most likely diagnosis.\n\nThe patient has vaginal pain and swelling consistent with a Bartholin gland abscess without evidence of deeper space infection, overlying genitourinary cellulitis, or significant systemic symptoms of illness.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Attending/Provider: Me, J. Flint Smith, MD\n\nProcedure: I&D of Bartholin’s Abscess\n\nIndication: The patient presented with a painful, fluctuant swelling in the labial region consistent with a Bartholin’s cyst abscess.\n\nInformed consent was obtained after discussing risks, benefits, and alternatives.\n\nAnesthesia: Local infiltration with 1% lidocaine without epinephrine at the site of swelling.\n\nProcedure Details:\n\nThe vulvar area was cleansed with an antiseptic solution.\n\nA small stab incision was made at the most fluctuant point.\n\nPurulent material was expressed.\n\nThe cavity was irrigated with normal saline to clear debris.\n\nA Word catheter was inserted into the cavity, the balloon was inflated for continuous drainage.\n\nComplications: None. No excessive bleeding or tissue injury was observed.",
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
