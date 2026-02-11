/**
 * Calendar Details view handler for myAppointments page
 */

import { formatFullDate } from '../utils/dateUtils.js';
import { getTodayInfo } from '../utils/todayUtils.js';
import { getTimeInfo } from '../utils/timeUtils.js';
import { TIME_SLOT_HEIGHT } from '../components/constants.js';

const infoToday = getTodayInfo();
let timeIndicatorInterval = null;
let infoTime = getTimeInfo();

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

    container.appendChild(containerTimeContent);

    let totalHours = toHour - fromHour;  // time slot count... :)

    function updateTimeIndicator() {
        const infoTime = getTimeInfo();
        const currentTimeHour = infoTime.hours;
        const currentTimeMinutes = infoTime.minutes;

        let position =
            (TIME_SLOT_HEIGHT * (currentTimeHour - fromHour)) +
            (TIME_SLOT_HEIGHT * currentTimeMinutes / 60);

        if (currentTimeHour < fromHour) {
            position = 0;
        } else if (currentTimeHour >= toHour) {
            position = (TIME_SLOT_HEIGHT * totalHours ) - 0.125;
        }

        timeIndicator.style.top = `${position}rem`;
    }

    updateTimeIndicator();

    if (timeIndicatorInterval) {
        clearInterval(timeIndicatorInterval);
    }

    timeIndicatorInterval = setInterval(updateTimeIndicator, 1000);

}
