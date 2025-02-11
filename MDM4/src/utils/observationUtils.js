export const observationTexts = {
  initial: "The patient was placed into observation status for further evaluation and management of the patient's symptoms. Currently, there is a lack of diagnostic certainty, and a more precise diagnosis is needed to determine whether the patient should be transferred for admission or discharged home.",
  improving: "Despite ongoing symptoms, the patient appears to be somewhat improved.",
  stable: "Patient is complaining of ______ but is resting quietly, in no distress with no objective indicators of distress",
  quiet: "The patient appears to be improving and is resting quietly with no complaints at this time.",
  restroom: "The patient has been to the restroom and seems to be feeling better.",
  ambulatory: "The patient is ambulatory and continues to progress well and has no current complaints.",
  discharge: "The patient has significantly improved and is now safe for outpatient management.",
  admit: "It appears that the patient is appropriate for hospitalization, and I will arrange for transfer and transport."
};

export const OBSERVATION_TIME = 15 * 60; // 15 minutes in seconds

export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}