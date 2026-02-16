import { DARK_MODE_STORAGE_KEY } from './constants.js';

const body = document.body;
const buttons = document.querySelectorAll('.theme-btn');
const slider = document.getElementById('themeSlider');

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.remove('theme-dark');
        localStorage.setItem(DARK_MODE_STORAGE_KEY, 'disabled');
        return;
    }

    if (theme === 'dark') {
        body.classList.add('theme-dark');
        localStorage.setItem(DARK_MODE_STORAGE_KEY, 'enabled');
        return;
    }

    if (theme === 'system') {
        localStorage.removeItem(DARK_MODE_STORAGE_KEY);

        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) body.classList.add('theme-dark');
        else body.classList.remove('theme-dark');
    }
}

function moveSliderTo(theme) {
    const index = { light: 0, dark: 1, system: 2 }[theme] ?? 0;
    slider.style.transform = `translateX(${index * 100}%)`;
}

function loadInitialTheme() {
    const stored = localStorage.getItem(DARK_MODE_STORAGE_KEY);

    if (stored === 'enabled') {
        applyTheme('dark');
        moveSliderTo('dark');
        return;
    }
    if (stored === 'disabled') {
        applyTheme('light');
        moveSliderTo('light');
        return;
    }

    // default -> use system
    applyTheme('system');
    moveSliderTo('system');
}

loadInitialTheme();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.dataset.theme;
        applyTheme(theme);
        moveSliderTo(theme);
    });
});
