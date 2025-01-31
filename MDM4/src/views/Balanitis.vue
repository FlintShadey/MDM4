        @click="secondaryValue += 'Pain in the left _____; '"
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
        @click="secondaryValue += 'Epididymitis; '"
      >
        Epididymitis
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Epididymo-orchitis; '"
      >
        Epididymo-orchitis
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Inflammatory disorders of scrotum; '"
      >
        Inflammatory
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Acute prostatitis; '"
      >
        Acute prostatitis
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
        @click="secondaryValue += 'Lymphadenopathy; '"
      >
        Lymphadenopathy
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

    <!-- EXAMPLE LINK BUTTON -->
    <div class="mt-5">
      <v-btn @click="openExternalLink" color="yellow">
        Twist Score for torsion
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
  name: "Balanitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with penile swelling.\n\nPhimosis might cause difficulty retracting the foreskin, but it does not typically result in acute swelling or redness unless complicated by infection, which is not present.\n\nParaphimosis involves a retracted foreskin that cannot be returned to its normal position, often resulting in severe pain and constriction. These symptoms are not present.\n\nSexually transmitted infection might cause penile discharge, painful urination, or ulcers, but these are not present.\n\nI don’t think this is allergic contact dermatitis, which could lead to localized swelling and rash.\n\nThe patient’s symptoms align well with balanitis, which is inflammation of the glans penis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with penile swelling.\n\nPhimosis might cause difficulty retracting the foreskin, but it does not typically result in acute swelling or redness unless complicated by infection, which is not present.\n\nParaphimosis involves a retracted foreskin that cannot be returned to its normal position, often resulting in severe pain and constriction. These symptoms are not present.\n\nI don't think this is allergic contact Dermatitis, which could lead to localized swelling and rash.\n\nThe patient’s symptoms align well with balanitis, which is inflammation of the glans penis.\n\nThe patient is euvolemic and does not appear toxic.\n\nThe patient is safe for discharge and outpatient management. Guardian is instructed to follow up with the pediatrician in the next few days.",
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
      window.open("https://www.mdcalc.com/calc/10440/testicular-workup-ischemia-suspected-torsion-twist", "_blank");
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
