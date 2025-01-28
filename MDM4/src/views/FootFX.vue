<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue">
        POst Brace check
      </v-btn>
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
        @click="secondaryValue += ' Fracture of calcaneus; '"
      >
        calcaneus
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Fracture of talus; '"
      >
        talus
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            ' Fracture of other and unspecified tarsal bone(s); '
        "
      >
        tarsal bone
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            ' Fracture of metatarsal bone; '
        "
      >
        metatarsal
      </v-btn>
     
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ', left, initial encouter; '"
      >
         left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ', right, initial encouter; '"
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
      <v-btn @click="openExternalLink" color="yellow"> foot bones </v-btn>
      <v-dialog v-model="dialog" max-width="45%">
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
  name: "FootFX",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with a foot injury.\n\nA sprain could cause pain and swelling, but it usually involves the ligaments and tends to be less severe than a fracture.\n\nTendonitis could cause localized pain, but it typically develops gradually over time and is not commonly linked to acute injury, making it less likely in this case.\n\nA foot fracture results from trauma, and the patient’s symptoms and mechanism of injury are consistent with this diagnosis.\n\nBased on the clinical presentation, a foot fracture is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised with podiatry or orthopedics soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "After applying the brace, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the brace as it wasn't exerting pressure on any nerve or blood vessel. The patient received guidance on when to seek further medical care.",
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
      this.dialogImgUrl = "/MDM4/src/assets/footbones.png";
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
