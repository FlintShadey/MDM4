<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> splinting and check </v-btn>
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
        @click="secondaryValue += 'Pain in left hand; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in right hand; '"
      >
        pain right
      </v-btn>
       
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the Left fifth metacarpal bone, inital encounter; '"
      >
        boxers left
      </v-btn>
          <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'closed fracture of the right fifth metacarpal bone, inital encounter; '"
      >
        boxers right
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
  name: "FingerFX",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with pain to the ulnar side of the hand after a punching injury.\n\nCurrently there is complete skin Integrity, there is no sign of open wound, there is no open fracture.\n\nThe extensor apparatus appears to be functional.\n\n_______ X-rays were obtained which revealed the metacarpal fracture.\n\nPatient is instructed to elevate the extremity while at rest, apply ice for 20 minutes of time approximately three times a day as able.\n\nThe fracture was splinted with an ulnar gutter splint with 90 degrees of flexion at the MCP joint.\n\npatient is given a referral to Orthopedic hand surgery and is encouraged to follow up within the next 48 hours.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: " Procedure Note: Splinting of Boxer Fracture \n\n Attending Provider/Performed by:  J. Flint Smith, MD\n\n Procedure Performed:  Splinting of Boxer Fracture\n\n Indication: \nFracture of the fifth metacarpal.\n\nVerbal informed consent was obtained.\n\n Procedure Details: \nA fiberglass ulnar gutter splint was created and molded to the patient's anatomy.\nThe splint is applied from the proximal forearm to just past the distal interphalangeal joint.\nThe wrist is slightly extended, with the metacarpophalangeal joints at 90° of flexion, and the DIP and proximal interphalangeal joints at 10° of flexion.\n\n Complications: \nNone immediate.\nNo neurovascular compromise noted.\nNo damage to surrounding tissues noted.\n\n Post-Procedure Evaluation: \nAfter applying the splint, I checked the patient's neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the splint as it wasn't exerting pressure on any nerve or blood vessel.\n\nThe patient received guidance on splint care and was informed about when to seek further medical care.",
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
