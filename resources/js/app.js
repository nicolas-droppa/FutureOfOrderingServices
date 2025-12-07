import './bootstrap';
import './components/profileDropdown';
import './components/themeToggler';
import './components/settingsMenu.js';

import { populateAppointmentInput } from './components/textGenerator.js';

const input = document.querySelector('input[type="text"]'); // or whatever selector
populateAppointmentInput(input);
