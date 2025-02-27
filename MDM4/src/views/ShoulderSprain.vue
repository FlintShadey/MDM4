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
        @click="secondaryValue += 'Sprain of Shoulder Joint; '"
      >
        shoulder sprain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'acute Pain in Shoulder, left; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'acuute Pain in Shoulder, right; '"
      >
        pain right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'initial encounter; '"
      >
        initial
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Muscle Spasm of Back;  '"
      >
        back spasm
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Myalgia;  '"
      >
        Myalgia
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'contusion of shoulder;  '"
      >
        shoulder contusion
      </v-btn>
      <v-btn
        color="#42bcf5"
        class="ma-2"
        @click="secondaryValue += 'PAIN IN LEFT SHOULDER - [M25.512], SPRAIN OF LEFT ROTATOR CUFF CAPSULE, INITIAL ENCOUNTER - [S43.422A], UNSPECIFIED SPRAIN OF LEFT SHOULDER JOINT, INITIAL ENCOUNTER - [S43.402A], ACUTE PAIN DUE TO TRAUMA - [G89.11]'"  
      >
      Left Everything
      </v-btn>
            <v-btn
        color="#f542ef"
        class="ma-2"
        @click="secondaryValue += 'PAIN IN RIGHT SHOULDER - [M25.511], SPRAIN OF RIGHT ROTATOR CUFF CAPSULE, INITIAL ENCOUNTER - [S43.421A], UNSPECIFIED SPRAIN OF RIGHT SHOULDER JOINT, INITIAL ENCOUNTER - [S43.401A], ACUTE PAIN DUE TO TRAUMA - [G89.11]'"  
      >
      right Everything
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
  name: "shouldersprain",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "Patient presents with a shoulder injury.\n\nRotator Cuff Tear could cause shoulder pain and weakness, especially with overhead activities, but this is usually associated with significant functional limitations, which may not be as pronounced here.\n\nDislocation would typically cause severe pain, visible deformity, and an inability to move the shoulder, which are not present in this case.\n\nFracture of the shoulder or clavicle would present with significant pain, swelling, and difficulty moving the arm, usually after a clear traumatic event; this is not the case.\n\nShoulder Strain, involving overstretching or minor tearing of the muscles or tendons around the shoulder joint. The patient’s symptoms align well with this diagnosis.\n\nBased on the clinical presentation, shoulder strain is considered the most likely diagnosis.\n\nThe patient is safe for outpatient management. Follow-up with orthopedics is advised if symptoms worsen or fail to improve.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "After applying the sling, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the sling as it wasn't exerting pressure on any nerve or blood vessel. The patient was informed about when to seek further medical care.",
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
