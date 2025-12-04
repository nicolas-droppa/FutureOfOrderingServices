const btn = document.getElementById('profileButton');
const menu = document.getElementById('profileMenu');

if (btn && menu) {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
        console.log('[profileDropdown] profileButton clicked — menu now', menu.classList.contains('hidden') ? 'hidden' : 'visible');
    });

    document.addEventListener('click', (e) => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                console.log('[profileDropdown] clicked outside — menu hidden');
            }
        }
    });
} else {
    console.warn('[profileDropdown] Missing elements:', { btn, menu });
}