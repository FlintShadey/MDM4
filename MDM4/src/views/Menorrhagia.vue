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
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Excessive and frequent menstruation with regular cycle – classic menorrhagia with predictable timing and heavy flow; '"
        >
          Heavy Regular
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Excessive and frequent menstruation with irregular cycle – metrorrhagia or menometrorrhagia with unpredictable timing and volume; '"
        >
          Heavy Irregular
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Excessive menstruation at puberty – heavy bleeding during the pubertal transition; '"
        >
          Pubertal Heavy
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Ovulation bleeding – mid-cycle spotting around ovulation; '"
        >
          Ovulation Spotting
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Excessive bleeding in the premenopausal period – heavy flow as women approach menopause; '"
        >
          Premenopausal Heavy
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Other specified irregular menstruation – patterns of bleeding that do not fit the above categories; '"
        >
          Other Irregular
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Postcoital and contact bleeding – bleeding triggered by intercourse or exam contact; '"
        >
          Postcoital
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Pre-pubertal vaginal bleeding – bleeding in girls before the onset of menses; '"
        >
          Prepubertal
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Other specified abnormal uterine and vaginal bleeding – includes intermenstrual bleeding, spotting, etc.; '"
        >
          Other Abnormal
        </v-btn>
        <v-btn
          color="#009688"
          class="ma-2"
          @click="secondaryValue += 'Abnormal uterine and vaginal bleeding, unspecified – use when no further detail is documented; '"
        >
          Unspecified
        </v-btn>
        <v-btn
          color="#FF9800"
          class="ma-2"
          @click="secondaryValue += 'Pelvic pain; '"
        >
          Pelvic Pain
        </v-btn>
        <v-btn
          color="#FF9800"
          class="ma-2"
          @click="secondaryValue += 'Abdominal pain; '"
        >
          Abdominal Pain
        </v-btn>
        <v-btn
          color="#FF9800"
          class="ma-2"
          @click="secondaryValue += 'Nausea; '"
        >
          Nausea
        </v-btn>
        <v-btn
          color="#FF9800"
          class="ma-2"
          @click="secondaryValue += 'Dysuria; '"
        >
          Dysuria
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
    name: "Menorrhagia",
    data() {
      return {
        // Main text (primary text area)
        primaryValue: "The patient presents with vaginal bleeding.\n\nPregnancy-related bleeding could present with abdominal pain, changes in fetal movement, or a positive pregnancy test, but this is not the case.\n\nUterine fibroids can cause heavy menstrual bleeding and pelvic pain.\n\nEndometrial polyps might lead to intermittent bleeding or spotting.\n\nThe patient’s presentation aligns well with menorrhagia, characterized by abnormally heavy or prolonged menstrual bleeding.\n\nThe patient is not septic or toxic.\n\nThe patient is safe for discharge and should follow up with a primary care physician very soon.",
        // Secondary text (for appended Diagnosiss or alternative content)
        secondaryValue: "  ",
        // An alternate text for demonstration
        alternateValue: "Pediatric MDM text not created",
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
  