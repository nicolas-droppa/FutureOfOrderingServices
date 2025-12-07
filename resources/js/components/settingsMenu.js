import { setTheme } from './themeToggler.js';
import { DARK_MODE_STORAGE_KEY } from './constants.js';

function initsettingsMenu() {
    const settingsMenu = document.getElementById('settingsMenu');
    const settingsMenuContent = document.getElementById('settingsMenuContent');
    const settingsOverlay = document.getElementById('settingsOverlay');

    console.log('settingsMenu:', settingsMenu);
    console.log('settingsMenuContent:', settingsMenuContent);
    
    if (!settingsMenu || !settingsMenuContent) {
        console.warn('Settings menu elements not found');
        return;
    }
    
    settingsMenu.addEventListener('mouseenter', () => {
        console.log('Hovered settings menu!');
        settingsMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');
    });
    
    settingsMenuContent.addEventListener('mouseenter', () => {
        settingsMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');
    });
    
    settingsMenu.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!settingsMenuContent.matches(':hover')) {
                settingsMenuContent.classList.add('hidden');
                settingsOverlay?.classList.add('hidden');
            }
        }, 100);
    });
    
    settingsMenuContent.addEventListener('mouseleave', () => {
        console.log('Left settings menu content');
        settingsMenuContent.classList.add('hidden');
        settingsOverlay?.classList.add('hidden');
    });

    // Close when clicking overlay
    if (settingsOverlay) {
        settingsOverlay.addEventListener('click', () => {
            settingsMenuContent.classList.add('hidden');
            settingsOverlay.classList.add('hidden');
        });
    }

    // Theme option buttons
    const lightOpt = document.getElementById('lightModeOption');
    const darkOpt = document.getElementById('darkModeOption');
    const systemOpt = document.getElementById('systemModeOption');

    if (lightOpt) {
        lightOpt.addEventListener('click', () => {
            setTheme('light');
            updateActiveVisual();
        });
    }
    if (darkOpt) {
        darkOpt.addEventListener('click', () => {
            setTheme('dark');
            updateActiveVisual();
        });
    }
    if (systemOpt) {
        systemOpt.addEventListener('click', () => {
            setTheme('system');
            updateActiveVisual();
        });
    }

    function updateActiveVisual() {
        const pref = localStorage.getItem(DARK_MODE_STORAGE_KEY);

        // clear all
        [lightOpt, darkOpt, systemOpt].forEach((el) => { if (el) el.classList.remove('toggled'); });

        if (pref === 'enabled') {
            darkOpt?.classList.add('toggled');
            return;
        }

        if (pref === 'disabled') {
            lightOpt?.classList.add('toggled');
            return;
        }

        // no stored pref -> use system
        systemOpt?.classList.add('toggled');
    }

    updateActiveVisual();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initsettingsMenu);
} else {
    initsettingsMenu();
}