<template>
  <v-navigation-drawer
    app
    color="#912737"
    class="rounded"
    width="200"
    :image="backgroundImage"
  >
    <v-list dense>
   

      <v-list-item
        v-for="button in buttons"
        :key="button.label"
        class="px-2 mx-4"
      >
        <v-btn
          block
          :color="button.color"
         
            :class="{'my-3 pa-8': button.label === 'HOME'}"
            :prepend-icon="button.label === 'HOME' ? 'mdi-home' : ''"
          @click="handleButtonClick(button)"
        >
          {{ button.label }}
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
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

      /* -----------
         Buttons
      ------------*/
      buttons: [
        { label: "HOME", color: "yellow", route: "/", class: "mx-5" },
        { label: "Adult", copyKey: "adultText", color: "#2196F3" },
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
        // Copy the text from data
        const textToCopy = this[button.copyKey];
        if (textToCopy) {
          this.copyText(textToCopy);
        }
      }
    },
  },
};
</script>
<!-- 
**Notes/Considerations**:

1. The `"HOME / Refresh"` button is treated as a special case with a `route: "/"`. You can decide whether it actually navigates to `"/"` using `this.$router.push("/")`, or simply calls `window.location.reload()`. Just adjust that logic in `handleButtonClick(button)`.

2. For each of the other buttons, if they have a `copyKey`, the associated text is looked up in the component’s data fields, and then copied to clipboard.

3. You can customize the color schemes, sizing, or button arrangement to your preference. If you want icons, you can use `<v-icon>` inside your `<v-btn>` or specify `prepend-icon`, etc.

This setup consolidates your copy texts in one place and automatically wires up the buttons in your navigation drawer. -->
