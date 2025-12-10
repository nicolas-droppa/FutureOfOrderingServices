import { setTheme } from './themeToggler.js';
import { DARK_MODE_STORAGE_KEY } from './constants.js';

function initsettingsMenu() {
    const settingsMenu = document.getElementById('settingsMenu');
    const settingsMenuContent = document.getElementById('settingsMenuContent');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const notificationsMenu = document.getElementById('notificationsMenu');

    if (!settingsMenu || !settingsMenuContent) return;

    let isHoveringButton = false;
    let isHoveringContent = false;

    function openMenu() {
        settingsMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');
        notificationsMenu?.classList.add('hidden');
    }

    function closeMenu() {
        settingsMenuContent.classList.add('hidden');
        settingsOverlay?.classList.add('hidden');
        notificationsMenu?.classList.remove('hidden');
    }

    // Button hover
    settingsMenu.addEventListener('mouseenter', () => {
        isHoveringButton = true;
        openMenu();
    });
    settingsMenu.addEventListener('mouseleave', () => {
        isHoveringButton = false;
        if (!isHoveringContent) closeMenu();
    });

    // Content hover
    settingsMenuContent.addEventListener('mouseenter', () => {
        isHoveringContent = true;
        openMenu();
    });
    settingsMenuContent.addEventListener('mouseleave', () => {
        isHoveringContent = false;
        if (!isHoveringButton) closeMenu();
    });

    // Close on overlay click
    settingsOverlay?.addEventListener('click', closeMenu);

    // Theme buttons
    const lightOpt = document.getElementById('lightModeOption');
    const darkOpt = document.getElementById('darkModeOption');
    const systemOpt = document.getElementById('systemModeOption');

    function updateActiveVisual() {
        const pref = localStorage.getItem(DARK_MODE_STORAGE_KEY);
        [lightOpt, darkOpt, systemOpt].forEach(el => el?.classList.remove('toggled'));

        if (pref === 'enabled') darkOpt?.classList.add('toggled');
        else if (pref === 'disabled') lightOpt?.classList.add('toggled');
        else systemOpt?.classList.add('toggled');
    }

    lightOpt?.addEventListener('click', () => { setTheme('light'); updateActiveVisual(); });
    darkOpt?.addEventListener('click', () => { setTheme('dark'); updateActiveVisual(); });
    systemOpt?.addEventListener('click', () => { setTheme('system'); updateActiveVisual(); });

    updateActiveVisual();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initsettingsMenu);
} else {
    initsettingsMenu();
}