<template>
  <v-dialog 
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    max-width="800"
  >
    <v-card>
      <v-card-title class="text-h5 d-flex justify-space-between align-center">
        Observation Notes
        <v-btn icon @click="$emit('update:modelValue', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      
      <v-card-text>
        <v-list>
          <v-list-item v-for="(text, index) in observationTexts" :key="index">
            <div class="d-flex align-center w-100">
              <div 
                class="flex-grow-1 me-4"
                :class="{
                  'text-success': index === 6,
                  'text-error': index === 7
                }"
              >
                {{ text }}
              </div>
              <v-btn 
                color="primary" 
                variant="outlined" 
                @click="copyText(text)"
              >
                COPY
              </v-btn>
            </div>
            <v-divider v-if="index < observationTexts.length - 1" class="my-2"></v-divider>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ObservationModal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      observationTexts: [
        "The patient was placed into observation status for further evaluation and management of the patient's symptoms. Currently, there is a lack of diagnostic certainty, and a more precise diagnosis is needed to determine whether the patient should be transferred for admission or discharged home.",
        "Despite ongoing symptoms, the patient appears to be somewhat improved.",
        "Patient is complaining of ______ but is resting quietly, in no distress with no objective indicators of distress",
        "The patient appears to be improving and is resting quietly with no complaints at this time.",
        "The patient has been to the restroom and seems to be feeling better.",
        "The patient is ambulatory and continues to progress well and has no current complaints.",
        "The patient has significantly improved and is now safe for outpatient management.",
        "It appears that the patient is appropriate for hospitalization, and I will arrange for transfer and transport."
      ]
    };
  },
  methods: {
    copyText(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.$nextTick(() => {
            console.log('Text copied successfully');
          });
        })
        .catch(err => {
          console.error('Failed to copy text:', err);
        });
    }
  },
  emits: ['update:modelValue']
};
</script>

<style scoped>
.v-list-item {
  padding: 12px 16px;
}

.text-success {
  color: #4CAF50 !important;
  font-weight: bold;
}

.text-error {
  color: #FF5252 !important;
  font-weight: bold;
}
</style>