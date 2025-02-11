export const callTexts = [
  "no answer a voice message was left",
  "There was no pick up, a voicemail message was left",
  "There was no answer to the phone call.",
  "I left a voicemail with a request to return phone call",
  "there was no answer, so I left a voicemail",
  "voice mailbox has not been set up",
  "The call was not answered I provided instructions in a voicemail on how to call me back.",
  "There was no pick up of any kind",
  "It seems this is a wrong number",
  "The call went to voicemail.",
  "The recipient was unable to answer the phone."
];

export function getRandomCallText() {
  const randomIndex = Math.floor(Math.random() * callTexts.length);
  return callTexts[randomIndex];
}