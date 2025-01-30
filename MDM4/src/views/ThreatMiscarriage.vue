<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> miscarriage </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Threatened abortion; '"
      >
        Threatened abortion
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="
          secondaryValue +=
            '  Hemorrhage in early pregnancy, unspecified, unspecified; '
        "
      >
        Hemorrhage in early pregnancy
      </v-btn>
      <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="secondaryValue += 'everything '"
      >
        everything
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pelvic and perineal pain; '"
      >
        Pelvic pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Lower abdominal pain, unspecified '"
      >
        Lower abdominal pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Gross hematuria; '"
      >
        hematuria
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            'Complete or unspecified spontaneous abortion without complication; '
        "
      >
        abortion
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Incomplete spontaneous abortion without complication; '">
       Incomplete
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
  name: "ThreatMiscarriage",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with bleeding during the first trimester of pregnancy.\n\nSometimes, cervical changes that occur during pregnancy can lead to light spotting; this is a potential cause.\n\nIt is possible that a urinary tract infection has caused the blood.\n\nIt seems that this is a threatened miscarriage because of the presence of bleeding during the first trimester of pregnancy.\n\nBased on the clinical examination and the presence of first-trimester bleeding with no confirmation of ectopic pregnancy, and after considering the common causes of bleeding during early pregnancy, a threatened miscarriage is considered the likely diagnosis.\n\nThe patient does not currently have an ectopic pregnancy and is not septic or toxic.\n\nThe patient is safe for discharge and outpatient management. She has to follow up with her OB-GYN doctor very soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with vaginal bleeding during pregnancy.\n\nAlthough this could be a threatened miscarriage, the bleeding seems more significant, and there are indications of worsening back pain.\n\nI don't believe that this is an ectopic pregnancy because there are no signs of internal bleeding or peritoneal signs.\n\nThis doesn't seem to be caused by a placental abruption.\n\nIt seems that the patient is presenting with a miscarriage because of the vaginal bleeding and the pelvic cramping.\n\nThe patient is not septic or toxic.\n\nThe patient is safe for discharge and outpatient follow-up with their OB-GYN doctor.",
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
