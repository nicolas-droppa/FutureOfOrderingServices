@extends('layouts.app')

@section('title', 'Domov')

@section('content')
<div class="welcome-container">
    <div class="welcome-card">
        <h1>Book an appointment.</h1>
        <input type="text" placeholder="Reservation for a beard trim on Friday at 15:00.">
    </div>

    <div class="welcome-buttons">
        <a href="/manualBooking" class="button button-primary">Manual booking</a>
        <a href="/myAppointments" class="button button-secondary">My appointments</a>
    </div>
</div>
@endsection