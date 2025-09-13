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
        color="#FF5722"
        class="ma-2"
        @click="secondaryValue += 'Foreign body in esophagus; '"
      >
        foreign body in esophagus
      </v-btn>
      <v-btn
        color="#FF5722"
        class="ma-2"
        @click="secondaryValue += 'Foreign body in stomach; '"
      >
        foreign body in stomach
      </v-btn>
      <v-btn
        color="#FF5722"
        class="ma-2"
        @click="secondaryValue += 'Foreign body in small intestine; '"
      >
        foreign body in small intestine
      </v-btn>
      <v-btn
        color="#FF5722"
        class="ma-2"
        @click="secondaryValue += 'Foreign body in colon; '"
      >
        foreign body in colon
      </v-btn>
      <v-btn
        color="#FF5722"
        class="ma-2"
        @click="secondaryValue += 'Foreign body in rectum; '"
      >
        foreign body in rectum
      </v-btn>
      <v-btn
        color="#FF5722"
        class="ma-2"
        @click="secondaryValue += 'Foreign body in anus and anal canal; '"
      >
        foreign body in anus and anal canal
      </v-btn>
      <v-btn
        color="#FF5722"
        class="ma-2"
        @click="
          secondaryValue += 'Foreign body in alimentary tract, unspecified; '
        "
      >
        foreign body in alimentary tract unspecified
      </v-btn>
      <v-btn
        color="#E91E63"
        class="ma-2"
        @click="secondaryValue += 'Food bolus impaction, esophagus; '"
      >
        food bolus impaction esophagus
      </v-btn>
      <v-btn
        color="#E91E63"
        class="ma-2"
        @click="secondaryValue += 'Esophageal obstruction; '"
      >
        esophageal obstruction
      </v-btn>
      <v-btn
        color="#9C27B0"
        class="ma-2"
        @click="secondaryValue += 'Dysphagia; '"
      >
        dysphagia
      </v-btn>
      <v-btn
        color="#3F51B5"
        class="ma-2"
        @click="secondaryValue += 'Throat pain; '"
      >
        throat pain
      </v-btn>
      <v-btn
        color="#2196F3"
        class="ma-2"
        @click="secondaryValue += 'Chest pain; '"
      >
        chest pain
      </v-btn>
      <v-btn
        color="#03A9F4"
        class="ma-2"
        @click="secondaryValue += 'Abdominal pain; '"
      >
        abdominal pain
      </v-btn>
      <v-btn
        color="#009688"
        class="ma-2"
        @click="secondaryValue += 'Traumatic pain; '"
      >
        traumatic pain
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
  name: "SwallowedFB",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with a swallowed foreign body.\n Airway aspiration could cause coughing, choking, stridor, wheeze, or hypoxia; these features are not present.\n Esophageal impaction could cause drooling, inability to handle secretions, odynophagia, or persistent chest/neck pain; these are not present.\n Button battery ingestion could cause rapid caustic injury; a history of battery ingestion, corrosive symptoms, and concerning object characteristics are not present.\n Multiple magnet ingestion could cause pressure necrosis and fistula formation; ingestion of magnets and significant abdominal pain are not present.\n Sharp or elongated objects could perforate; a history of a sharp/long object and signs of peritoneal irritation, hematemesis, melena, or severe chest/abdominal pain are not present.\n Bowel obstruction or perforation could cause persistent vomiting, abdominal distention, fever, or tachycardia; these findings are not present.\nThe patient's presentation aligns well with a swallowed foreign body that is safe in the intestinal tract.\n The patient is not septic or toxic.\n The patient is safe for discharge and should follow up with their health care provider very soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Pediatric swallowed foreign body MDM text not created",
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
