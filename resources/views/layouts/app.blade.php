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

    <!-- Lineicons CSS -->
    <link rel="stylesheet" href="https://cdn.lineicons.com/3.0/lineicons.css">

    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>

<div class="base-header">
    <div class="container">

        <a href="/" class="logo">BEX<span>O</span>RA</a>

        <div class="controls">
            <div class="notifications-menu" id="notificationsMenu">
                <i class="lni lni-alarm"></i>
            </div>

            <div class="menu-content hidden" id="notificationsMenuContent">
                <h3 class="menu-title">Notifications</h3>
                <div class="menu-item">
                    <div class="notigication-list">
                        <!-- Will be loaded by js -->
                        You have no new notifications.
                    </div>
                </div>
            </div>

            <div class="settings-menu" id="settingsMenu">
                <i class="lni lni-cog"></i>
            </div>

            <div class="menu-content hidden" id="settingsMenuContent">
                <h3 class="menu-title">Settings</h3>
                <div class="menu-item">
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
                    <div class="profile-card">
                        <div class="profile-icon">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div class="profile-info">
                            <div class="profile-name">Guest User</div>
                            <div class="profile-role">Client<div>
                        </div>
                    </div>
                </button>
            </div>

            <div class="menu-content hidden" id="profileMenuContent">
                <h3 class="menu-title">Profile</h3>
                <div class="menu-item">
                    <div class="title">Actions</div>
                    <div class="divider"></div>
                    <div class="options">
                        <div class="option" id="lightModeOption">
                            <a href="/profile">My Profile</a>
                        </div>
                        <div class="option" id="darkModeOption">
                            <form method="POST" action="/logout">
                                @csrf
                                <button type="submit">Logout</button>
                            </form>
                        </div>
                    </div>
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
