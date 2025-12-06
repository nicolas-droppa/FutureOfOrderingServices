// Sample texts for appointments
const mockTexts = {
    appointments: [
        'Reservation for a beard trim on Friday at 15:00.',
        'I need an urgent dental appointment today — the earliest available time.',
        'I would like to schedule a classic men\'s haircut this Friday at 10:00 AM.',
        'Professional hair styling session for next Monday afternoon around 2:00 PM.',
        'Tire change appointment next week after 17:00 for my sedan',
        'Plumber needed immediately for a burst pipe in the kitchen!',
        'Apartment deep-cleaning requested Saturday at 09:00, max two-hour session.',
        'Electrician required to fix flickering lights tomorrow evening.',
        'Air conditioning maintenance next Tuesday morning between 08:00 and 11:00.',
        'Pest control visit requested next week for the apartment — prefer a morning slot.',
        'Window cleaning service for balcony and exterior windows on Thursday afternoon.'
    ]
}

/**
 * Get a random appointment text
 * @returns {string} Random appointment text
 */
export function getRandomAppointmentText() {
    const texts = mockTexts.appointments;

    const randomIndex = Math.floor(Math.random() * texts.length);

    return texts[randomIndex];
}

/**
 * Set a random appointment text as placeholder
 * @param {*} inputElement - Input element
 */
export function populateAppointmentInput(inputElement) {
    if (!inputElement) return;

    const randomText = getRandomAppointmentText();
    inputElement.placeholder = randomText;
}