/**
 * Calendar view handler for myAppointments page
 */

import { daysInMonth, formatDate, getFirstDayOfMonth } from '../utils/dateUtils.js';
import { getAppointmentsForDate } from '../utils/appointmentUtils.js';

let currentYear = 2025;
let currentMonth = 2; // March (0-indexed)

/**
 * Generate and render the calendar for a specific month
 * @param {number} year
 * @param {number} month - 0-indexed
 */
export function generateCalendar(year, month) {
    const container = document.getElementById('calendarContainer');
    if (!container) {
        console.warn('[calendarView] #calendarContainer not found');
        return;
    }

    container.innerHTML = '';

    const firstDayWeek = getFirstDayOfMonth(year, month);
    const totalDays = daysInMonth(year, month);

    const calendar = document.createElement('div');
    calendar.className = 'calendar-grid';

    // Weekday header
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(d => {
        const header = document.createElement('div');
        header.textContent = d;
        header.className = 'calendar-weekday';
        calendar.appendChild(header);
    });

    // Empty cells before first day
    for (let i = 0; i < firstDayWeek; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-cell calendar-cell--empty';
        calendar.appendChild(empty);
    }

    // Days
    for (let day = 1; day <= totalDays; day++) {
        const dateStr = formatDate(new Date(year, month, day));
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-cell';

        const number = document.createElement('div');
        number.className = 'calendar-day-number';
        number.textContent = day;
        dayDiv.appendChild(number);

        const dayAppointments = getAppointmentsForDate(dateStr);
        if (dayAppointments.length > 0) {
            dayDiv.classList.add('calendar-cell--has-appointments');
            dayDiv.title = dayAppointments
                .map(a => `${a.title} (${a.duration} min)`)
                .join('\n');
        }

        calendar.appendChild(dayDiv);
    }

    container.appendChild(calendar);
}

/**
 * Update year display
 */
export function updateYearDisplay() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
}

/**
 * Initialize calendar view with event listeners
 */
export function initCalendarView() {
    // Year navigation
    const prevYearBtn = document.getElementById('prevYear');
    const nextYearBtn = document.getElementById('nextYear');

    if (prevYearBtn) {
        prevYearBtn.addEventListener('click', () => {
            currentYear--;
            updateYearDisplay();
            generateCalendar(currentYear, currentMonth);
        });
    }

    if (nextYearBtn) {
        nextYearBtn.addEventListener('click', () => {
            currentYear++;
            updateYearDisplay();
            generateCalendar(currentYear, currentMonth);
        });
    }

    // Month buttons
    const monthButtons = document.querySelectorAll('.month-button');
    monthButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentMonth = index;
            // Highlight active month (optional)
            monthButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            generateCalendar(currentYear, currentMonth);
        });
    });

    // Initial render
    generateCalendar(currentYear, currentMonth);
    updateYearDisplay();
}
