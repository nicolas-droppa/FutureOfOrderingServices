<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Domov')</title>
    <!-- Font Awesome (CDN) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Material Icons (Google Fonts) -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

<header>
    <div class="container">

        <a href="/" class="logo">BEX<span>O</span>RA</a>

        <div class="controls">

            <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
                <!-- Icon loaded from: js/components/themeToggler.js -->
            </button>

            <div class="profile">
                <button id="profileButton" class="profile-button">
                    <i class="fa-solid fa-user"></i> Hi, Guest
                </button>

                <div id="profileMenu" class="profile-menu hidden">
                    <a href="/profile">Profile</a>
                    <form method="POST" action="/logout">
                        @csrf
                        <button type="submit">Odhlásiť sa</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</header>

<main class="main">
    @yield('content')
</main>

<footer class="footer">
    © 2025 BEXORA
</footer>

</body>
</html>
