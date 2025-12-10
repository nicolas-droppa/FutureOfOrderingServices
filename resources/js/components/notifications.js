function initNotificationsMenu() {
    const notificationsMenu = document.getElementById('notificationsMenu');
    const notificationsMenuContent = document.getElementById('notificationsMenuContent');
    const settingsOverlay = document.getElementById('settingsOverlay');

    if (!notificationsMenu || !notificationsMenuContent) {
        console.warn('Notifications menu elements not found');
        return;
    }

    // Hover icon to show menu
    notificationsMenu.addEventListener('mouseenter', () => {
        notificationsMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');
    });

    notificationsMenuContent.addEventListener('mouseenter', () => {
        notificationsMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');
    });

    // Hide menu when mouse leaves
    notificationsMenu.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!notificationsMenuContent.matches(':hover')) {
                notificationsMenuContent.classList.add('hidden');
                settingsOverlay?.classList.add('hidden');
            }
        }, 100);
    });

    notificationsMenuContent.addEventListener('mouseleave', () => {
        notificationsMenuContent.classList.add('hidden');
        settingsOverlay?.classList.add('hidden');
    });

    // Close when clicking overlay
    if (settingsOverlay) {
        settingsOverlay.addEventListener('click', () => {
            notificationsMenuContent.classList.add('hidden');
            settingsOverlay.classList.add('hidden');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNotificationsMenu);
} else {
    initNotificationsMenu();
}