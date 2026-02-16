import { setRandomPlaceholder } from '../../components/helpers/textGenerator.js';
import { APPOINTMENT_SAMPLES } from '../../config/constants.js';
import initProfileMenu from '../../components/profile/profile.js';
import initNotificationsMenu from '../../components/notifications/notifications.js';

document.addEventListener('DOMContentLoaded', () => {
    initProfileMenu();
    initNotificationsMenu();

    const input = document.getElementById('aiBookingInput');
    setRandomPlaceholder(input, APPOINTMENT_SAMPLES);
});