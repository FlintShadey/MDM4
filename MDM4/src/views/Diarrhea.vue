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
        @click="secondaryValue += ' Lower abdominal pain '"
      >
        lower
      </v-btn>

      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Right lower quadrant pain; '"
      >
        rlq
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Left lower quadrant pain; '"
      >
        llq
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Periumbilical pain; '"
      >
        Periumbilical
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Generalized abdominal pain; '"
      >
        Generalized
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Right upper quadrant pain; '"
      >
        ruq
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Left upper quadrant pain; '"
      >
        luq
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Diarrhea, unspecified '"
      >
        Diarrhea
      </v-btn>

      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Abdominal distension; '"
      >
        distension
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            'Infectious gastroenteritis and colitis, unspecified; '
        "
      >
        Infectious AGE
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            'Non-infective gastroenteritis and colitis, unspecified; '
        "
      >
        Noninfective AGE
      </v-btn>
      <v-btn
        color="#dd42f5"
        class="ma-2"
        @click="
          secondaryValue +=
            '    Generalized abdominal pain; Diarrhea, unspecified Non-infective gastroenteritis and colitis, unspecified;  '
        "
      >
        everything diarrhea
      </v-btn>

      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Nausea; '">
        Nausea
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Nausea with vomiting, unspecified; '"
      >
        vomiting
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Dehydration; '"
      >
        Dehydration
      </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Fever; '">
        fever
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fatigue; '"
      >
        fatigue
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
  name: "Diarrhea",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with diarrhea.\n\nBowel ischemia was considered but deemed unlikely since the patient did not experience sudden severe abdominal pain or bloody stools, which are typical of this condition.\n\nPancreatitis was also assessed. Even though the patient presented with diarrhea, they did not describe the characteristic abdominal pain commonly associated with pancreatitis.\n\nAppendicitis was another possibility, but the patient's symptoms did not align with the usual signs associated with this condition.\n\nOther potential emergent issues like small bowel obstruction, coronary syndrome, and other acute abdominal conditions were explored but were determined to be inconsistent with the patient's presentation.\n\nThe patient is not septic or toxic.\n\nThe patient is safe for discharge and outpatient management and is encouraged to follow up with their primary care physician in the next few days.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with diarrhea.\n\nThe patient does not have any peritoneal signs, and there is no acute abdomen.\n\nAppendicitis was another possibility, but the patient's symptoms did not align with the usual signs associated with this condition.\n\nThe patient does not seem to be having severe constipation that could result in this condition.\n\nThe patient is euvolemic and does not appear toxic.\n\nThe patient is safe for discharge and outpatient management. The guardian is instructed to follow up with the pediatrician in the next few days.",
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
