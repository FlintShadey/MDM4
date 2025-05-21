<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
      
      <!-- Procedure Note Button -->
      <v-btn 
        color="primary" 
        class="ml-2" 
        @click="showProcedureDialog = true">
        Suture Removal Procedure Note
      </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'encounter for removal of sutures; '">
        Suture removal
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'disruption of external operation wound; '">
        Wound dehiscence
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'cellulitis of the ________; '">
        Cellulitis
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

    <!-- Procedure Note Dialog -->
    <v-dialog v-model="showProcedureDialog" max-width="600">
      <v-card>
        <v-card-title>Suture Removal Procedure Note</v-card-title>
        <v-card-text>
          <v-textarea 
            v-model="procedureNote" 
            auto-grow 
            outlined 
            rows="5"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
            color="success" 
            @click="copyProcedureNote">
            Copy Text
          </v-btn>
          <v-btn 
            color="blue-grey" 
            text 
            @click="showProcedureDialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SNACKBAR -->
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
  name: "SutureRemoval",
  data() {
    return {
      primaryValue: "The patient presents to ER for suture removal  currently, there is no fever, unexplained point or tenderness, no unexpected redness or swelling no drainage to indicate infection\n\nThere's no bleeding from the site, swelling, lightheadedness, or tachycardia to indicate hemorrhage.\n\nThere is no lack of sensation to indicate nerve damage\n\n.  The wound seems to be healing as expected\n\nThe patient is instructed to follow up their primary physician for any other concerns",
      secondaryValue: '',
      procedureNote: "The procedure was performed:\nThe Sutures were removed without complication.\n____  SteriStrips were applied",
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'success',
      showProcedureDialog: false
    };
  },
  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.primaryValue).then(
        () => this.showSnackbar('MDM copied to clipboard!', 'success'),
        err => this.showSnackbar('Failed to copy MDM text.', 'error')
      );
    },
    copyToClipboardSecond() {
      navigator.clipboard.writeText(this.secondaryValue).then(
        () => this.showSnackbar('Diagnosis copied to clipboard!', 'success'),
        err => this.showSnackbar('Failed to copy diagnosis text.', 'error')
      );
    },
    copyProcedureNote() {
      navigator.clipboard.writeText(this.procedureNote).then(
        () => {
          this.showSnackbar('Procedure note copied to clipboard!', 'success');
          this.showProcedureDialog = false;
        },
        err => this.showSnackbar('Failed to copy procedure note.', 'error')
      );
    },
    showSnackbar(message, color) {
      this.snackbarText = message;
      this.snackbarColor = color;
      this.snackbar = true;
    }
  }
};
</script>

<style scoped>
.v-snackbar {
  max-width: 400px;
}
</style>
