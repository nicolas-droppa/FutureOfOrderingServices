@extends('layouts.app')

@section('title', 'Domov')

@section('content')
<div class="welcome-container">
    <div class="welcome-card">
        <h1>Book an appointment.</h1>
        <input 
            type="text" 
            placeholder="Vyhľadať..." 
            style="
                padding: 12px 20px;
                font-size: 16px;
                border: 1px solid #ddd;
                border-radius: 4px;
                width: 400px;
                max-width: 90%;
            "
        >
    </div>
</div>
@endsection