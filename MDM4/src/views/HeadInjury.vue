<template>
  <v-container fluid>
    <!-- Using v-model for two-way binding -->
    <v-textarea v-model="value" auto-grow> </v-textarea>
    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow">Copy</v-btn>
    </div>
    <div class="text-end">
      <v-btn color="#b85fb2" class="text-right" @click="setPediatricValue">
        Pediatric
      </v-btn>
    </div>

    <!-- Example of adding paragraphs with spacing -->
    <div>
      <v-btn @click="secondValue += 'superficial injury of scalp; '"
        >scalp injury</v-btn
      >
      <v-btn @click="secondValue += 'headache; '">headache</v-btn>
      <v-btn @click="secondValue += 'acute pain due to trauma; '"
        >trauma pain</v-btn
      >
      <v-btn @click="secondValue += 'contusion of scalp, intial; '"
        >scalp contusion</v-btn
      >
      <v-btn @click="secondValue += 'nausea; '">nausea</v-btn>
    </div>

    <div>
      <v-textarea v-model="secondValue"></v-textarea>
      <div class="text-center">
        <v-btn @click="copyToClipboardSecond" color="yellow">Copy</v-btn>
      </div>
    </div>
    <div>
      <v-btn @click="openPecarn" color="yellow">PECARN</v-btn>
    </div>

    <!-- Snackbar for Notifications -->
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      timeout="3000"
      style="left: 50%; transform: translateX(-50%)"
      variant="tonal"
    >
      {{ snackbarText }}

      <template v-slot:actions>
        <v-btn color="white" text @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>
<script>
export default {
  name: "HeadInjury",
  data() {
    return {
      value:
        "The patient presents after sustaining a head injury.\n\nFrom the provided history, an epidural hematoma was a concern. However, the patient did not exhibit typical symptoms such as vomiting, confusion, vision changes, focal weakness, or seizures.\n\nA subdural hematoma was also considered, but the patient did not show signs of drowsiness, confusion, slurred speech, seizures, focal weakness, numbness, or difficulty walking.\n\nWhile a skull fracture was a potential issue, the current physical examination did not reveal any evidence of such a fracture.\n\nI dont suspect a traumatic brain injury since there are no indications of cognitive impairments, physical disabilities, or behavioral changes.\n\nCurrently, the physical examination confirms the absence of skull deformity, midline spinal tenderness, and neurologic deficits.\n\nGiven the findings, the patient is safe for outpatient treatment. They have been advised to consult their primary care physician or a neurologist should their symptoms intensify.\n",
      secondValue: "",
      pediatricvalue:
        "Patient presents with a pediatric head injury.\n\nA skull fracture might present with severe localized pain, swelling, or bruising, but it is often associated with significant trauma or symptoms like visible deformity or neurological deficits, which are not reported here.\n\nIntracranial Hemorrhage could cause more severe symptoms like loss of consciousness, vomiting, or lethargy, none of which are present in this case.\n\nBecause of mechanism, history, and physical exam findings, there is a low probability of serious injury to include intracranial bleed or skull fracture, or high risk of decompensation.\n\nThe patient is not altered, and has no loss of consciousness.\n\nPECARN rules demonstrate an exceptionally low risk of serious intracranial injury and obtaining further imaging is likely to be of little or no benefit, with unnecessary radiation.\n\nBased on the clinical presentation, the patient is safe for outpatient management. Follow-up with the pediatrician is advised if symptoms worsen or fail to improve.",
      snackbar: false, // Controls the visibility of the snackbar
      snackbarText: "", // The message displayed in the snackbar
      snackbarColor: "success", // Color of the snackbar ('success' or 'error')
    };
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.value).then(
        () => {
          // Show success snackbar
          this.showSnackbar("Text copied to clipboard!", "success");
        },
        (err) => {
          // Show error snackbar
          console.error("Failed to copy text: ", err);
          this.showSnackbar("Failed to copy text.", "error");
        }
      );
    },
    copyToClipboardSecond() {
      navigator.clipboard.writeText(this.secondValue).then(
        () => {
          // Show success snackbar
          this.showSnackbar("Second text copied to clipboard!", "success");
        },
        (err) => {
          // Show error snackbar
          console.error("Failed to copy second text: ", err);
          this.showSnackbar("Failed to copy second text.", "error");
        }
      );
    },
    setPediatricValue() {
      this.value = this.pediatricvalue;
    },
    openPecarn() {
      window.open(
        "https://www.mdcalc.com/calc/589/pecarn-pediatric-head-injury-trauma-algorithm",
        "_blank"
      );
    },
    /**
     * Utility method to show the snackbar with a specific message and color.
     * @param {String} message - The message to display.
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

.v-snackbar {
  max-width: 600px;
}
</style>
