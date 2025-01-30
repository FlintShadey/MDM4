<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> no alternate text </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">

            <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Diverticulitis of large intestine without perforation or abscess without bleeding; '"
      >
       Diverticulitis no bleed
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Diverticulitis of large intestine without perforation or abscess with bleeding '"
      >
        Diverticulitis with bleed 
      </v-btn>
 
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Diverticulitis of large intestine with perforation and abscess without bleeding '"
      >
        Diverticulitis with perf
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Left lower quadrant pain; '"
      >
        llq
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Left lower quadrant abdominal tenderness; '"
      >
        llq tender
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Generalized abdominal pain; '"
      >
       Generalized
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Diarrhea, unspecified;  '"
      >
        Diarrhea
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Abdominal distension ; '"
      >
        distension
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Nausea; '"
      >
        Nausea
      </v-btn>
                  <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Nausea with vomiting, unspecified; '"
      >
         vomiting
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
  name: "Diverticulitis",
  data() {
    return {
      // Main text (primary text area)
      primaryValue: "The patient presents with abdominal pain.\n\nInitial concern could be for appendicitis, which can lead to perforation, peritonitis, or abscess formation. However, the patient's pain is not typical for appendicitis.\n\nAnother differential diagnosis could be irritable bowel syndrome, known to cause chronic or recurrent abdominal pain and bowel habit changes. However, the absence of a chronic pattern in this patient makes IBS less likely.\n\nI considered inflammatory bowel diseases like Crohn's or ulcerative colitis, which can lead to severe gastrointestinal issues and systemic symptoms. However, the absence of symptoms like bloody diarrhea, weight loss, or a known history of these conditions lowers their likelihood in this case.\n\nGastrointestinal obstruction, another possible diagnosis, could present with abdominal pain and could lead to complications like bowel perforation. However, the patient does not exhibit signs of obstruction, such as vomiting or absolute constipation.\n\nUrinary tract issues like a urinary tract infection or kidney stone can cause lower abdominal pain. However, the lack of urinary symptoms like dysuria, hematuria, or flank pain makes these diagnoses less probable.\n\nThe patient has no signs of generalized peritonitis.\n\nThese findings suggest diverticulitis.\n\nThe patient is safe for outpatient management with close follow-up. The patient is advised to seek medical attention if symptoms worsen and to follow up with their primary care physician or a gastroenterologist for re-evaluation.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "no alternate text",
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
