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
          @click="secondaryValue += 'Viral Infection; '"
        >
          Viral Infection
        </v-btn>
        <v-btn
          color="#72728a"
          class="ma-2"
          @click="secondaryValue += 'Fever; '"
        >
          Fever
        </v-btn>
        <v-btn
          color="#72728a"
          class="ma-2"
          @click="secondaryValue += 'Chills; '"
        >
        Chills
        </v-btn>
        <v-btn
          color="#72728a"
          class="ma-2"
          @click="secondaryValue += 'Fatigue; '"
        >
          Fatigue
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
          @click="secondaryValue += 'Sweats; '"
        >
          Sweats
        </v-btn>
        <v-btn
          color="#72728a"
          class="ma-2"
          @click="secondaryValue += 'Irritable; '"
        >
          Irritable
        </v-btn>
        <v-btn
          color="#72728a"
          class="ma-2"
          @click="secondaryValue += 'Weakness; '"
        >
          Weakness
        </v-btn>
        <v-btn
          color="#72728a"
          class="ma-2"
          @click="secondaryValue += 'Malaise; '"
        >
          Malaise
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
          Derm Description
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
    name: "ViralSyndrome",
    data() {
      return {
        primaryValue: "The patient presents with symptoms consistent with a viral syndrome. They report fatigue, mild body aches, and low-grade fever.\n\nThe patient has no signs of bacterial infection or other concerning symptoms that would warrant antibiotics.\n\nVital signs are stable and within normal limits. There are no signs of severe dehydration or other complications.\n\nThe patient demonstrates good understanding of symptomatic care including rest, hydration, and over-the-counter medications for symptom relief.\n\nThey are advised to return if symptoms worsen, persist beyond 7-10 days, or if they develop any concerning symptoms such as severe headache, neck stiffness, or difficulty breathing.",
        secondaryValue: "  ",
        alternateValue: "The pediatric patient presents with symptoms consistent with a viral syndrome including fatigue, decreased appetite, and low-grade fever.\n\nThe child shows no signs of bacterial infection that would warrant antibiotics. There are no concerning symptoms such as respiratory distress, severe dehydration, or lethargy.\n\nVital signs are stable and age-appropriate. Hydration status is adequate with moist mucous membranes and normal skin turgor.\n\nParents demonstrate good understanding of home care instructions including monitoring temperature, ensuring adequate fluid intake, and using age-appropriate over-the-counter medications for comfort.\n\nThey are advised to return if the child develops worsening symptoms, fever persists beyond 3 days, or if they notice any concerning changes such as decreased responsiveness, difficulty breathing, or poor fluid intake.",
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
        this.dialogImgUrl = new URL('@/assets/DermDescription.jpg', import.meta.url).href;
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
