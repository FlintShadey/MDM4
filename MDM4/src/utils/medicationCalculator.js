// Medication calculator utility functions

export function calculateCoughSyrup(weight) {
  const doses = {
    dosage: "",
    details: "-- Guaifenesin 100 mg / 5 ml"
  };
  
  if (weight <= 15) {
    doses.dosage = "probably too young";
    doses.details = "";
  } else if (weight <= 20) {
    doses.dosage = "5 ml PO q 6 hours PRN";
  } else if (weight <= 30) {
    doses.dosage = "10 ml PO q 6 hours PRN";
  } else if (weight <= 40) {
    doses.dosage = "3ml PO q 6 hours PRN";
    doses.details = "-- Promethazine DM 6.25mg/15mg/5ml";
  } else if (weight <= 50) {
    doses.dosage = "4 ml PO TID for 10 days";
    doses.details = "-- Promethazine DM 6.25mg/15mg/5ml";
  } else {
    doses.dosage = "5 ml PO TID for 10 days";
    doses.details = "-- Promethazine DM 6.25mg/15mg/5ml";
  }
  return doses;
}

export function calculateIbuprofen(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight >= 5 && weight <= 7) {
    doses.dosage = "2.5 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 8 && weight <= 10) {
    doses.dosage = "4 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 11 && weight <= 15) {
    doses.dosage = "5 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 16 && weight <= 21) {
    doses.dosage = "7.5 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 22 && weight <= 26) {
    doses.dosage = "10 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 27 && weight <= 32) {
    doses.dosage = "12.5 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 33 && weight <= 43) {
    doses.dosage = "15 ml PO q6h PRN";
    doses.details = "-- Ibuprofen 100mg / 5ml";
  } else if (weight >= 44) {
    doses.dosage = "400mg PO q6h PRN";
    doses.details = "-- Ibuprofen 200mg tabs";
  }
  return doses;
}

export function calculateTylenol(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight >= 5 && weight <= 7) {
    doses.dosage = "2.5 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 8 && weight <= 9) {
    doses.dosage = "4 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 10 && weight <= 11) {
    doses.dosage = "5 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 12 && weight <= 13) {
    doses.dosage = "6 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 14 && weight <= 15) {
    doses.dosage = "8 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 16 && weight <= 19) {
    doses.dosage = "9 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 20 && weight <= 25) {
    doses.dosage = "12 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 25 && weight <= 30) {
    doses.dosage = "14 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 30 && weight <= 35) {
    doses.dosage = "15 ml PO q4h PRN";
    doses.details = "-- Tylenol 160mg / 5ml";
  } else if (weight >= 36) {
    doses.dosage = "500mg PO q4h PRN";
    doses.details = "-- Adult dose";
  }
  return doses;
}

export function calculatePrednisolone(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight >= 5 && weight <= 10) {
    doses.dosage = `${weight} ml PO QD for 5 days`;
    doses.details = "-- Prednisolone 5mg/5ml";
  } else if (weight >= 11 && weight <= 15) {
    doses.dosage = "5ml PO QD for 5 days";
    doses.details = "-- Prednisolone 15mg/5ml";
  } else if (weight >= 16 && weight <= 19) {
    doses.dosage = "6 ml PO QD for 5 days";
    doses.details = "-- Prednisolone 15mg/5ml";
  } else if (weight >= 20 && weight <= 25) {
    doses.dosage = "8ml PO QD for 5 days";
    doses.details = "-- Prednisolone 15mg/5ml";
  } else if (weight >= 26 && weight <= 30) {
    doses.dosage = "10ml PO QD for 5 days";
    doses.details = "-- Prednisolone 15mg/5ml";
  } else if (weight >= 31 && weight <= 40) {
    doses.dosage = "13ml PO QD for 5 days";
    doses.details = "-- Prednisolone 15mg/5ml";
  } else if (weight >= 41 && weight <= 49) {
    doses.dosage = "15ml PO QD for 5 days";
    doses.details = "-- Prednisolone 15mg/5ml";
  } else if (weight >= 50) {
    doses.dosage = "Adult Dose: 50 mg PO x 5 days";
    doses.details = "";
  }
  return doses;
}

export function calculateAmoxicillin(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight >= 5 && weight <= 7) {
    doses.dosage = "3 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 125mg/5ml";
  } else if (weight >= 8 && weight <= 14) {
    doses.dosage = "5 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 200mg/5ml";
  } else if (weight >= 15 && weight <= 19) {
    doses.dosage = "5 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 250mg/5ml";
  } else if (weight >= 20 && weight <= 29) {
    doses.dosage = "5 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 400mg/5ml";
  } else if (weight >= 30 && weight <= 34) {
    doses.dosage = "6 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 400mg/5ml";
  } else if (weight >= 35 && weight <= 44) {
    doses.dosage = "7 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 400mg/5ml";
  } else if (weight >= 45 && weight <= 49) {
    doses.dosage = "8 ml PO TID for 10 days";
    doses.details = "-- Amoxicillin 400mg/5ml";
  } else if (weight >= 50) {
    doses.dosage = "Adult Dose: 500mg PO TID for 10 days";
    doses.details = "";
  }
  return doses;
}

export function calculateAzithromycin(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight === 3) {
    doses.dosage = "1.5ml PO on day 1 then 0.8ml PO day 2-5";
    doses.details = "-- Azithromycin 100mg/5ml";
  } else if (weight === 4) {
    doses.dosage = "2ml PO on day 1 then 1ml PO day 2-5";
    doses.details = "-- Azithromycin 100mg/5ml";
  } else if (weight === 5) {
    doses.dosage = "2.5ml PO on day 1 then 1.3ml PO day 2-5";
    doses.details = "-- Azithromycin 100mg/5ml";
  } else if (weight >= 21 && weight <= 22) {
    doses.dosage = "5.5 ml PO on day 1 then 2.8 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 23 && weight <= 24) {
    doses.dosage = "6 ml PO on day 1 then 3 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 25 && weight <= 28) {
    doses.dosage = "6.5 ml PO on day 1 then 3.3 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 29 && weight <= 32) {
    doses.dosage = "7 ml PO on day 1 then 3.5 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 33 && weight <= 36) {
    doses.dosage = "8 ml PO on day 1 then 4 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 37 && weight <= 40) {
    doses.dosage = "10 ml PO on day 1 then 5 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 41 && weight <= 44) {
    doses.dosage = "11 ml PO on day 1 then 5.5 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 45 && weight <= 49) {
    doses.dosage = "12 ml PO on day 1 then 6 ml PO days 2-5";
    doses.details = "-- Azithromycin 200mg/5ml";
  } else if (weight >= 50) {
    doses.dosage = "Adult Dose: Day 1: 500 mg PO for one dose then Days 2 to 5: 250 mg PO once daily";
    doses.details = "";
  }
  return doses;
}

export function calculateBactrim(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight >= 4 && weight <= 5) {
    doses.dosage = "3 ml PO BID for 10 days";
    doses.details = "-- Bactrim suspension";
  } else if (weight >= 6 && weight <= 7) {
    doses.dosage = "4 ml PO BID for 10 days";
    doses.details = "-- Bactrim suspension";
  } else if (weight >= 8 && weight <= 10) {
    doses.dosage = "5 ml PO BID for 10 days";
    doses.details = "-- Bactrim suspension";
  } else if (weight === 11) {
    doses.dosage = "6 ml PO BID for 10 days";
    doses.details = "-- Bactrim suspension";
  } else if (weight >= 12 && weight <= 15) {
    doses.dosage = "8 ml PO BID for 10 days";
    doses.details = "-- Bactrim suspension";
  } else if (weight >= 16 && weight <= 49) {
    doses.dosage = "10 ml PO BID for 10 days";
    doses.details = "-- Bactrim suspension";
  } else if (weight >= 50) {
    doses.dosage = "Adult Dose: 1 DS tab PO BID for 10 days";
    doses.details = "";
  }
  return doses;
}

export function calculateKeflex(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };

  if (weight >= 5 && weight <= 7) {
    doses.dosage = "3 ml PO TID for 10 days";
    doses.details = "-- cephalexin 125mg/5ml";
  } else if (weight >= 8 && weight <= 10) {
    doses.dosage = "4 ml PO TID for 10 days";
    doses.details = "-- cephalexin 125mg/5ml";
  } else if (weight >= 11 && weight <= 13) {
    doses.dosage = "5 ml PO TID for 10 days";
    doses.details = "-- cephalexin 125mg/5ml";
  } else if (weight >= 14 && weight <= 19) {
    doses.dosage = "8 ml PO TID for 10 days";
    doses.details = "-- cephalexin 250mg/5ml";
  } else if (weight >= 20 && weight <= 34) {
    doses.dosage = "7 ml PO TID for 10 days";
    doses.details = "-- cephalexin 250mg/5ml";
  } else if (weight >= 35 && weight <= 39) {
    doses.dosage = "8 ml PO TID for 10 days";
    doses.details = "-- cephalexin 250mg/5ml";
  } else if (weight >= 40 && weight <= 44) {
    doses.dosage = "9 ml PO TID for 10 days";
    doses.details = "-- cephalexin 250mg/5ml";
  } else if (weight >= 45 && weight <= 49) {
    doses.dosage = "10 ml PO TID for 10 days";
    doses.details = "-- cephalexin 250mg/5ml";
  } else if (weight >= 50) {
    doses.dosage = "Adult Dose: 500mg PO TID for 10 days";
    doses.details = "";
  }
  return doses;
}

export function calculateOmnicef(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: ""
  };
  
  if (weight > 42) {
    doses.dosage = "Omnicef 300mg twice a day";
    doses.details = "";
    return doses;
  }
  
  let dose;
  let concentration;
  
  if (weight > 35) {
    dose = Math.round(weight * 7 * 5 / 250);
    concentration = "250mg/5ml";
  } else {
    dose = Math.round(weight * 7 * 5 / 125);
    concentration = "125mg/5ml";
  }
  
  doses.dosage = `${dose} ml PO BID for 10 days`;
  doses.details = `-- Omnicef ${concentration}`;
  return doses;
}

export function calculateTamiflu(weight) {
  const doses = {
    dosage: "Please enter a valid weight.",
    details: "-- Tamiflu 6 mg/ml"
  };
  
  if (weight <= 15) {
    const dose = Math.round(weight * 3 * 1 / 6);
    doses.dosage = `${dose} ml BID for 5 days`;
  } else if (weight > 15 && weight <= 23) {
    doses.dosage = "5 ml PO BID for 5 days";
  } else if (weight >= 24 && weight <= 40) {
    doses.dosage = "10 ml PO BID for 5 days";
  } else if (weight > 40) {
    doses.dosage = "12.5 ml PO BID for 5 days";
  }
  
  return doses;
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
  const fever = calculateFever(weight); // Keep fever calculation as is
  const results = {
    fever,
  };

  // Add other medications
  const medications = {
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

  // Format each medication result
  Object.entries(medications).forEach(([key, value]) => {
    if (typeof value === 'object' && value.dosage) {
      results[key] = value.dosage + ' ' + value.details;
    } else {
      results[key] = value;
    }
  });

  return results;
}