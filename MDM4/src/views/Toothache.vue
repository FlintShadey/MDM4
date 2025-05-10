<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <div class="text-end mt-3">
      <v-btn color="#b85fb2" @click="setAlternateValue"> Dental Injury </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += ' Dental caries, unspecified; '"
      >
        caries
      </v-btn>
      <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Dental root caries; '"
      >
        Root caries
      </v-btn>
            <v-btn
        color="#665251"
        class="ma-2"
        @click="secondaryValue += 'Toothache; '"
      >
        Toothache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in the Jaw; '"
      >
        Jaw pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Acute headache; '"
      >
        headache
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Pain in the face; '"
      >
        face pain
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Periapical abscess without sinus: ; '"
      >
        abscess
      </v-btn>
          <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fever; '"
      >
        fever
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'fatigue; '"
      >
        fatigue
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Lymphadenopathy; '"
      >
        Lymphadenopathy
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
       Dental Diagram
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
import DentalDiagram from '@/assets/Dental_Diagram.png';
export default {
  name: "Toothache",
  data() {
    return {
      // Main text (primary text area)
      primaryValue:
        "The patient came in with dental pain accompanied by facial swelling.\n\nUpon examination, there's no evidence of tooth fracture, avulsion, or bleeding from the socket.\n\nConditions like retropharyngeal abscess, peritonsillar abscess, Ludwig's angina, or periapical abscess are not present. The patient doesn't appear septic or unwell.\n\nThis doesn't align with Ludwig's angina as there's no brawny edema, or crepitus. The patient doesn't have symptoms like fever, chills, malaise, stiff neck, drooling, or difficulty swallowing. The patient isn't leaning forward and doesn't have a muffled voice. There's no trismus, difficulty breathing, stridor, or cyanosis. The floor of the oral cavity isn't raised and isn't tender when touched.\n\nThe patient is not immunocompromised, so they should do well with outpatient management.",
      // Secondary text (for appended Diagnosiss or alternative content)
      secondaryValue: "  ",
      // An alternate text for demonstration
      alternateValue: "The patient presents with a dental injury.\n\nTooth contusion could cause discomfort or minor mobility, but it typically involves only the soft tissues or the periodontal ligament without significant structural damage to the tooth.\n\nGingival abrasion might cause localized pain and bleeding, but it does not typically involve the tooth structure itself.\n\nI dont believe that this is alveolar fracture which could cause more extensive injury to the jawbone.\n\nThe patient’s presentation aligns well with a fractured tooth.\n\nThe patient is otherwise free from serious injury.\n\nThe patient is safe for discharge and follow up with a dentist very soon.",
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
     * Displays the dental diagram in a modal dialog.
     */
    openExternalLink() {
      this.dialogImgUrl = DentalDiagram;
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
