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
        @click="
          secondaryValue +=
            'Rash and other nonspecific skin eruption; '
        "
      >
         rash
      </v-btn>
      

      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Impetigo, unspecified; '"
      >
        Impetigo
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Dermatitis, unspecified; '"
      >
        Dermatitis
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Scarlet fever '"
      >
        Varicella
      </v-btn>

      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += 'Erysipelas; '">
        Erysipelas
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Erythematous condition, unspecified '"
      >
        Erythematous condition
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Folliculitis, unspecified; '"
      >
        Folliculitis
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
        Rashes
      </v-btn>
      <v-dialog v-model="dialog" max-width="60%">
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
import adultrash from "@/assets/adultrashes.png";
export default {
  name: "Maculopapularrash",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "Patient presents with a maculopapular rash, likely due to a bacterial infection such as Staphylococcus or Streptococcus.\n\nImpetigo, commonly caused by staph or strep bacteria, is a superficial skin infection characterized by honey-colored crusting over red sores. It usually begins as small blisters that break open and become crusty. The presence of these distinct lesions in areas of broken skin or around the nose and mouth supports this diagnosis.\n\nScarlet Fever, caused by streptococcal bacteria, involves a fine, red rash that feels like sandpaper. The rash typically begins on the chest and spreads and is often accompanied by a strawberry-like appearance of the tongue and facial flushing.\n\nCellulitis involves a deeper layer of the skin and is typically caused by strep or staph bacteria. It presents as a diffuse, tender, red, swollen area that is warm to the touch. The absence of clearly defined raised lesions helps differentiate cellulitis from a more superficial rash.\n\nErysipelas, also primarily caused by strep bacteria, is similar to cellulitis but involves the upper dermis and presents with a well-demarcated, raised, and tender area. It typically has a more sudden onset and is associated with fever and chills.\n\nFolliculitis, caused by staph bacteria, presents as red, raised bumps centered on hair follicles. These lesions can be itchy or tender. While it can appear similar to a maculopapular rash, the localization around hair follicles is distinctive.\n\nThe patient is considered safe for outpatient management. The patient is encouraged to follow up with a primary care provider or a dermatologist.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "Patient presents with a maculopapular rash, likely due to a bacterial infection such as Staphylococcus or Streptococcus.\n\nImpetigo, commonly caused by staph or strep bacteria, is a superficial skin infection characterized by honey-colored crusting over red sores. It usually begins as small blisters that break open and become crusty. The presence of these distinct lesions in areas of broken skin or around the nose and mouth supports this diagnosis.\n\nScarlet Fever, caused by streptococcal bacteria, involves a fine, red rash that feels like sandpaper. The rash typically begins on the chest and spreads and is often accompanied by a strawberry-like appearance of the tongue and facial flushing.\n\nCellulitis involves a deeper layer of the skin and is typically caused by strep or staph bacteria. It presents as a diffuse, tender, red, swollen area that is warm to the touch. The absence of clearly defined raised lesions helps differentiate cellulitis from a more superficial rash.\n\nErysipelas, also primarily caused by strep bacteria, is similar to cellulitis but involves the upper dermis and presents with a well-demarcated, raised, and tender area. It typically has a more sudden onset and is associated with fever and chills.\n\nFolliculitis, caused by staph bacteria, presents as red, raised bumps centered on hair follicles. These lesions can be itchy or tender. While it can appear similar to a maculopapular rash, the localization around hair follicles is distinctive.\n\nThe patient is not septic or toxic appearing.\n\nThe patient is safe for discharge and follow-up with the pediatrician very soon.",
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
      this.dialogImgUrl = adultrash; // Use the imported image
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
