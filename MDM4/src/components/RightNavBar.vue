<template>
  <v-navigation-drawer
    permanent
    app
    color="#3281a8"
    class="rounded"
    location="right"
    width="250"
    image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
  >
    <v-list>
      <!-- Search area -->
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-model="searchQuery"
            label="Search"
            clearable
            prepend-icon="mdi-magnify"
            @keyup.enter="doSearch"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <!-- Medication Calculator -->
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-model="weight"
            label="Weight in kg"
            type="number"
            clearable
            append-icon="mdi-keyboard-return"
            @click:append="calculateMedications"
            @keyup.enter="calculateMedications"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <!-- Conscious Sedation Calculator -->
      <v-list-item>
        <v-list-item-content>
          <v-text-field
            v-model="sedationWeight"
            label="Conscious Sedation wt in kg"
            type="number"
            clearable
            append-icon="mdi-keyboard-return"
            @click:append="calculateSedation"
            @keyup.enter="calculateSedation"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>

      <!-- Other menu items -->
      <v-list-item>
        <v-btn 
          block 
          color="#4f6bb0" 
          @click="copyRandomCallText"
        >
          CB Randomizer
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex align-center px-14">
        <v-btn color="#3f4f99" class="me-2" @click="openObservation">
          Observation
        </v-btn>
        <v-progress-circular
          v-if="timerActive"
          :model-value="timerPercentage"
          :rotate="360"
          :size="40"
          :width="4"
          color="#c9b30c"
        >
          {{ formattedTime }}
        </v-progress-circular>
      </v-list-item>
  
  

   
    </v-list>

    <!-- Medication Calculator Modal -->
    <v-dialog v-model="showMedicationModal" max-width="600">
      <v-card>
        <v-card-title class="text-h5">
          Medication Doses for {{ weight }}kg
          <v-spacer></v-spacer>
          <v-btn icon @click="showMedicationModal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="(dose, med) in medicationDoses" :key="med">
              <div class="d-flex align-center w-100">
                <div class="flex-grow-1">
                  <v-list-item-title class="text-capitalize font-weight-bold">
                    {{ med }}:
                  </v-list-item-title>
                  <v-list-item-subtitle class="mt-1">
                    {{ dose }}
                  </v-list-item-subtitle>
                </div>
                <v-btn
                  color="primary"
                  variant="outlined"
                  size="small"
                  class="ms-3"
                  @click="copyText(dose)"
                >
                  COPY
                </v-btn>
              </div>
              <v-divider class="my-2" v-if="med !== Object.keys(medicationDoses).slice(-1)[0]"></v-divider>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Conscious Sedation Modal -->
    <v-dialog v-model="showSedationModal" max-width="600">
      <v-card>
        <v-card-title class="text-h4 font-weight-bold">
          Conscious Sedation Medicines
          <v-spacer></v-spacer>
          <v-btn icon @click="showSedationModal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>For {{ sedationWeight }}kg patient</v-card-subtitle>
        <v-card-text>
          <v-list>
            <v-list-item v-for="(dose, med) in sedationDoses" :key="med">
              <v-list-item-title class="text-capitalize font-weight-bold">
                {{ med }}:
              </v-list-item-title>
              <v-list-item-subtitle class="mt-1">
                {{ dose }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- New Observation Modal -->
    <ObservationModal 
      v-model="showObservationModal"
    />
  </v-navigation-drawer>
</template>

<script>
import emitter from "@/eventBus";
import { calculateAllMedications } from "@/utils/medicationCalculator";
import { calculateAllSedationMedications } from "@/utils/consciousSedationCalculator";
import { OBSERVATION_TIME, formatTime } from "@/utils/observationUtils";
import { getRandomCallText } from "@/utils/callDocUtils";
import ObservationModal from './ObservationModal.vue';

export default {
  name: "RightNavBar",
  components: {
    ObservationModal
  },
  data() {
    return {
      searchQuery: "",
      weight: "",
      sedationWeight: "",
      showMedicationModal: false,
      showSedationModal: false,
      medicationDoses: {},
      sedationDoses: {},
      showObservationModal: false,
      observationTimer: OBSERVATION_TIME,
      timerInterval: null,
      timerPercentage: 0,
      timerActive: false,
    };
  },
  methods: {
    doSearch() {
      console.log("Searching for:", this.searchQuery);
      emitter.emit("search", this.searchQuery.trim());
    },
    calculateMedications() {
      const weightNum = parseFloat(this.weight);
      if (!weightNum || weightNum <= 0) {
        alert("Please enter a valid weight");
        return;
      }
      this.medicationDoses = calculateAllMedications(weightNum);
      this.showMedicationModal = true;
    },
    calculateSedation() {
      const weightNum = parseFloat(this.sedationWeight);
      if (!weightNum || weightNum <= 0) {
        alert("Please enter a valid weight");
        return;
      }
      this.sedationDoses = calculateAllSedationMedications(weightNum);
      this.showSedationModal = true;
    },
    openObservation() {
      this.showObservationModal = true;
      this.timerActive = true;
      this.startTimer();
    },
    startTimer() {
      // Clear any existing timer
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
      
      // Reset timer values
      this.observationTimer = OBSERVATION_TIME;
      this.timerPercentage = 0;
      
      this.timerInterval = setInterval(() => {
        if (this.observationTimer > 0) {
          this.observationTimer--;
          this.timerPercentage = ((OBSERVATION_TIME - this.observationTimer) / OBSERVATION_TIME) * 100;
        } else {
          clearInterval(this.timerInterval);
          this.timerActive = false;
        }
      }, 1000);
    },
    copyText(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          this.$nextTick(() => {
            // You can add a toast or notification here if desired
            console.log('Text copied successfully');
          });
        })
        .catch(err => {
          console.error('Failed to copy text:', err);
        });
    },
    copyRandomCallText() {
      const text = getRandomCallText();
      navigator.clipboard.writeText(text)
        .then(() => {
          console.log('Call documentation text copied successfully');
        })
        .catch(err => {
          console.error('Failed to copy text:', err);
        });
    },
  },
  computed: {
    formattedTime() {
      return formatTime(this.observationTimer);
    }
  },
  beforeUnmount() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
};
</script>

<style scoped>
.v-list-item-subtitle {
  white-space: normal;
  height: auto;
}

.v-list-item {
  padding: 12px 16px;
}

.v-divider {
  margin: 8px 0;
}
</style>
