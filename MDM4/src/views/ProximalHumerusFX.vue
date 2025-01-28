<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> sling </v-btn>
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
        @click="secondaryValue += 'Pain in shoulder left; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in shoulder right; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Contusion of Shoulder '"
      >
        Contusion
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Sprain of Shoulder Joint (Glenohumeral); '"
      >
        sprain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Muscle Spasm; '"
      >
        Muscle Spasm
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
        @click="secondaryValue += ' fracture of the upper end of the  humerus, during the initial encounter for a closed fracture '"
      >
       Humerus Fracture  
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' closed fracture of the shaft of the humerus; '"
      >
        shaft FX
      </v-btn>


      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' initial encounter; '"
      >
        initial encounter
      </v-btn>

      <v-btn color="#72728a" class="ma-2" @click="secondaryValue += ', left; '">
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
  name: "ProximalHumerusFX",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient presents with a shoulder injury.\n\nShoulder dislocation could cause significant pain and limited mobility, but it typically presents with a visible deformity or the humeral head out of place, which is not present.\n\nA rotator cuff tear might cause shoulder pain and weakness, particularly with overhead activities, but it usually does not involve marked bony tenderness or a fracture mechanism.\n\nAcromioclavicular joint separation could cause pain at the top of the shoulder, often with a visible bump or tenderness over the AC joint, which is not the case here.\n\nA proximal humerus fracture often presents with pain, swelling, and difficulty moving the arm around the shoulder. The patient’s symptoms align well with this diagnosis.\n\nThe patient does not currently demonstrate complications of fracture, such as compartment syndrome, arterial or nerve injury. The patient is neurovascularly intact distal to the injury.\n\nBased on the clinical presentation, a proximal humerus fracture is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue:
        "After applying the sling, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the sling as it wasn't exerting pressure on any nerve or blood vessel. The patient received guidance on  when to seek further medical care.",
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
