import './bootstrap';
import './components/profileDropdown';
import './components/themeToggler';

import { populateAppointmentInput } from './components/textGenerator.js';

const input = document.querySelector('input[type="text"]');
populateAppointmentInput(input);
