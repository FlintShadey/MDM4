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

// Additional date utility functions can be added here