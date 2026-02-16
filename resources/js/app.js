import './bootstrap';
import './components/profile/profile.js';
import './layout/themeToggler.js';
import './components/notifications.js';

import { populateAppointmentInput } from './components/helpers/textGenerator.js';
import { logWindowSizeOnResize } from './utils/helpers.js';

const input = document.querySelector('input[type="text"]');
populateAppointmentInput(input);

logWindowSizeOnResize();