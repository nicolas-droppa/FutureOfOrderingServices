@extends('layouts.app')

@section('title', 'Bexora | Book a Service')

@section('content')
<div class="welcome-container">
    <div class="welcome-card">
        <h1>Book an appointment.</h1>
        <input type="text" placeholder="Reservation for a beard trim on Friday at 15:00.">
    </div>

    <div class="welcome-buttons">
        <a href="/manualBooking" class="button button-primary">
            <h2 class="title">Manual booking</h2>
            <p class="description">Book your appointments manually with standard selection.</p>
            <div class="icon"><i class="fa-solid fa-filter"></i></div>
        </a>
        <a href="/myAppointments" class="button button-secondary">
            <h2 class="title">My appointments</h2>
            <p class="description">Manage all your appointments from one place with ease.</p>
            <div class="icon"><i class="fa-solid fa-calendar"></i></div>
        </a>
    </div>
</div>
@endsection