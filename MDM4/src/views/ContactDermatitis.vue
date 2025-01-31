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
        @click="secondaryValue += 'Allergic contact dermatitis, unspecified cause; '"
      >
        Allergic
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Irritant contact dermatitis, unspecified cause; '"
      >
       Irritant
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Unspecified contact dermatitis, unspecified cause; '"
      >
        Unspecified
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Allergic contact dermatitis due to metals; '"
      >
        metals
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Allergic contact dermatitis due to plants, except food;  '"
      >
       plants
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Irritant contact dermatitis due to detergents; '"
      >
       detergents
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Allergic contact dermatitis due to cosmetics; '"
      >
        cosmetics
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Allergic contact dermatitis due to other chemical products; '"
      >
        chemical
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
  name: "ContactDermatitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with a skin rash.\n\nAtopic dermatitis may cause a chronic, itchy rash, often with a personal or family history of allergies or asthma, which is not present here.\n\nPsoriasis can present with well-demarcated, scaly plaques, often on the elbows, knees, or scalp, which is not the case here.\n\nFungal infection could cause a ring-shaped, scaly rash, sometimes itchy, but this presentation is not consistent with a clear ring pattern or fungal involvement.\n\nThe patient’s rash aligns well with contact dermatitis, which occurs when the skin comes into contact with an irritant or allergen.\n\nThe patient has not been camping or in the woods, reducing the likelihood of tick-borne disease exposure.\n\nThere is no mucosal membrane involvement, so Steven-Johnson syndrome or toxic epidermal necrolysis is unlikely.\n\nNo wheezing or difficulty breathing, with low suspicion for systemic involvement.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with a skin rash.\n\nAtopic dermatitis may cause a chronic, itchy rash, often with a personal or family history of allergies or asthma, which is not present here.\n\nPsoriasis can present with well-demarcated, scaly plaques, often on the elbows, knees, or scalp, which is not the case here.\n\nFungal infection could cause a ring-shaped, scaly rash, sometimes itchy, but this presentation is not consistent with a clear ring pattern or fungal involvement.\n\nThe patient’s rash aligns well with contact dermatitis, which occurs when the skin comes into contact with an irritant or allergen.\n\nThe patient has not been camping or in the woods, reducing the likelihood of tick-borne disease exposure.\n\nThere is no mucosal membrane involvement, so Steven-Johnson syndrome or toxic epidermal necrolysis is unlikely.\n\nNo wheezing or difficulty breathing, with low suspicion for systemic involvement.\n\nThe patient is euvolemic and does not appear toxic.\n\nThe patient is safe for discharge and outpatient management. Guardian is instructed to follow up with the pediatrician in the next few days.",
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
