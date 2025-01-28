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
        @click="secondaryValue += ' Hordeolum  '"
      >
        stye 
      </v-btn>
      <v-btn
        color="#665153"
        class="ma-2"
        @click="secondaryValue += ' Chalazion  '"
      >
       Chalazion
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' internum '"
      >
        inner
      </v-btn>
      <v-btn
        color="#665153"
        class="ma-2"
        @click="secondaryValue += ' externum'"
      >
        outer
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' left'"
      >
        left
      </v-btn>
      <v-btn
        color="#665153"
        class="ma-2"
        @click="secondaryValue += ' right'">
        right
      </v-btn>
      <v-btn
        color="#515f66"
        class="ma-2"
        @click="secondaryValue += ' bilateral'">
        bilateral
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' upper'">
        upper
      </v-btn>
      <v-btn
        color="#665153"
        class="ma-2"
        @click="secondaryValue += ' lower'">
        lower  
      </v-btn>
        <v-btn
        color="#515f66"
        class="ma-2"
        @click="secondaryValue += ' eyelid'">
        eyelid
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
        Open External Link
      </v-btn>
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
  name: "sty",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with an eye problem.\n\nOrbital and periorbital cellulitis is not likely because the patient does not have symptoms like pain on eye movement, bulging of the eye, or systemic signs of infection such as fever. These symptoms are typically prominent in cellulitis but are absent in this patient's presentation.\n\nAllergic reactions usually involve both eyes and are often accompanied by other allergic symptoms, which are not described in this case.\n\nChalazion is unlikely because chalazions typically present as a painless bump on the eyelid. The patient's symptoms of redness and a pustule are more indicative of an infection rather than a blocked gland.\n\nWhile blepharitis can cause redness and swelling, it is typically associated with crusting and irritation of the eyelids. The presence of a distinct pustule and the lack of crusting or widespread irritation along the eyelid margin makes blepharitis less likely.\n\nDacryocystitis typically presents with pain, redness, and swelling in the area around the tear sac, near the inner corner of the eye. The patient's symptoms are more localized to the eyelid and do not match the typical presentation of dacryocystitis.\n\nThe absence of purulent discharge makes bacterial conjunctivitis less likely.\n\nThe patient's presentation of erythema and swelling of the eyelid with a pustule, without evidence of purulent discharge, systemic symptoms, or involvement of both eyes, supports the diagnosis of a stye over the other listed conditions.\nPatient is safe for outpatient management and is to follow up with an ophthalmologist if their condition worsens.`",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "The patient presents with an eye problem.\n\nOrbital and periorbital cellulitis is not likely because the patient does not have symptoms like pain on eye movement, bulging of the eye, or systemic signs of infection such as fever. These symptoms are typically prominent in cellulitis but are absent in this patient's presentation.\n\nAllergic reactions usually involve both eyes and are often accompanied by other allergic symptoms, which are not described in this case.\n\nChalazion is unlikely because chalazions typically present as a painless bump on the eyelid. The patient's symptoms of redness and a pustule are more indicative of an infection rather than a blocked gland.\n\nWhile blepharitis can cause redness and swelling, it is typically associated with crusting and irritation of the eyelids. The presence of a distinct pustule and the lack of crusting or widespread irritation along the eyelid margin makes blepharitis less likely.\n\nDacryocystitis typically presents with pain, redness, and swelling in the area around the tear sac, near the inner corner of the eye. The patient's symptoms are more localized to the eyelid and do not match the typical presentation of dacryocystitis.\n\nThe absence of purulent discharge makes bacterial conjunctivitis less likely.\n\nThe patient's presentation of erythema and swelling of the eyelid with a pustule, without evidence of purulent discharge, systemic symptoms, or involvement of both eyes, supports the diagnosis of a stye over the other listed conditions.\nPatient is safe for outpatient management and is to follow up with an pediatrician if their condition worsens.",
      // Snackbar controls
      snackbar: false,
      snackbarText: "",
      snackbarColor: "success",
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
      window.open("https://example.com", "_blank");
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
