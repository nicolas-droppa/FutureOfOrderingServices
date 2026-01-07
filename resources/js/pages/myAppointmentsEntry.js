import { initCalendarView } from './appointmentsCalendar.js';
import { initViewToggle } from './appointmentsViewToggle.js';
import { displayToday } from '../utils/todayUtils.js';

import { appointmentsData } from './appointmentsData.js';

document.addEventListener('DOMContentLoaded', async () => {
  displayToday('todayDisplay');
  initCalendarView(appointmentsData);
  initViewToggle();
});
