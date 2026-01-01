/**
 * View toggle handler for myAppointments page
 * Switches between calendar and list views
 */

/**
 * Initialize view toggle buttons
 */
export function initViewToggle() {
    const showCalendarBtn = document.getElementById('showCalendar');
    const showListBtn = document.getElementById('showList');
    const calendarView = document.getElementById('calendarView');
    const listView = document.getElementById('listView');

    if (!showCalendarBtn || !showListBtn || !calendarView || !listView) {
        console.warn('[viewToggle] required elements not found');
        return;
    }

    showCalendarBtn.addEventListener('click', () => {
        calendarView.classList.remove('hidden');
        listView.classList.add('hidden');
        showCalendarBtn.classList.add('active');
        showListBtn.classList.remove('active');
    });

    showListBtn.addEventListener('click', () => {
        listView.classList.remove('hidden');
        calendarView.classList.add('hidden');
        showListBtn.classList.add('active');
        showCalendarBtn.classList.remove('active');
    });

    // Set initial state
    showCalendarBtn.classList.add('active');
}
