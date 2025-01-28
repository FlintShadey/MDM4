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
        @click="secondaryValue += 'acute pain due to trauma;  '"
      >
        Trauma Pain
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in left _____ finger; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right ______ finger; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Complete '"
      >
        complete
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'partial  '"
      >
        partial
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'amputation '"
      >
        amputation
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'left '"
      >
        left
      </v-btn>
            <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ', right '"
      >
         right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'thumb'"
      >
       thumb
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ', index finger'"
      >
         index
      </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ', middle finger'"
            >
            middle
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ', ring finger'"
            >
            ring
        </v-btn>
        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ', little finger'"
            >
            little
        </v-btn>

        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += ', initial encounter; '"
            >
            inital encounter
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
  name: "GenericTemplate",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with avulsion of the fingernail.\n\nThe patient does not have any sign of infection.\n\nThe wound was cleaned and hemostasis was achieved.\n\nThere is no disruption of digital tendons.\n\nPhysical exam did not reveal any displaced or unstable finger fracture, or foreign body.\n\nThe patient is instructed that nails grow slowly, so a completely avulsed nail may take several months to grow back. Also instructed that keeping the wound clean and protected is crucial.\n\nThe patient is safe for outpatient management and encouraged to seek hand surgery follow-up.",
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
