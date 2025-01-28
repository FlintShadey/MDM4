<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue">
        post brace check
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
        @click="secondaryValue += ' FALL, initial encounter; '"
      >
        fall
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in left ankle; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right ankle; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="
          secondaryValue +=
            'Acute closed fracture of left _______, initial encounter; '
        "
      >
        fracture of left ___
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="
          secondaryValue +=
            'Acute closed fracture of right _______, initial encounter; '
        "
      >
        fracture of right ___
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Lateral Malleolus; '"
      >
        lateral malleolus
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Medial Malleolus; '"
      >
        medial malleolus
      </v-btn>

        <v-btn
            color="#72728a"
            class="ma-2"
            @click="secondaryValue += 'Bimalleolar; '"

        >
            bimalleolar
        </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Displaced; '"
      >
        displaced
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'NON displaced; '"
      >
        non displaced
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
      <v-btn @click="openExternalLink" color="yellow"> ankle fractures </v-btn>
      <v-dialog v-model="dialog" max-width="70%">
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
  name: "AnkleFX",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with an ankle injury.\n\nAnkle sprain was considered, however, this seems to be more severe than just stretching of the ligaments.\n\nAchilles tendon injury can occur near the ankle and presents with pain at the back of the ankle, but this injury seems to involve more than just the posterior ankle.\n\nGout might also affect the ankle, causing sudden, severe pain and swelling. However, if the pain is localized to the ankle and occurred following trauma, gout is less likely.\n\nBased on the clinical examination and the presence of severe pain, swelling, and potential bruising or deformity after an injury, an ankle fracture is considered the most likely diagnosis.\n\nThe patient is considered safe for outpatient management with the RICE protocol to reduce swelling and pain. I have recommended that the patient follow up with an orthopedic surgeon.",
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
      this.dialogImgUrl = "/MDM4/src/assets/anklefx.png";
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
