/**
 * Calendar view handler for myAppointments page
 */

import { daysInMonth, formatDate, getFirstDayOfMonth } from '../utils/dateUtils.js';
import { getAppointmentsForDate } from '../utils/appointmentUtils.js';
import { getTodayInfo } from '../utils/todayUtils.js';

const info = getTodayInfo();
let currentYear = info.year;
let currentMonth = info.monthNumber - 1;
let currentDay = info.day;
let currentDayNumber = info.dayNumber;
let selectedMonth = currentMonth;

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

    let firstDayWeek = getFirstDayOfMonth(year, month);
    // Convert Sunday (0) to 6 for Monday-based week
    firstDayWeek = (firstDayWeek === 0) ? 6 : (firstDayWeek - 1);
    
    const totalDays = daysInMonth(year, month);

    const calendar = document.createElement('div');
    calendar.className = 'calendar-grid';

    // Weekday header - starting with Monday
    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].forEach(d => {
        const header = document.createElement('div');
        header.textContent = d;
        header.className = 'calendar-weekday';
        if (currentDay.startsWith(header.textContent)) header.classList.add('active-date');
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

        dayDiv.dataset.date = dateStr;  //storing date -> using in details of the day

        const number = document.createElement('div');
        number.className = 'calendar-day-number';
        number.textContent = day;
        if (number.textContent == currentDayNumber && month == info.monthNumber - 1 && year == info.year) {
            // mark today's cell separately from the selected/active cell
            dayDiv.classList.add('today');
        }
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
export function initCalendarView(appointments) {
    console.log(appointments);
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
        btn.addEventListener('click', (e) => {
            currentMonth = index;

            if (selectedMonth === currentMonth) return;

            monthButtons.forEach(b => b.classList.remove('active-month'));
            btn.classList.add('active-month');
            generateCalendar(currentYear, currentMonth);

            console.log(selectedMonth);
            console.log(currentMonth); //switched to
            console.log(getCurrentMonthAnimationDirection(selectedMonth, currentMonth));
            animateMonthTransition(getCurrentMonthAnimationDirection(selectedMonth, currentMonth));
            selectedMonth = currentMonth; //update selected month to the current month after switching
            console.log("switching month");

        });
    });

    // Initial render
    generateCalendar(currentYear, currentMonth);

    highlightCurrentMonth(currentMonth);

    updateYearDisplay();
}

function animateMonthTransition() {
    const calendar = document.querySelector('.calendar-grid');
    if (!calendar) return;

    calendar.style.transition = "transform 0.3s ease, opacity 0.3s ease";
    calendar.style.transform = "translateY(0)";
    calendar.style.opacity = "1";

    requestAnimationFrame(() => {
        calendar.style.transform = "translateY(-50rem)";
        calendar.style.opacity = "0";
    });

    calendar.addEventListener("transitionend", () => {
        calendar.style.transform = "translateY(0)";
        calendar.style.opacity = "1";
    }, { once: true });
}


function getCurrentMonthAnimationDirection(selectedMonth, currentMonth) {
    if (selectedMonth === currentMonth) return null;
    return (selectedMonth < currentMonth) ? 'up' : 'down';
}

function highlightCurrentMonth(currentMonth) {
    const monthsContainer = document.getElementById("monthsContainer");
    const buttons = monthsContainer.children;
    if (buttons[currentMonth]) {
        buttons[currentMonth].classList.add("active-month");
    }
}
