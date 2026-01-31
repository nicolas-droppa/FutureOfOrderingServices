@extends('layouts.app')

@section('title', 'Bexora | Book a Service')

@section('content')
<div class="my-appointments-container">

    <div id="todayDisplay" style="margin-bottom: 1rem; font-size: 0.95rem; color: #666;"></div>

    <div class="buttons">
        <button id="showCalendar" class="button-choice">Calendar</button>
        <button id="showList" class="button-choice">List</button>
    </div>

    <div id="calendarView" class="calendar-view">
        <div class="calendar-controls">
            <div class="year-container">
                <button class="year-button" id="prevYear">&lt;</button>
                <span id="currentYear">2025</span>
                <button class="year-button" id="nextYear">&gt;</button>
            </div>
            <div class="months-container" id="monthsContainer">
                <button class="month-button" id="buttonJanuary"><div class="month-name">January</div> <div class="month-appointment-count" id="januaryAppointmentCount">6</div></button>
                <button class="month-button" id="buttonFebruary"><div class="month-name">February</div> <div class="month-appointment-count" id="februaryAppointmentCount">2</div></button>
                <button class="month-button" id="buttonMarch"><div class="month-name">March</div> <div class="month-appointment-count" id="marchAppointmentCount">0</div></button>
                <button class="month-button" id="buttonApril"><div class="month-name">April</div> <div class="month-appointment-count" id="aprilAppointmentCount">0</div></button>
                <button class="month-button" id="buttonMay"><div class="month-name">May</div> <div class="month-appointment-count" id="mayAppointmentCount">1</div></button>
                <button class="month-button" id="buttonJune"><div class="month-name">June</div> <div class="month-appointment-count" id="juneAppointmentCount">4</div></button>
                <button class="month-button" id="buttonJuly"><div class="month-name">July</div> <div class="month-appointment-count" id="julyAppointmentCount">0</div></button>
                <button class="month-button" id="buttonAugust"><div class="month-name">August</div> <div class="month-appointment-count" id="augustAppointmentCount">2</div></button>
                <button class="month-button" id="buttonSeptember"><div class="month-name">September</div> <div class="month-appointment-count" id="septemberAppointmentCount">0</div></button>
                <button class="month-button" id="buttonOctober"><div class="month-name">October</div> <div class="month-appointment-count" id="octoberAppointmentCount">0</div></button>
                <button class="month-button" id="buttonNovember"><div class="month-name">November</div> <div class="month-appointment-count" id="novemberAppointmentCount">6</div></button>
                <button class="month-button" id="buttonDecember"><div class="month-name">December</div> <div class="month-appointment-count" id="decemberAppointmentCount">1</div></button>
            </div>
        </div>
        <div id="calendarContainer"></div>
        <div class="calendar-details" id="calendarDetails">
            <div class="calendar-details-title">
                <div class="calendar-details-title-date">
                    Saturday, January 31, 2026
                </div>
            </div>

            <div class="calendar-details-summary">
                [ 0 ] Appointments for this day
            </div>

            <div class="calendar-details-content">
                
            </div>
        </div>
    </div>

    <div id="listView" class="list-view hidden">
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

@vite('resources/js/pages/myAppointmentsEntry.js')


@endsection
