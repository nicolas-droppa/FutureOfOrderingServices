import { initCalendarView } from './appointmentsCalendar.js';
import { initViewToggle } from './appointmentsViewToggle.js';
import { displayToday } from '../utils/todayUtils.js';

document.addEventListener('DOMContentLoaded', () => {
  displayToday('todayDisplay');
  initCalendarView();
  initViewToggle();
});
