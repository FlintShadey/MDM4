//...existing code...
      <!-- Observation Section -->
      <div class="d-flex align-center mb-2 observation-container">
        <v-btn
          color="#3f4f99"
          height="40"
          class="observation-button"
          @click="openObservation"
        >
          Observation
        </v-btn>
        <v-progress-circular
          v-if="timerActive"
          :model-value="timerPercentage"
          :rotate="360"
          :size="36"
          :width="3"
          color="#c9b30c"
          class="ml-2"
        >
          {{ formattedTime }}
        </v-progress-circular>
      </div>
//...existing code...
    methods: {
      //...existing code...
      openObservation() {
        this.timerActive = true;  // Set timer active first
        this.showObservationModal = true;
        this.startTimer();
      },

      startTimer() {
        // Clear any existing timer
        if (this.timerInterval) {
          clearInterval(this.timerInterval);
        }

        // Reset and start timer
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
      //...existing code...
    },
    watch: {
      showObservationModal(newVal) {
        if (!newVal) {
          // When modal is closed, stop the timer
          if (this.timerInterval) {
            clearInterval(this.timerInterval);
          }
          this.timerActive = false;
        }
      }
    },
    beforeUnmount() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
    },
//...existing code...
<style scoped>
.v-btn.v-btn--density-default {
  height: 32px !important;
}
.v-list-item-subtitle {
  white-space: normal;
  height: auto;
}

.v-list-item {
  padding: 4px;
}

.v-divider {
  margin: 8px 0;
  border-color: rgba(255, 255, 255, 0.12);
}

.button-grid .v-btn {
  text-transform: none;
}

.v-text-field :deep(.v-field__input) {
  min-height: 40px;
  padding-top: 0;
  padding-bottom: 0;
}

.observation-btn {
  width: 60%;
}

.observation-container {
  width: 100%;
  justify-content: flex-start;
}

.observation-button {
  width: 120px;
}
</style>