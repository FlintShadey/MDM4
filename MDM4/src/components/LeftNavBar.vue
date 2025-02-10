<template>
  <v-navigation-drawer
    app
    color="#912737"
    class="rounded"
    width="200"
    :image="backgroundImage"
  >
    <v-list dense>
      <!-- Single buttons -->
      <v-list-item class="px-2 mx-4">
        <v-btn
          block
          color="yellow"
          class="my-3 pa-8"
          prepend-icon="mdi-home"
          @click="handleButtonClick({label: 'HOME', route: '/'})"
        >
          HOME
        </v-btn>
      </v-list-item>

      <v-list-item class="px-2 mx-4">
        <v-btn
          block
          height ="64px"
          size="x-large"
          class="my-2 pa-6"
          color="#2196F3"
          @click="handleButtonClick({label: 'Adult', copyKey: 'adultText'})"
        >
          Adult
        </v-btn>
      </v-list-item>

      <!-- New row of three numbered buttons -->
      <v-list-item class="d-flex px-2 mx-7" style="min-height: 30px">
        <v-btn
          class="me-1 flex-grow-1"
          color="#9FA8DA"
          size="x-small"
          @click="handleButtonClick({label: '1', copyKey: 'work1Text'})"
        >
          1
        </v-btn>
        <v-btn
          class="mx-1 flex-grow-1"
          color="#7986CB"
          size="x-small"
          @click="handleButtonClick({label: '2', copyKey: 'work2Text'})"
        >
          2
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#5C6BC0"
          size="x-small"
          @click="handleButtonClick({label: '3', copyKey: 'work3Text'})"
        >
          3
        </v-btn>
      </v-list-item>

      <!-- Paired buttons -->
      <v-list-item class="d-flex px-2 mx-4">
        <v-btn
          class="me-1 flex-grow-1"
          color="#E1BEE7"
          dense
          small
          @click="handleButtonClick({label: 'Mom', copyKey: 'momText'})"
        >
          Mom
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#CE93D8"
          dense
          small
          @click="handleButtonClick({label: 'Dad', copyKey: 'dadText'})"
        >
          Dad
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-4">
        <v-btn
          class="me-1 flex-grow-1"
          color="#BA68C8"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Parents', copyKey: 'parentsText'})"
        >
          Parent
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#AB47BC"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Guardian', copyKey: 'guardianText'})"
        >
          Guardian
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-2">
        <v-btn
          class="me-1 flex-grow-1"
          color="#E57373"
          dense
          small
          @click="handleButtonClick({label: 'URI', copyKey: 'uriText'})"
        >
          URI
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#EF5350"
          dense
          small
          @click="handleButtonClick({label: 'Dx:URI', copyKey: 'dxUriText'})"
        >
          Dx:URI
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-5">
        <v-btn
          class="me-1 flex-grow-1"
          color="#F06292"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Sinus', copyKey: 'sinusText'})"
        >
          Sinus
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#EC407A"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Dx:Sinus', copyKey: 'dxSinusText'})"
        >
          Dx:Sinus
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-2">
        <v-btn
          class="me-1 flex-grow-1"
          color="#9575CD"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Bronchitis', copyKey: 'bronchitisText'})"
        >
          Bronch
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#7E57C2"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Dx:Bronchitis', copyKey: 'dxBronchitisText'})"
        >
          Dx:Bronch
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-7">
        <v-btn
          class="me-1 flex-grow-1"
          color="#7986CB"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Flu', copyKey: 'fluText'})"
        >
          Flu
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#5C6BC0"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Dx:Flu', copyKey: 'dxFluText'})"
        >
          Dx:Flu
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-1">
        <v-btn
          class="me-1 flex-grow-1"
          color="#4FC3F7"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Pharyngitis', copyKey: 'pharyngitisText'})"
        >
          Pharyng
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#29B6F6"
          dense
          size="x-small"
          @click="handleButtonClick({label: 'Dx:Pharyngitis', copyKey: 'dxPharyngitisText'})"
        >
          Dx:Pharyng
        </v-btn>
      </v-list-item>

      <v-list-item class="px-2 mx-4">
        <v-btn
          block
          color="#18FFFF"
          @click="handleButtonClick({label: 'Splint Check', copyKey: 'splintCheckText'})"
        >
          Splint Check
        </v-btn>
      </v-list-item>

      <v-list-item class="d-flex px-2 mx-2">
        <v-btn
          class="me-1 flex-grow-1"
          color="#00E5FF"
          dense
          @click="handleButtonClick({label: 'EKG', copyKey: 'ekgText'})"
        >
          EKG
        </v-btn>
        <v-btn
          class="ms-1 flex-grow-1"
          color="#00B8D4"
          dense
          @click="handleButtonClick({label: 'Aware', copyKey: 'awareText'})"
        >
          Aware
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { generateWorkExcuse } from '@/utils/dateUtils';

export default {
  name: "LeftNavBar",
  data() {
    return {
      /* ----------------
         Text to Copy
         (taken from your snippet)
      ------------------ */
      adultText:
        "The patient is given and understands strict follow up and return instruction, patient agrees and wishes to be discharged.",
      momText:
        "The mom is given and understands strict follow up and return instruction, mom agrees and wishes to be discharged.",
      dadText:
        "The dad is given and understands strict follow up and return instruction, dad agrees and wishes to be discharged.",
      parentsText:
        "The parents are given and understand strict follow up and return instruction, the parents agree and wish to be discharged.",
      guardianText:
        "The guardian is given and understands strict follow up and return instruction, guardian agrees and wishes to be discharged.",

      uriText: `Patient presents with cough and congestion.

Allergic Rhinitis can cause similar symptoms but is usually associated with itching, sneezing, and clear nasal discharge, which are not emphasized in this case.

Pneumonia might present with cough and congestion, but it is usually associated with fever, difficulty breathing, and abnormal lung sounds, which are absent in this presentation.

Sinusitis can cause congestion and cough, but it is often accompanied by facial pain and pressure, which do not appear to be present in this case.

URI is a common viral illness causing cough, nasal congestion, and sometimes sore throat or mild fever. The patients symptoms align well with this diagnosis.

Based on the clinical presentation, URI is considered the most likely diagnosis.

The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.`,
      dxUriText:
        "NASAL CONGESTION - [R09.81] , OTHER FATIGUE- [R53.83], ACUTE UPPER RESPIRATORY INFECTION UNSPECIFIED  - [J06.9], COUGH - [R05], PAIN IN THROAT - [R07.0], MYALGIA, UNSPECIFIED SITE - (M79.10), CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828]",

      sinusText: `The patient presents with facial pain and congestion.
Migraine could cause facial pain, but it is typically associated with unilateral throbbing headaches, nausea, and sensitivity to light or sound. These symptoms are not present.
Dental Abscess might present with facial pain, especially around the affected tooth, and is usually accompanied by dental symptoms such as toothache, swelling in the gums, or fever. These symptoms are not present.
Allergic Rhinitis can cause congestion, but it is typically associated with itching, sneezing, and watery eyes. These symptoms are not present.
Tonsillitis could present with facial pain and congestion, but it is usually accompanied by a sore throat, swollen tonsils, and fever. These symptoms are not present.
Sinusitis is an inflammation of the sinuses that typically presents with facial pain or pressure, nasal congestion, purulent nasal discharge, and may be accompanied by fever or fatigue. The patients symptoms align well with this diagnosis.
Based on the clinical presentation, sinusitis is considered the most likely diagnosis.
The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.`,
      dxSinusText:
        "ACUTE SINUSITIS, UNSPECIFIED - [J01.90], HEADACHE, UNSPECIFIED - [R51.9], ILLNESS, UNSPECIFIED - [R69], NASAL CONGESTION - [R09.81], ACUTE UPPER RESPIRATORY INFECTION, UNSPECIFIED - [J06.9]",

      bronchitisText: `Patient presents with a cough.
    
Pneumonia could cause a productive cough, but it is typically associated with hypoxia and shortness of breath which are not noted in this case.

Asthma can present with a cough, especially when triggered by environmental factors, but it is often associated with wheezing and shortness of breath, which are not emphasized here.

Allergic Rhinitis can cause a cough due to post-nasal drip, but this is usually accompanied by sneezing, itching, and watery eyes, which are not the primary symptoms.

Bronchitis is commonly caused by a respiratory  infection.  The patient's symptoms align well with this diagnosis.

Based on the clinical presentation, bronchitis is considered the most likely diagnosis.

The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.`,
      dxBronchitisText:
        "ACUTE BRONCHITIS, UNSPECIFIED - [J20.9], BRONCHITIS, NOT SPECIFIED AS ACUTE OR CHRONIC - [J40], ACUTE COUGH - [R05.1], COUGH, UNSPECIFIED - [R05.9], DYSPNEA, UNSPECIFIED - [R06.00]",

      fluText: `Pneumonia is  a consideration due to respiratory symptoms, becomes less likely due to the absence of focal signs such as lung crackles or increased work of breathing. Sepsis is unlikely, as the patient appears stable with no signs of systemic infection or organ dysfunction. Meningitis is also improbable since the patient does not exhibit symptoms suggestive of this condition, such as severe headache, neck stiffness, vomiting, altered consciousness, or focal neurological deficits.

An asthma exacerbation is less likely, as there is no indication of wheezing or significant respiratory distress during the clinical examination.

The clinical evaluation indicates that they are not septic and do not appear significantly ill.

Before discharge, we discussed return precautions, particularly for symptoms suggestive of bacterial co-infection or worsening illness. We also recommended a follow-up with their primary care provider within 2-3 days to monitor progress and ensure that any potential issues are promptly addressed. The patient demonstrated understanding and agreement with this plan.
`,
      dxFluText:
        "INFLUENZA DUE TO UNIDENTIFIED INFLUENZA VIRUS WITH OTHER RESPIRATORY, MANIFESTATIONS - [J11.1], ACUTE UPPER RESPIRATORY INFECTION, UNSPECIFIED - [J06.9], HEADACHE, UNSPECIFIED - [R51.9], ILLNESS, UNSPECIFIED - [R69], MYALGIA, UNSPECIFIED SITE - [M79.10], CHILLS, FEVER",

      pharyngitisText: `The patient presents with a sore throat.

Mononucleosis can cause a sore throat, but it is often associated with fatigue, swollen lymph nodes, and fever, making it less likely in the absence of these symptoms.

Viral pharyngitis is the most common cause of sore throat, often accompanied by mild fever and cold-like symptoms, such as cough or congestion. The absence of other signs of bacterial infection supports this diagnosis.

There is currently no sign of a peritonsillar abscess as there is no uvula deviation, no muffled voice, no trismus, and no drooling.

Based on the clinical presentation, viral pharyngitis is considered the most likely diagnosis.

The patient is safe for outpatient management. Follow-up is advised if symptoms worsen or fail to improve.`,
      dxPharyngitisText:
        "PHARYNGITIS, UNSPECIFIED - [J02.9], SORE THROAT - [R07.0], ACUTE UPPER RESPIRATORY INFECTION, UNSPECIFIED - [J06.9], CONTACT WITH AND (SUSPECTED) EXPOSURE TO OTHER VIRAL COMMUNICABLE DISEASES INCLUDING COVID-19 - [Z20.828]",

      splintCheckText:
        "After applying the splint, I checked the patients neurovascular status. The patient displayed normal sensory and motor functions, along with detectable pulses and appropriate capillary refill. There was no need to adjust the splint as it was not exerting pressure on any nerve or blood vessel. The patient received guidance on splint care and was informed about when to seek further medical care.",
      ekgText: "EKG Interpretation was performed and documented.",
      awareText: "Patient has been made aware of the ______________  abnormality, they have been instructed and understand the need to follow up with their physician. ",

      work1Text() {
        return generateWorkExcuse(1);
      },
      work2Text() {
        return generateWorkExcuse(2);
      },
      work3Text() {
        return generateWorkExcuse(3);
      },

      /* -----------
         Buttons
      ------------*/
      buttons: [
        { label: "HOME", color: "yellow", route: "/", class: "mx-5" },
        { label: "Adult", copyKey: "adultText", color: "#2196F3" },
        { label: "1", copyKey: "work1Text", color: "#FF9800" },
        { label: "2", copyKey: "work2Text", color: "#FB8C00" },
        { label: "3", copyKey: "work3Text", color: "#F57C00" },
        { label: "Mom", copyKey: "momText", color: "#E1BEE7" }, 
        { label: "Dad", copyKey: "dadText", color: "#CE93D8" },
        { label: "Parents", copyKey: "parentsText", color: "#BA68C8" },
        { label: "Guardian", copyKey: "guardianText", color: "#AB47BC" },
        { label: "URI", copyKey: "uriText", color: "#E57373" },
        { label: "Dx:URI", copyKey: "dxUriText", color: "#EF5350" },
        { label: "Sinus", copyKey: "sinusText", color: "#F06292" },
        { label: "Dx:Sinus", copyKey: "dxSinusText", color: "#EC407A" },
        { label: "Bronchitis", copyKey: "bronchitisText", color: "#9575CD" },
        { label: "Dx:Bronchitis", copyKey: "dxBronchitisText", color: "#7E57C2" },
        { label: "Flu", copyKey: "fluText", color: "#7986CB" },
        { label: "Dx:Flu", copyKey: "dxFluText", color: "#5C6BC0" },
        { label: "Pharyngitis", copyKey: "pharyngitisText", color: "#4FC3F7" },
        { label: "Dx:Pharyngitis", copyKey: "dxPharyngitisText", color: "#29B6F6" },
        { label: "Splint Check", copyKey: "splintCheckText", color: "#18FFFF" },
        { label: "EKG", copyKey: "ekgText", color: "#00E5FF" },
        { label: "Aware", copyKey: "awareText", color: "#00B8D4" },
      ],
      backgroundImage: new URL('@/assets/RedNavBarBackground.png', import.meta.url).href,
    };
  },
  methods: {
    copyText(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => console.log("Text copied to clipboard"))
        .catch(err => console.error("Failed to copy text: ", err));
    },
    handleButtonClick(button) {
      // If there's a route, navigate. Otherwise, copy the text if copyKey is provided.
      if (button.route) {
        // For example: refresh or navigate home
        // If you specifically want a refresh, you could do:
        // window.location.reload();
        // Or to navigate via router:
        this.$router.push(button.route);
      } else if (button.copyKey) {
        // For work excuse buttons, we need to call the function
        const textToCopy = button.copyKey.includes('work') 
          ? this[button.copyKey]() 
          : this[button.copyKey];
          
        if (textToCopy) {
          this.copyText(textToCopy);
        }
      }
    },
  },
};
</script>

<style scoped>
.v-btn.v-btn--density-default {
  height: 32px !important;
}
</style>
