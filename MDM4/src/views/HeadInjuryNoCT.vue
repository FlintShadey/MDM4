<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea
      v-model="primaryValue"
      auto-grow
      label=""
      hint=""
      outlined
    ></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM</v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue">
        Pediatric
      </v-btn>
    </div>

    <!-- SNIPPET BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' superficial injury of scalp; '"
      >
        scalp injury
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
        @click="secondaryValue += ' acute pain due to trauma; '"
      >
        trauma pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' contusion of scalp, intial;'"
      >
        scalp contusion
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' nausea; '"
      >
        nausea
      </v-btn>
    </div>

    <!-- SECONDARY TEXTAREA -->
    <div class="mt-5">
      <v-textarea
        v-model="secondaryValue"
        label=""
        hint="Appended text appears here"
        auto-grow
        outlined
      ></v-textarea>

      <div class="text-center">
        <v-btn @click="copyToClipboardSecond" color="yellow">
          Copy DIagnosis
        </v-btn>
      </div>
    </div>

    <!-- EXAMPLE LINK BUTTON -->
    <div class="mt-5">
      <v-btn @click="openExternalLink" color="yellow">
        PECARN
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
  name: "HeadInjuryNoCT",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "This patient presents after blunt head trauma. There was no loss of consciousness. Behavior has been normal since the injury. There has been no lethargy, vomiting, or neck pain.\n\nThe patient does not have amnesia, perseveration, confusion, visual changes, localized weakness, numbness, tingling, incoordination, or any other concerning neurological symptoms.\n\nThe physical exam shows no skull deformity, hematoma, bruising, midline spinal tenderness, or neurologic deficits.\n\nThe patient understood that the patient needs to return to the emergency department immediately for a head CT scan if any worrisome symptoms develop.\n\nThere is no indication of bony injury of the spine, or of spinal cord injury so no c-spine imaging was done. \n\nPatient is safe for outpatient management. Warning signs for cord injury were given and the patient is encouraged to return if these occur.",
      // Secondary text (for appended snippets or alternative content)
      secondaryValue: "",
      // An alternate text for demonstration
      alternateValue:
       "Patient presents with a pediatric head injury.\n\nA skull fracture might present with severe localized pain, swelling, or bruising, but it is often associated with significant trauma or symptoms like visible deformity or neurological deficits, which are not reported here.\n\nIntracranial Hemorrhage could cause more severe symptoms like loss of consciousness, vomiting, or lethargy, none of which are present in this case.\n\nBecause of mechanism, history, and physical exam findings, there is a low probability of serious injury to include intracranial bleed or skull fracture, or high risk of decompensation.\n\nThe patient is not altered, and has no loss of consciousness.\n\nPECARN rules demonstrate an exceptionally low risk of serious intracranial injury and obtaining further imaging is likely to be of little or no benefit, with unnecessary radiation.\n\nBased on the clinical presentation, the patient is safe for outpatient management. Follow-up with the pediatrician is advised if symptoms worsen or fail to improve.",
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
          this.showSnackbar("Primary text copied to clipboard!", "success");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
          this.showSnackbar("Failed to copy primary text.", "error");
        }
      );
    },

    /**
     * Copies the content of 'secondaryValue' to the clipboard.
     */
    copyToClipboardSecond() {
      navigator.clipboard.writeText(this.secondaryValue).then(
        () => {
          this.showSnackbar("Secondary text copied to clipboard!", "success");
        },
        (err) => {
          console.error("Failed to copy text: ", err);
          this.showSnackbar("Failed to copy secondary text.", "error");
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
      window.open( "https://www.mdcalc.com/calc/589/pecarn-pediatric-head-injury-trauma-algorithm", "_blank");
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
  max-width: 600px;
}
</style>
