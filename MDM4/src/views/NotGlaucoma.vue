<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Treatment </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'acute left eye pain; '"
      >
        eye pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ' acute right eye pain; '"
      >
        eye pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' headache; '"
      >
        headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sample text Diagnosis #4; '"
      >
        Add Diagnosis #4
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Sample text Diagnosis #5; '"
      >
        Add Diagnosis #5
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
        Acute Angle Glaucoma
      </v-btn>
      <v-dialog v-model="dialog" max-width="75%">
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
      max-width="400"
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
      primaryValue: "The patient does not appear to have acute angle glaucoma, as there is no decreased vision, no halos around lights, and no nausea or vomiting.\n\nCurrently, on exam, there is no conjunctival redness, corneal edema or cloudiness.\n\nThere is no shallow anterior chamber, and the pupil is not mid-dilated. The pupil reacts well to light.\n\n***** Intraocular pressure of the eye, as measured by Tonopen, is 17 mmHg, so I do not believe that this is acute angle glaucoma.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "When there is likely to be an hour or more delay before a patient can be seen by an ophthalmologist, and the suspicion of an acute attack is high, empiric treatment should be initiated. If the vision is normal, but other symptoms and signs suggest an acute angle-closure attack, empiric treatment should only be given if the intraocular pressure is significantly elevated (eg, >40 mmHg). For an acute primary angle-closure attack, initial management involves prompt administration of pressure-lowering eye drops. A possible regimen would be one drop each, one minute apart, of:\n\n●0.5% timolol maleate;\n\n●1% apraclonidine; and\n\n●2% pilocarpine, especially immediately prior to laser peripheral iriԁоtоmу\n\nWe also suggest giving the patient 500 mg of oral or intravenous (IV) acetazolamide. The eye pressure should be checked 30 to 60 minutes after giving pressure-lowering drops and аϲеtаzolаmiԁe. If the eye pressure is still significantly elevated, the same drops could be given again, but the patient should also be examined immediately by an ophthalmologist. Systemic medications other than аϲеtаzоlamidе (such as IV mannitol) should be administered under the guidance of an ophthalmologist, since angle-closure should be confirmed before they are given.\n\nIf medical treatment is successful in reducing ІОР, as is most often the case, corneal edema and eye pain will typically lessen or resolve. In refractory cases, the ophthalmologist may consider performing an anterior chamber paracentesis to remove some aqueous humor and immediately lower the eye pressure temporarily, which may help to break the attack. Once the attack is broken, the treatment of choice is a peripheral iriԁоtomy. If laser peripheral iriԁotоmу fails to remain patent, or the cornea is too cloudy to visualize the iris, surgical peripheral iridectomy may be necessary.",
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
      this.dialogImgUrl = "/MDM4/src/assets/glaucoma.png";
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
