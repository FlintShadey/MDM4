import { add, format } from 'date-fns';

/**
 * Generates a work excuse note with start and end dates
 * @param {number} daysToAdd - Number of days to add to today's date
 * @returns {string} Formatted work excuse text
 */
export function generateWorkExcuse(daysToAdd) {
    const startDate = new Date();
    const endDate = add(startDate, { days: daysToAdd });
    
    const formattedStartDate = format(startDate, 'MMMM d, yyyy');
    const formattedEndDate = format(endDate, 'MMMM d, yyyy');
    
    return `The patient has been under my care and is excused from work from today's date: ${formattedStartDate} until ${formattedEndDate}. At which time they are cleared without restrictions`;
}

/**
 * Generates a school excuse note with start and end dates
 * @param {number} daysToAdd - Number of days to add to today's date
 * @returns {string} Formatted school excuse text
 */
export function generateSchoolExcuse(daysToAdd) {
    const startDate = new Date();
    const endDate = add(startDate, { days: daysToAdd });
    
    const formattedStartDate = format(startDate, 'MMMM d, yyyy');
    const formattedEndDate = format(endDate, 'MMMM d, yyyy');
    
    return `The patient has been under my care and is excused from school from today's date: ${formattedStartDate} until ${formattedEndDate}. At which time they are cleared without restrictions`;
}

/**
 * Generates a lift restriction note with future date
 * @param {number} daysToAdd - Number of days to add to today's date
 * @returns {string} Formatted lift restriction text
 */
export function generateLiftRestriction(daysToAdd = 7) {
    const futureDate = add(new Date(), { days: daysToAdd });
    const formattedDate = format(futureDate, 'MM/dd/yyyy');
    
    return `The patient may not lift > 20 pounds until ${formattedDate}`;
}

/**
 * Generates an extremity restriction note with future date
 * @param {number} daysToAdd - Number of days to add to today's date
 * @returns {string} Formatted extremity restriction text
 */
export function generateExtremityRestriction(daysToAdd = 7) {
    const futureDate = add(new Date(), { days: daysToAdd });
    const formattedDate = format(futureDate, 'MM/dd/yyyy');
    
    return `Limited usage of the affected extremity until ${formattedDate}`;
}

/**
 * Generates a PE excuse note with future date
 * @param {number} daysToAdd - Number of days to add to today's date
 * @returns {string} Formatted PE excuse text
 */
export function generatePEExcuse(daysToAdd = 7) {
    const futureDate = add(new Date(), { days: daysToAdd });
    const formattedDate = format(futureDate, 'MM/dd/yyyy');
    
    return `The patient is excused from PE until ${formattedDate}`;
}

// Additional date utility functions can be added here