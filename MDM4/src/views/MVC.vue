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
        @click="secondaryValue += 'Pain in the left _____; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right _____; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'muscle spasm; '"
      >
        muscle spasm
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'myalgia; '"
      >
        myalgia
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Driver injured in collision with unspecified motor vehicles in traffic accident, initial encounter; '"
      >
        driver
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Passenger injured in collision with unspecified motor vehicles in traffic accident, initial encounter; '"
      >
        Passenger
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Person injured in collision between car and two- or three-wheeled motor vehicle (traffic); '"
      >
        motorcycle
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ', traffic, initial encounter; '"
      >
         traffic
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ', nontraffic, initial encounter; '"
      >
         nontraffic
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
      glasgow coma scale
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
  name: "MVC",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents following a motor vehicle collision.\n\nThe patient's presentation did not exhibit signs of intracranial hemorrhage, such as altered mental status, focal neurological deficits, or a significant headache.\n\nThere were no clinical signs suggestive of a skull fracture, such as visible head wounds, cerebrospinal fluid leakage, or depressed skull fragments.\n\nThe patient's neurological examination did not reveal any evidence of spinal fractures or acute syndromes.\n\nThe absence of hypoxia, tachypnea, or physical examination findings, such as decreased breath sounds, indicated that a pneumothorax was not present.\n\nPulmonary contusion and cardiac contusion seem unlikely as the patient did not exhibit clinical signs like chest pain, shortness of breath, or abnormal cardiac rhythms associated with these conditions.\n\nThe patient's symptoms and physical examination did not suggest aortic or vertebral dissection, such as severe tearing chest pain or neurological deficits.\n\nThe absence of signs like abdominal tenderness, guarding, or rigidity indicated the absence of hollow organ injury.\n\nMy clinical evaluation did not reveal findings consistent with this condition, such as peritoneal signs or significant abdominal pain.\n\nExamination did not show evidence of extremity fractures.\n\nThe patient is currently safe for discharge.\n\nI discussed return instructions, particularly regarding the monitoring of worsening injury symptoms. A follow-up appointment with their primary care provider within 2-3 days was recommended.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "This pediatric patient presents after a motor vehicle collision.\n\n Traumatic brain injury or intracranial hemorrhage could cause severe headache, repeated vomiting, loss of consciousness, seizure, focal neurologic deficits, or signs of basilar skull fracture; these findings are not present  on exam.\n\n Cervical spine injury could cause midline neck tenderness, neurologic deficits, paresthesias, or limited range of motion; these are not present\n\n Thoracic injury such as pneumothorax or pulmonary contusion could cause chest pain, dyspnea, hypoxia, asymmetric breath sounds, or chest wall crepitus; these are not present\n\n Intra-abdominal injury to solid organs or hollow viscera could cause abdominal pain, guarding, seat-belt sign, vomiting, hypotension, or tachycardia; these are not present\n\n Pelvic or long-bone fracture could cause deformity, focal bony tenderness, malrotation, or inability to bear weight; these findings are not present\n\n Compartment syndrome could cause severe pain out of proportion, pain with passive stretch, tense swelling, paresthesia, pallor, or diminished pulses; these features are not present\n\n Spinal cord injury without radiographic abnormality could cause limb weakness, numbness, or bowel or bladder dysfunction; neurologic deficits are not present\n\n Cardiac contusion could cause chest pain, palpitations, syncope, or persistent tachycardia; these symptoms and abnormal vital signs are not present.The patient’s presentation aligns well with musculoskeletal pain.\n\n The patient is safe for discharge and should follow up with their pediatrician very soon.",

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
      window.open("https://www.mdcalc.com/calc/64/glasgow-coma-scale-score-gcs", "_blank");
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
