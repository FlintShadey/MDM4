<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined ></v-textarea>

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
        @click="secondaryValue += 'arthralgia in _____ left; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'arthralgia in _____ right; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Joint Effusion; '"
      >
        joint swelling
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Joint Stiffness; '"
      >
        Joint Stiffness
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Myalgia; '"
      >
        Myalgia
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Obesity; '"
      >
        Obesity
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Fibromyalgia; '"
      >
        Fibromyalgia
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Primary generalized osteoarthritis; '"
      >
        osteoarthritis
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Secondary multiple arthritis; '"
      >
        Secondary multiple 
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Polyosteoarthritis, unspecified; '"
      >
        Polyosteoarthritis
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Osteoarthritis of the hip; '"
      >
        hip
      </v-btn>
           
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Inflammatory polyarthropathy, inflammatory arthritis of multiple joints; '"
      >
        inflammatory
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
      <v-textarea v-model="secondaryValue" auto-grow outlined label="Remember Laterality: "></v-textarea>

      <div class="text-center">
        <v-btn @click="copyToClipboardSecond" color="yellow">
          Copy Diagnosis
        </v-btn>
      </div>
    </div>

    <!-- EXAMPLE LINK BUTTON -->
    <div class="mt-5">
      <v-btn @click="openExternalLink" color="yellow">
        child hip septic arthritis 
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
  name: "arthritus",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with joint pain.\n\nThe patient has no history of an autoimmune disease that has caused the immune system to attack the joints, resulting in inflammation, pain, and joint damage, such as rheumatoid arthritis.\n\nThe patient does not have a history of psoriasis, nor visible evidence of psoriasis on the skin, so I do not believe that this is psoriatic arthritis.\n\nThe patient does not have a history of gout or sudden, severe pain and swelling, so this is unlikely to be gouty arthritis.\n\nThere is no fever, chills, malaise, or fatigue, and the joint is not locked up to suggest septic arthritis.\n\nBased on the history and course, it seems to suggest a degenerative joint process that has occurred over time, such as osteoarthritis.\n\nI will treat the patient symptomatically. We will encourage the patient to rest the joint and follow up with the primary care physician.",
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
      window.open("https://www.mdcalc.com/calc/1817/kocher-criteria-septic-arthritis", "_blank");
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
