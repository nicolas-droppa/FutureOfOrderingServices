@extends('layouts.app')

@section('title', 'Bexora | Book a Service')

@section('content')
<div class="my-appointments-container">

    <div class="buttons">
        <button id="showCalendar" class="button-choice">Calendar</button>
        <button id="showList" class="button-choice">List</button>
    </div>

    <div id="calendarView" class="calendar-view">
        <div id="calendarContainer"></div>
    </div>

    <div id="listView" class="calendar-view hidden">
        <h2 class="text-xl font-semibold mb-2">Appointments List</h2>
        <ul class="space-y-2">
            <li class="p-2 border rounded">
                <strong>2025-03-20:</strong> Haircut<br>
                Provider: Barber Pro<br>
                Location: Downtown Barber Shop
            </li>
            <li class="p-2 border rounded">
                <strong>2025-03-25:</strong> Beard Trim<br>
                Provider: Barber Pro<br>
                Location: At Home Service
            </li>
            <li class="p-2 border rounded">
                <strong>2025-02-10:</strong> Full Styling<br>
                Provider: Luxury Studio<br>
                Location: Online Consultation
            </li>
        </ul>
    </div>
</div>

<script>
const appointments = [
    { date: '20.03.2025', title: 'Haircut', duration: 60 },
    { date: '25.03.2025', title: 'Beard Trim', duration: 30 },
    { date: '10.02.2025', title: 'Full Styling', duration: 90 },
];

function daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function formatDate(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}.${m}.${y}`;
}

function generateCalendar(year, month) {
    const container = document.getElementById('calendarContainer');
    container.innerHTML = ''; // Clear previous

    const firstDayWeek = new Date(year, month, 1).getDay(); // 0 = Sunday
    const totalDays = daysInMonth(year, month);

    const grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(7, 1fr)';
    grid.style.gap = '5px';

    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => {
        const header = document.createElement('div');
        header.textContent = d;
        header.style.fontWeight = 'bold';
        header.style.textAlign = 'center';
        grid.appendChild(header);
    });

    for(let i = 0; i < firstDayWeek; i++) {
        const empty = document.createElement('div');
        grid.appendChild(empty);
    }

    for(let day = 1; day <= totalDays; day++) {
        const dateStr = formatDate(new Date(year, month, day));
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        dayDiv.style.padding = '10px';
        dayDiv.style.border = '1px solid #ccc';
        dayDiv.style.textAlign = 'center';

        const dayAppointments = appointments.filter(a => a.date === dateStr);
        if(dayAppointments.length > 0) {
            dayDiv.style.backgroundColor = '#90cdf4';
            dayDiv.title = dayAppointments.map(a => `${a.title} (${a.duration} min)`).join('\n');
        }

        grid.appendChild(dayDiv);
    }

    container.appendChild(grid);
}


generateCalendar(2025, 2);
</script>

@endsection
