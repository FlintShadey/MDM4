<template>
  <v-container fluid>
    <!-- PRIMARY TEXTAREA -->
    <v-textarea v-model="primaryValue" auto-grow outlined></v-textarea>

    <div class="text-center">
      <v-btn @click="copyToClipboard" color="yellow"> Copy MDM </v-btn>
    </div>

    <!-- Diagnosis BUTTONS TO APPEND TEXT -->
    <div class="mt-5">
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Unspecified injury of nose, initial encounter; '">
        Unspecified injury of nose, initial encounter
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Unspecified superficial injury of nose, initial encounter; '">
        Unspecified superficial injury of nose, initial encounter
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Contusion of nose, initial encounter; '">
        Contusion of nose, initial encounter
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Unspecified open wound of nose, initial encounter; '">
        Unspecified open wound of nose, initial encounter
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Fracture of nasal bones, initial encounter for closed fracture; '">
        Fracture of nasal bones, initial encounter for closed fracture
      </v-btn>
      <v-btn
        color="#72728a"
        class="ma-2"
        @click="secondaryValue += 'Acute Pain due to Trauma; '">
        Acute Pain due to Trauma
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
  name: "NoseInjury",
  data() {
    return {
      primaryValue: "The patient presents with nasal bleeding and pain \n\nNasal fracture could cause epistaxis and tenderness but typically produces swelling, crepitus, or visible deformity of the nasal bridge, none of which are present\n\nSeptal hematoma might lead to persistent bleeding and soft fluctuant swelling on either side of the nasal septum, which is not observed on examination\n\nSpontaneous epistaxis from mucosal irritation often causes bleeding without significant external pain or tenderness, unlike this case where trauma-related discomfort is noted.The patient's presentation aligns with a nasal contusion, in which minor blunt trauma causes localized pain and transient bleeding without structural damage\n\nThe patient is otherwise not dangerously injured\n\nThe patient is safe for discharge and should follow up with a primary care physician very soon.",
      secondaryValue: '',
      snackbar: false,
      snackbarText: '',
      snackbarColor: 'success',
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
    showSnackbar(message, color) {
      this.snackbarText = message;
      this.snackbarColor = color;
      this.snackbar = true;
    },
  },
};
</script>

<style scoped>
.v-snackbar {
  max-width: 400px;
}
</style>