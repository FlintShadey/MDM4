<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Diagnosis HELLP </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Headache; '"
      >
        Headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Headache with orthostatic component,; '"
      >
        orthostatic Headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            'Pre-existing secondary hypertension complicating pregnancy, first trimester; '
        "
      >
        hypertension
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Other visual disturbances; '"
      >
        visual disturbances
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Nausea; '">
        Nausea
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Edema, unspecified; '"
      >
        edema
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
        pregnant HTN meds
      </v-btn>
      <v-dialog v-model="dialog" max-width="66%">
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
import PregnantHTN from "@/assets/PregnantHTN.png";
export default {
  name: "NotPreEclampsia",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "Currently, there is no evidence of preeclampsia, including no elevated systolic blood pressure greater than 140 mmHg or diastolic blood pressure greater than 90 mmHg.\n\nThe patient has no evidence of petechiae, no abnormal lung sounds suggestive of pulmonary edema, and no visual disturbances, including blurred vision or flashing lights.\n\nThe patient has no signs of epigastric pain or right upper quadrant tenderness, and there is no evidence of fetal distress.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "Diagnostic criteria for HELLP syndrome\n\nHemolysis\nAbnormal peripheral smear\nTotal bilirubin > 1.2 mg/dl\n\nElevated liver enzymes\nLactate dehydrogenase >600 U/l\nAspartate aminotransaminase/alanine\nAminotransferase >70 U/l\nLow platelets\nPlatelets < 100×10°/\n\nAssociated findings with HELLP syndrome include: elevated liver enzymes, low platelet count, hemolysis (broken red blood cells), right upper quadrant abdominal pain, nausea, vomiting, headache, visual disturbances, swelling in the hands and face, high blood pressure, proteinuria (protein in the urine), and jaundice,",
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
      //   window.open("https://www.google.com", "_blank");
      this.dialogImgUrl = PregnantHTN; // Use the imported image
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
