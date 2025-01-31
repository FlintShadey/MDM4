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
        @click="secondaryValue += 'Poisoning by unspecified drugs, medicaments and biological substances, accidental (unintentional), initial encounter; '"
      >
        accidental
      </v-btn>
      
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Poisoning by unspecified narcotics, accidental (unintentional),; '"
      >
       narcotics
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Poisoning by benzodiazepines, accidental (unintentional), initial encounter; '"
      >
       benzodiazepines
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Poisoning by antiallergic and antiemetic drugs, accidental (unintentional), initial encounter; '"
      >
        antiallergic and antiemetic
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Poisoning by unspecified antipsychotics and neuroleptics, accidental (unintentional), initial encounter; '"
      >
       antipsychotics
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Toxic effect of unspecified substance, accidental (unintentional), initial encounter; '"
      >
        unspecified substance
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
  name: "AccidentalIngestion",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents after accidental ingestion.\n\nThe patient has no sympathomimetic toxidrome, such as hyper-vigilance, agitated delirium, hallucinations, or paranoia.\n\nThe patient has no anticholinergic toxidrome, such as hallucinations, mumbling speech, or agitated delirium.\n\nThe patient has no hallucinogenic toxidrome, such as hallucinations, distortions of perception, synesthesia, or agitation.\n\nThe patient has no serotonin toxicity, such as agitated delirium, confusion, or unresponsiveness.\n\nThe patient has no opioid toxidrome, such as sedation or coma.\n\nThe patient has no cholinergic toxidrome, such as sedation, confusion, stupor, or coma.\n\nThe patient denies any suicidal ideation, plan, or intent. The ingestion was accidental and not an attempt at self-harm.\n\nThe patient is currently medically cleared from a toxicological perspective and is instructed to follow up with a primary care physician within the next 2 days.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents after accidental ingestion.\n\nThe patient has no sympathomimetic toxidrome, such as hyper-vigilance, agitated delirium, hallucinations, or paranoia.\n\nThe patient has no anticholinergic toxidrome, such as hallucinations, mumbling speech, or agitated delirium.\n\nThe patient has no hallucinogenic toxidrome, such as hallucinations, distortions of perception, synesthesia, or agitation.\n\nThe patient has no serotonin toxicity, such as agitated delirium, confusion, or unresponsiveness.\n\nThe patient has no opioid toxidrome, such as sedation or coma.\n\nThe patient has no cholinergic toxidrome, such as sedation, confusion, stupor, or coma.\n\nThe patient is euvolemic and does not appear toxic.\n\nThe patient is safe for discharge and outpatient management. The guardian is instructed to follow up with the pediatrician in the next few days.",
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
