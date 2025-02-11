/**
 * Calculate Conscious Sedation medication doses based on weight
 */

export function calculateAtropine(weight) {
    const dose = (weight * 0.02).toFixed(2);
    return `${dose} mg IV Maximum 1 mg`;
}

export function calculateEtomidate(weight) {
    const dose = (weight * 0.2).toFixed(0);
    return `${dose} mg IV`;
}

export function calculateFentanyl(weight) {
    const dose = (weight * 2).toFixed(0);
    return `${dose} mcg IV`;
}

export function calculateKetamine(weight) {
    const dose = (weight * 1.5).toFixed(0);
    return `${dose} mg IV`;
}

export function calculateVersed(weight) {
    const dose = Math.min((weight * 0.15).toFixed(1), 5);
    return `${dose} mg IV Maximum 5mg IV`;
}

export function calculatePropofol(weight) {
    const dose = (weight * 1.5).toFixed(0);
    return `${dose} mg IV`;
}

export function calculateRocuronium(weight) {
    const dose = (weight * 1).toFixed(0);
    return `${dose} mg IV`;
}

export function calculateSuccinylcholine(weight) {
    const dose = (weight * 1).toFixed(0);
    return `${dose} mg IV`;
}

// Calculate all sedation medications at once
export function calculateAllSedationMedications(weight) {
    return {
        atropine: calculateAtropine(weight),
        etomidate: calculateEtomidate(weight),
        fentanyl: calculateFentanyl(weight),
        ketamine: calculateKetamine(weight),
        versed: calculateVersed(weight),
        propofol: calculatePropofol(weight),
        rocuronium: calculateRocuronium(weight),
        succinylcholine: calculateSuccinylcholine(weight),
    };
}