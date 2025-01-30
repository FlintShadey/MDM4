<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> warts </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Herpesviral infection of genitalia and urogenital tract; '"
      >
        herpes urogenital
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' Herpesviral vulvovaginitis; '"
      >
       vulvovaginitis
      </v-btn>

      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Herpesviral infection of penis; '"
      >
       penis
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Herpesviral infection of other male genital organs; '"
      >
        other male genital 
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Anogenital (venereal) warts; '"
      >
       Anogenital warts

      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Condyloma latum; '"
      >
        Condyloma latum
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pelvic and perineal pain; '"
      >
        pelvic pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Ulcer of penis; '"
      >
        Ulcer of penis
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
  name: "Herpes",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with a rash to the genitalia.\n\nInitial consideration is for syphilis; however, the patient does not have a painless ulcer at the site of infection, rash, or swollen lymph nodes.\n\nI am also concerned about genital warts, but there are no flesh-colored or cauliflower-like warts in the genital area.\n\nAlso included in the differential is contact dermatitis, which can be a source of secondary infections. The patient is not aware of any new allergens.\n\nA strong consideration is for genital herpes.\n\nThe patient is safe for outpatient management and is instructed to follow up with their primary care physician soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with a rash to the genitalia.\n\nInitial consideration is for syphilis; however, the patient does not have a painless ulcer at the site of infection, rash, or swollen lymph nodes.\n\nA strong consideration is for genital herpes; however, the patient does not have small tender vesicles on an erythematous base.\n\nAlso included in the differential is contact dermatitis, which can be a source of secondary infections. The patient is not aware of any new allergens.\n\nThere seem to be flesh-colored warts in the genital area, so I believe this is genital warts.\n\nThe patient is safe for outpatient management and is instructed to follow up with their primary care physician soon.",
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
