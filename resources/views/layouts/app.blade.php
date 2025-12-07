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

<div class="base-header">
    <div class="container">

        <a href="/" class="logo">BEX<span>O</span>RA</a>

        <div class="controls">
            <div class="settings-menu" id="settingsMenu">
                <i class="fa-solid fa-gear"></i>
            </div>
            <div class="settings-menu-content hidden" id="settingsMenuContent">
                <h3 class="setting-title">Settings</h3>
                <div class="setting-item">
                    <div class="title">Appearance</div>
                    <div class="divider"></div>
                    <div class="options">
                        <div class="option" id="lightModeOption">
                            <div class="background">
                                <div class="foreground">
                                    <div class="text">Aa</div>
                                </div>
                            </div>
                            <span><i class="fa-solid fa-circle"></i>Light</span>
                        </div>
                        <div class="option" id="darkModeOption">
                            <div class="background">
                                <div class="foreground">
                                    <div class="text">Aa</div>
                                </div>
                            </div>
                            <span><i class="fa-solid fa-circle"></i>Dark</span>
                        </div>
                        <div class="option" id="systemModeOption">
                            <div class="background-double">
                                <div class="background-left">
                                    <div class="foreground-left">
                                        <div class="text-left">Aa</div>
                                    </div>
                                </div>
                                <div class="background-right">
                                    <div class="foreground-right">
                                        <div class="text-left">Aa</div>
                                    </div>
                                </div>
                            </div>
                            <span><i class="fa-solid fa-circle"></i>System</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="profile">
                <button id="profileButton" class="profile-button">
                    <i class="fa-solid fa-user"></i> Hi, Guest
                </button>

                <div id="profileMenu" class="profile-menu hidden">
                    <a href="/profile">Profile</a>
                    <form method="POST" action="/logout">
                        @csrf
                        <button type="submit">Log-out</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>

<main class="main">
    @yield('content')
</main>

<footer class="footer">
    © 2025 BEXORA
</footer>

<div id="settingsOverlay" class="settings-overlay hidden"></div>

</body>
</html>
