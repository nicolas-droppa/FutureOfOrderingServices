import { setRandomPlaceholder } from '../../components/helpers/textGenerator.js';
import { APPOINTMENT_SAMPLES } from '../../config/constants.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome page loaded");
    const input = document.getElementById('aiBookingInput');
    
    setRandomPlaceholder(input, APPOINTMENT_SAMPLES);
});