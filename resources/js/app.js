import './bootstrap';
import './components/profileDropdown';
import './components/themeToggler';
import './components/settings.js';
import './components/notifications.js';

import { populateAppointmentInput } from './components/textGenerator.js';

const input = document.querySelector('input[type="text"]');
populateAppointmentInput(input);
