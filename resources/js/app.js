import './bootstrap';
import './components/profile.js';
import './components/themeToggler';
import './components/notifications.js';

import { populateAppointmentInput } from './components/textGenerator.js';
import { logWindowSizeOnResize } from './utils/utilities.js';

const input = document.querySelector('input[type="text"]');
populateAppointmentInput(input);

logWindowSizeOnResize();