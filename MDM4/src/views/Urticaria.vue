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
        @click="secondaryValue += 'Allergic urticaria; '"
      >
        Allergic urticaria
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Idiopathic urticaria '"
      >
       Idiopathic urticaria

      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Urticaria due to cold and heat; '"
      >
        cold and heat
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Dermatographic urticaria; '"
      >
        Dermatographic
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Contact urticaria;  '"
      >
       Contact urticaria

      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Solar urticaria '"
      >
       Solar urticaria
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Generalized skin eruption due to drugs and medication taken internally '"
      >
        Generalized medication taken internally
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Localized skin eruption due to drugs and medication taken internally; '"
      >
        Localized medication taken internally
      </v-btn>
     <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Adverse effect of penicillins, initial encounter; '"
      >
        Adverse effect of penicillin
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Rash and other nonspecific skin eruption; '">
        rash
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
  name: "Urticaria",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with a skin rash.\n\nContact Dermatitis might cause a rash, but it typically results from direct exposure to an irritant or allergen leading to localized eczematous changes, which is not the case here.\n\nDrug Eruption can present with a widespread rash, but it is usually associated with a recent medication change, which is not reported.\n\nInsect Bites could cause localized, itchy welts, but they tend to appear as distinct bite marks or small clusters rather than a generalized rash.\n\nThe patient’s presentation aligns well with urticaria, which presents with raised, itchy welts.\n\nThe patient has not been camping or in the woods, reducing the likelihood of tick-borne disease exposure.\n\nThere is no mucosal membrane involvement, so Steven-Johnson syndrome or toxic epidermal necrolysis is unlikely.\n\nNo wheezing or difficulty breathing, with low suspicion for systemic involvement.\n\nThe patient is safe for discharge and follow-up with a primary care physician very soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with a skin rash.\n\nContact Dermatitis might cause a rash, but it typically results from direct exposure to an irritant or allergen leading to localized eczematous changes, which is not the case here.\n\nDrug Eruption can present with a widespread rash, but it is usually associated with a recent medication change, which is not reported.\n\nInsect Bites could cause localized, itchy welts, but they tend to appear as distinct bite marks or small clusters rather than a generalized rash.\n\nThe patient’s presentation aligns well with urticaria, which presents with raised, itchy welts.\n\nThe patient has not been camping or in the woods, reducing the likelihood of tick-borne disease exposure.\n\nThere is no mucosal membrane involvement, so Steven-Johnson syndrome or toxic epidermal necrolysis is unlikely.\n\nNo wheezing or difficulty breathing, with low suspicion for systemic involvement.\n\nThe patient is euvolemic and does not appear toxic.\n\nThe patient is safe for discharge and outpatient management. Guardian is instructed to follow up with the pediatrician in the next few days.",
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
