import { initCalendarView } from './appointmentsCalendar.js';
import { initViewToggle } from './appointmentsViewToggle.js';
import { displayToday } from '../utils/todayUtils.js';

import { appointmentsData } from './appointmentsData.js';

import { generateDetails } from './appointmentsDetails.js';

document.addEventListener('DOMContentLoaded', async () => {
  displayToday('todayDisplay');
  initCalendarView(appointmentsData);
  initViewToggle();

  // pack this logic in its own file... my bitch ass is lazy for that now
  const calendarContainer = document.getElementById('calendarContainer');
  calendarContainer.addEventListener('click', (e) => {
    const cell = e.target.closest('.calendar-cell');

    if (!cell || cell.classList.contains('calendar-cell--empty')) return;

    generateDetails(cell.dataset.date);
  });
});
