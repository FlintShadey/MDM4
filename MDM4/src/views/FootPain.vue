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
        @click="secondaryValue += 'Pain in the left foot; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right foot; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Idiopathic gout, left ankle and foot; '"
      >
        gout left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' Idiopathic gout, right ankle and foot; '"
      >
        gout right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Plantar fascial fibromatosis; '"
      >
        plantar fasciitis (weird code)
      </v-btn>
      
        <v-btn
            color="#665251"
            class="ma-2"
            @click="secondaryValue += 'Metatarsalgia; '"

        >
          Metatarsalgia
        </v-btn>
      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += ', left; '">
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
  name: "FootPain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "Patient presents with non-traumatic foot pain.\n\nAchilles tendinitis could result in pain in the back of the heel, but the Achilles tendon appears to be non-tender.\n\nMetatarsalgia, characterized by pain and inflammation in the ball of the foot often due to overuse or pressure on the metatarsal bones, is a possibility.\n\nMorton's neuroma, indicated by thickening of the tissue around a nerve between the toes leading to sharp, burning foot pain, is a consideration, and the patient is recommended to follow up with podiatry for this.\n\nTarsal tunnel syndrome, involving compression of the tibial nerve as it passes through the tarsal tunnel, causing pain and tingling in the foot, is also in the differential.\n\nGout would typically manifest as sudden and severe pain, often in the big toe, but this is likely not the case based on the physical exam.\n\nPlantar fasciitis is characterized by inflammation of the thick band of tissue that runs across the bottom of the foot, causing heel pain, this is a possible cause.\n\nThe patient was advised on pain management and appropriate foot care, including rest and the use of supportive footwear. Monitoring for any changes in symptoms was also discussed. If the foot pain persists or worsens, further evaluation by podiatry may be warranted.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "Pediatric MDM text not created",
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
