import { setRandomPlaceholder } from '../../utils/helpers.js';
import { APPOINTMENT_SAMPLES } from '../../config/data/appointmentSamples.js';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('aiBookingInput');
    
    setRandomPlaceholder(input, APPOINTMENT_SAMPLES);
});