// Medication calculator utility functions

export function calculateCoughSyrup(weight) {
  if (weight <= 15) return "probably too young";
  if (weight <= 20) return "5 ml PO q 6 hours PRN -- Guaifenesin 100 mg / 5 ml";
  if (weight <= 30) return "10 ml PO q 6 hours PRN -- Guaifenesin 100 mg / 5 ml";
  if (weight <= 40) return "3ml PO q 6 hours PRN -- Promethazine DM 6.25mg/15mg/5ml";
  if (weight <= 50) return "4 ml PO TID for 10 days -- Promethazine DM 6.25mg/15mg/5ml";
  return "5 ml PO TID for 10 days -- Promethazine DM 6.25mg/15mg/5ml";
}

export function calculateIbuprofen(weight) {
  if (weight >= 5 && weight <= 7) return "2.5 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 8 && weight <= 10) return "4 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 11 && weight <= 15) return "5 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 16 && weight <= 21) return "7.5 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 22 && weight <= 26) return "10 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 27 && weight <= 32) return "12.5 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 33 && weight <= 43) return "15 ml PO q6h PRN : Ibuprofen 100mg / 5ml";
  if (weight >= 44) return "400mg PO q6h PRN : Ibuprofen 200mg tabs";
  return "Please enter a valid weight.";
}

export function calculateTylenol(weight) {
  if (weight >= 5 && weight <= 7) return "2.5 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 8 && weight <= 9) return "4 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 10 && weight <= 11) return "5 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 12 && weight <= 13) return "6 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 14 && weight <= 15) return "8 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 16 && weight <= 19) return "9 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 20 && weight <= 25) return "12 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 25 && weight <= 30) return "14 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 30 && weight <= 35) return "15 ml PO q4h PRN : Tylenol 160mg / 5ml";
  if (weight >= 36) return "500mg PO q4h PRN : Adult dose";
  return "Please enter a valid weight.";
}

export function calculatePrednisolone(weight) {
  if (weight >= 5 && weight <= 10) return `${weight} ml PO QD for 5 days -- Prednisolone 5mg/5ml`;
  if (weight >= 11 && weight <= 15) return "5ml PO QD for 5 days -- Prednisolone 15mg/5ml";
  if (weight >= 16 && weight <= 19) return "6 ml PO QD for 5 days -- Prednisolone 15mg/5ml";
  if (weight >= 20 && weight <= 25) return "8ml PO QD for 5 days -- Prednisolone 15mg/5ml";
  if (weight >= 26 && weight <= 30) return "10ml PO QD for 5 days -- Prednisolone 15mg/5ml";
  if (weight >= 31 && weight <= 40) return "13ml PO QD for 5 days -- Prednisolone 15mg/5ml";
  if (weight >= 41 && weight <= 49) return "10ml PO QD for 5 days -- Prednisolone 15mg/5ml";
  if (weight >= 50) return "Adult Dose: 50 mg PO x 5 days";
  return "Please enter a valid weight.";
}

export function calculateAmoxicillin(weight) {
  if (weight >= 5 && weight <= 7) return "3 ml PO TID for 10 days -- Amoxicillin 125mg/5ml";
  if (weight >= 8 && weight <= 14) return "5 ml PO TID for 10 days -- Amoxicillin 200mg/5ml";
  if (weight >= 15 && weight <= 19) return "5 ml PO TID for 10 days -- Amoxicillin 250mg/5ml";
  if (weight >= 20 && weight <= 29) return "5 ml PO TID for 10 days -- Amoxicillin 400mg/5ml";
  if (weight >= 30 && weight <= 34) return "6 ml PO TID for 10 days -- Amoxicillin 400mg/5ml";
  if (weight >= 35 && weight <= 44) return "7 ml PO TID for 10 days -- Amoxicillin 400mg/5ml";
  if (weight >= 45 && weight <= 49) return "8 ml PO TID for 10 days -- Amoxicillin 400mg/5ml";
  if (weight >= 50) return "Adult Dose: 500mg PO TID for 10 days";
  return "Please enter a valid weight.";
}

export function calculateAzithromycin(weight) {
  if (weight === 3) return "1.5ml PO on day 1 then 0.8ml PO day 2-5 --Azithromycin 100mg/5ml";
  if (weight === 4) return "2ml PO on day 1 then 1ml PO day 2-5 -- Azithromycin 100mg/5ml";
  if (weight === 5) return "2.5ml PO on day 1 then 1.3ml PO day 2-5 -- Azithromycin 100mg/5ml";
  // ... continue with the rest of the specific cases
  if (weight >= 21 && weight <= 22) return "5.5 ml PO on day 1 then 2.8 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 23 && weight <= 24) return "6 ml PO on day 1 then 3 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 25 && weight <= 28) return "6.5 ml PO on day 1 then 3.3 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 29 && weight <= 32) return "7 ml PO on day 1 then 3.5 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 33 && weight <= 36) return "8 ml PO on day 1 then 4 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 37 && weight <= 40) return "10 ml PO on day 1 then 5 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 41 && weight <= 44) return "11 ml PO on day 1 then 5.5 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 45 && weight <= 49) return "12 ml PO on day 1 then 6 ml PO days 2-5 -- Azithromycin 200mg/5ml";
  if (weight >= 50) return "Adult Dose: Day 1: 500 mg PO for one dose then Days 2 to 5: 250 mg PO once daily";
  return "Please enter a valid weight.";
}

export function calculateBactrim(weight) {
  if (weight >= 4 && weight <= 5) return "3 ml PO BID for 10 days -- Bactrim suspension";
  if (weight >= 6 && weight <= 7) return "4 ml PO BID for 10 days -- Bactrim suspension";
  if (weight >= 8 && weight <= 10) return "5 ml PO BID for 10 days -- Bactrim suspension";
  if (weight === 11) return "6 ml PO BID for 10 days -- Bactrim suspension";
  if (weight >= 12 && weight <= 15) return "8 ml PO BID for 10 days -- Bactrim suspension";
  if (weight >= 16 && weight <= 49) return "10 ml PO BID for 10 days -- Bactrim suspension";
  if (weight >= 50) return "Adult Dose: 1 DS tab PO BID for 10 days";
  return "Please enter a valid weight.";
}

export function calculateKeflex(weight) {
  if (weight >= 5 && weight <= 7) return "3 ml PO TID for 10 days -- cephalexin 125mg/5ml";
  if (weight >= 8 && weight <= 10) return "4 ml PO TID for 10 days -- cephalexin 125mg/5ml";
  if (weight >= 11 && weight <= 13) return "5 ml PO TID for 10 days -- cephalexin 125mg/5ml";
  if (weight >= 14 && weight <= 19) return "8 ml PO TID for 10 days -- cephalexin 250mg/5ml";
  if (weight >= 20 && weight <= 34) return "7 ml PO TID for 10 days -- cephalexin 250mg/5ml";
  if (weight >= 35 && weight <= 39) return "8 ml PO TID for 10 days -- cephalexin 250mg/5ml";
  if (weight >= 40 && weight <= 44) return "9 ml PO TID for 10 days -- cephalexin 250mg/5ml";
  if (weight >= 45 && weight <= 49) return "10 ml PO TID for 10 days -- cephalexin 250mg/5ml";
  if (weight >= 50) return "Adult Dose: 500mg PO TID for 10 days";
  return "Please enter a valid weight.";
}

export function calculateOmnicef(weight) {
  if (weight > 42) return "Omnicef 300mg twice a day";
  
  let dose;
  let dosageText;
  
  if (weight > 35) {
    dose = Math.round(weight * 7 * 5 / 250);
    dosageText = "250mg/5ml";
  } else {
    dose = Math.round(weight * 7 * 5 / 125);
    dosageText = "125mg/5ml";
  }
  
  return `The omnicef dose is: ${dose} ml PO BID of ${dosageText}`;
}

export function calculateTamiflu(weight) {
  if (weight <= 15) {
    const dose = Math.round(weight * 3 * 1 / 6);
    return `The Tamiflu dose is: ${dose} ml of 6mg/ml BID for 10 days`;
  }
  
  if (weight > 15 && weight <= 23) return "5 ml PO BID for 5 days -- Tamiflu 6 mg/ml";
  if (weight >= 24 && weight <= 40) return "10 ml PO BID for 5 days -- Tamiflu 6 mg/ml";
  if (weight > 40) return "12.5 ml PO BID for 5 days -- Tamiflu 6 mg/ml";
  
  return "Please enter a valid weight.";
}

export function calculateFever(weight) {
  // Calculate Tylenol dose
  const tylenolMl = (weight * 15 * 5 / 160).toFixed(1);
  const tylenolTsp = (tylenolMl * 0.2).toFixed(1);

  // Calculate Motrin dose
  const motrinMl = (weight * 10 * 5 / 100).toFixed(1);
  const motrinTsp = (motrinMl * 0.202884).toFixed(1);

  return `The Tylenol (Acetaminophen) dosage is ${tylenolMl} milliliters or ${tylenolTsp} teaspoons every four (4) hours; while the Motrin (ibuprofen) dose is ${motrinMl} milliliters or ${motrinTsp} teaspoons every six (6) hours. A fever is when the body temperature is above 100.4 F`;
}

// Calculate all medications at once
export function calculateAllMedications(weight) {
  return {
    fever: calculateFever(weight),
    coughSyrup: calculateCoughSyrup(weight),
    ibuprofen: calculateIbuprofen(weight),
    tylenol: calculateTylenol(weight),
    prednisolone: calculatePrednisolone(weight),
    amoxicillin: calculateAmoxicillin(weight),
    azithromycin: calculateAzithromycin(weight),
    bactrim: calculateBactrim(weight),
    keflex: calculateKeflex(weight),
    omnicef: calculateOmnicef(weight),
    tamiflu: calculateTamiflu(weight)
  };
}