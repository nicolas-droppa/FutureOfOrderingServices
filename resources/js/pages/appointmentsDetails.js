/**
 * Calendar Details view handler for myAppointments page
 */

import { daysInMonth, formatDate, getFirstDayOfMonth, formatFullDate } from '../utils/dateUtils.js';
import { getAppointmentsForDate } from '../utils/appointmentUtils.js';
import { getTodayInfo } from '../utils/todayUtils.js';

const info = getTodayInfo();
let currentYear = info.year;
let currentMonth = info.monthNumber - 1;
let currentDay = info.day;
let currentDayNumber = info.dayNumber;
let timeIndicatorInterval = null;

/**
 * Calculate the position of the time indicator based on current time
 * @param {number} fromHour
 * @param {number} toHour
 * @returns {number} Position in pixels from the top
 */
function calculateTimeIndicatorPosition(fromHour, toHour) {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    // If current time is outside the range, return -1 to hide the indicator
    if (currentHour < fromHour || currentHour > toHour) {
        return -1;
    }
    
    // Calculate position: (hours passed + minutes fraction) * height per hour
    const hoursPassed = currentHour - fromHour + currentMinutes / 60;
    const slotHeight = 100;
    return hoursPassed * slotHeight;
}

/**
 * Update the position of the time indicator
 * @param {HTMLElement} indicator
 * @param {number} fromHour
 * @param {number} toHour
 */
function updateTimeIndicator(indicator, fromHour, toHour) {
    const position = calculateTimeIndicatorPosition(fromHour, toHour);
    
    if (position < 0) {
        indicator.style.display = 'none';
    } else {
        indicator.style.display = 'block';
        indicator.style.transform = `translateY(${position}px)`;
    }
}

/**
 * Generate and render the details for selected day
 * @param {number} year
 * @param {number} month - 0-indexed
 * @param {number} day
 */
export function generateDetails(date, fromHour, toHour) {
    const container = document.getElementById('calendarDetails');
    if (!container) {
        console.warn('[calendarDetails] #calendarDetails not found');
        return;
    }

    // Clear any existing time indicator interval
    if (timeIndicatorInterval) {
        clearInterval(timeIndicatorInterval);
    }

    container.innerHTML = '';

    console.log(date);

    //append date of the selected day
    const containerDate = document.createElement('div');
    containerDate.textContent = formatFullDate(date);
    containerDate.className = 'calendar-details-date';
    container.appendChild(containerDate);

    //append number of appointments of the selected day
    const appointmentsCountDate = document.createElement('div');
    appointmentsCountDate.textContent = '[ 0 ] Appointments for this day' // will fetch this shit later
    appointmentsCountDate.className = 'calendar-details-summary';
    container.appendChild(appointmentsCountDate);

    //append time range of the selected day
    const containerTimeContent = document.createElement('div');
    containerTimeContent.className = 'calendar-details-content';

    for (let hour = fromHour; hour <= toHour; hour++) {
        const timeSlot = document.createElement('div');
        timeSlot.className = 'calendar-details-time-slot';

        const timeSlotTime = document.createElement('div');
        timeSlotTime.textContent = `${String(hour).padStart(2, '0')}:00`;
        timeSlotTime.className = 'calendar-details-time-slot-time';
        timeSlot.appendChild(timeSlotTime);

        const timeSlotContent = document.createElement('div');
        timeSlotContent.className = 'calendar-details-time-slot-content';
        timeSlot.appendChild(timeSlotContent);

        containerTimeContent.appendChild(timeSlot);
    }

    // LINE INDICATING CURRENT TIME
    const timeIndicator = document.createElement('div');
    timeIndicator.className = 'calendar-details-time-indicator';
    containerTimeContent.appendChild(timeIndicator);

    container.appendChild(containerTimeContent);  /* TODO: ROZBIUTA KKTINA */

    updateTimeIndicator(timeIndicator, fromHour, toHour);
    timeIndicatorInterval = setInterval(() => {
        updateTimeIndicator(timeIndicator, fromHour, toHour);
    }, 60000); // 1min

    

    /*

    const firstDayWeek = getFirstDayOfMonth(year, month);
    const totalDays = daysInMonth(year, month);

    const calendar = document.createElement('div');
    calendar.className = 'calendar-grid';

    // Weekday header
    ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].forEach(d => {
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
        if (number.textContent == currentDayNumber && month == info.monthNumber - 1 && year == info.year) {
            dayDiv.classList.add('active-cell');
            number.classList.add('active-day-number');
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
    */
}

/**
 * Update year display
 */
// export function updateYearDisplay() {
//     const yearSpan = document.getElementById('currentYear');
//     if (yearSpan) {
//         yearSpan.textContent = currentYear;
//     }
// }

/**
 * Initialize calendar view with event listeners
 */
// export function initCalendarView(appointments) {
//     console.log(appointments);
//     // Year navigation
//     const prevYearBtn = document.getElementById('prevYear');
//     const nextYearBtn = document.getElementById('nextYear');

//     if (prevYearBtn) {
//         prevYearBtn.addEventListener('click', () => {
//             currentYear--;
//             updateYearDisplay();
//             generateCalendar(currentYear, currentMonth);
//         });
//     }

//     if (nextYearBtn) {
//         nextYearBtn.addEventListener('click', () => {
//             currentYear++;
//             updateYearDisplay();
//             generateCalendar(currentYear, currentMonth);
//         });
//     }

//     // Month buttons
//     const monthButtons = document.querySelectorAll('.month-button');
//     monthButtons.forEach((btn, index) => {
//         btn.addEventListener('click', () => {
//             currentMonth = index;
//             monthButtons.forEach(b => b.classList.remove('active-month'));
//             btn.classList.add('active-month');
//             generateCalendar(currentYear, currentMonth);
//         });
//     });

//     // Initial render
//     generateCalendar(currentYear, currentMonth);

//     const monthsContainer = document.getElementById("monthsContainer");
//     const buttons = monthsContainer.children;
//     if (buttons[currentMonth]) {
//         buttons[currentMonth].classList.add("active-month");
//     }

//     updateYearDisplay();
// }
