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
    let totalDaysPrevMonth = 0;

    if (month == 0) {
        totalDaysPrevMonth = daysInMonth(year - 1, 11);
    } else {
        totalDaysPrevMonth = daysInMonth(year, month - 1);
    }

    for (let i = 0; i < firstDayWeek; i++) {
        // console.log(firstDayWeek);
        // console.log('td:' + totalDays);
        // console.log('tdpm:' + totalDaysPrevMonth);
        const empty = document.createElement('div');
        empty.className = 'calendar-cell calendar-cell--empty';

        const number = document.createElement('div');
        number.className = 'calendar-day-number';
        number.textContent = totalDaysPrevMonth - firstDayWeek + 1 + i;
        empty.appendChild(number);

        calendar.appendChild(empty);
    }

    // Days in current month
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

    //Days after end of month
    const totalCells = firstDayWeek + totalDays;
    const remainingCells = 7 * 6 - totalCells;
    for (let i = 1; i <= remainingCells; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-cell calendar-cell--empty';
        const number = document.createElement('div');
        number.className = 'calendar-day-number';
        number.textContent = i;
        empty.appendChild(number);
        calendar.appendChild(empty);
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
