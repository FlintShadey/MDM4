<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> no alt text </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Calculus of bile duct ; '"
      >
       Calculus of bile duct
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Calculus of gallbladder '"
      >
        Calculus of gallbladder
      </v-btn>
 
      <v-btn
        color="red"
        class="ma-2"
        @click="secondaryValue += 'with acute cholecystitis  '"
      >
        with acute cholecystitis
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'without acute cholecystitis  '"
      >
        without acute cholecystitis
      </v-btn>
           <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'with obstruction; '"
      >
       with obstruction
      </v-btn>
           <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'without obstruction; '"
      >
        without obstruction
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Epigastric pain; '"
      >
        Epigastric pain
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
        @click="secondaryValue += 'Generalized abdominal pain; '"
      >
       Generalized
      </v-btn>


      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Nausea; '"
      >
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
        @click="secondaryValue += 'Abdominal distension; '"
      >
         distension
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
  name: "BiliaryColic",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with right upper quadrant abdominal pain.\n\nThe absence of fever or jaundice suggests that there is no accompanying cholecystitis or cholangitis.\n\nThis does not seem to be acute cholecystitis because there is no fever, positive Murphy's sign, or jaundice.\n\nHepatitis is unlikely as there is no jaundice or malaise.\n\nThis does not seem to be peptic ulcer disease because the pain is not related to food.\n\nBased on the available evidence, this appears to be biliary colic without evidence of infection.\n\nThe patient is currently euvolemic, not toxic, and not septic.\n\nThe patient is safe for discharge and outpatient management with strict instructions to return to the emergency room for fever, uncontrollable vomiting, or worsening abdominal pain.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "no alternate text",
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
