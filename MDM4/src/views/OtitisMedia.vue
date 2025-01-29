<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Pediatric OM </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in the left ear; '"
      >
        pain left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Pain in the right ear; '"
      >
        pain right
      </v-btn>
            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Otitis media, unspecified, left ear '"
      >
        Left OM
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Otitis media, unspecified, right ear; '"
      >
        Right OM
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Otitis media, unspecified, bilateral; '"
      >
        bilateral om
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Acute serous otitis media, left ear'"
      >
       serous left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Acute serous otitis media, right ear;  '"
      >
        serous right
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ', left; '"
      >
         left
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += ', right; '"
      >
         right
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ', with spontaneous rupture of eardrum; '"
        >
         rupture

      </v-btn>
      <v-btn
        color="#42cbf5"
        class="ma-2"
        @click="secondaryValue += 'ACUTE SUPPURATIVE OTITIS MEDIA WITHOUT SPONTANEOUS RUPTURE OF EAR DRUM, left EAR - [H66.002], OTALGIA, LEFT EAR - [H92.02], OTITIS MEDIA, UNSPECIFIED, LEFT EAR - [H66.92]'">
ALL OM Left
      </v-btn>
        <v-btn
            color="#dd42f5"
            class="ma-2"
            @click="secondaryValue += 'ACUTE SUPPURATIVE OTITIS MEDIA WITHOUT SPONTANEOUS RUPTURE OF EAR DRUM, right EAR - [H66.001], OTALGIA, RIGHT EAR - [H92.01], OTITIS MEDIA, UNSPECIFIED, RIGHT EAR - [H66.91]'">
            ALL OM Right
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
  name: "OtitisMedia",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with ear pain and pressure.\n\nThere is no pain, tenderness, redness, or swelling behind the ear, so I do not believe mastoiditis is present.\n\nAdditionally, there is no otorrhea or granulation tissue in the ear canal, indicating that Malignant Otitis Externa does not seem to be the case.\n\nExamination of the ear canal reveals no foreign objects, thus there is no retained foreign body present.\n\nThe exam and history are most consistent with Acute Otitis Media.\n\nThe patient is not toxic or ill-appearing, and there is no systemic sepsis.\n\nThe patient is advised to take the prescribed medicines and follow up with their physician soon.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with ear pain.\n\nAcute otitis media is common in children. The presence of a red tympanic membrane on examination supports this diagnosis.\n\nOtitis externa involves inflammation of the ear canal, often after swimming, leading to pain, especially when the outer ear is touched or pulled. Currently, this is not the case.\n\nMastoiditis involves the infection of the mastoid bone behind the ear, leading to pain, swelling, redness over the mastoid, and fever. Thankfully, the patient does not have these physical findings.\n\nCurrently, there is no foreign body identified.\n\nTympanic membrane perforation may result from trauma or infection, presenting with ear pain and possible hearing loss; however, I do not see a perforation.\n\nDental problems, such as teething or an abscessed tooth, can refer pain to the ear, but this does not seem to be the case.\n\nCurrently, this appears to be acute otitis media.\n\nThe patient is considered safe for outpatient management.\n\nFollow-up with a primary care pediatrician is recommended if symptoms persist or worsen.",
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
