function initNotificationsMenu() {
    const notificationsMenu = document.getElementById('notificationsMenu');
    const notificationsMenuContent = document.getElementById('notificationsMenuContent');
    const settingsOverlay = document.getElementById('settingsOverlay');

    if (!notificationsMenu || !notificationsMenuContent) {
        console.warn('Notifications menu elements not found');
        return;
    }

    let isHoveringButton = false;
    let isHoveringContent = false;

    function openMenu() {
        notificationsMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');
    }

    function closeMenu() {
        notificationsMenuContent.classList.add('hidden');
        settingsOverlay?.classList.add('hidden');
    }

    // Hover icon
    notificationsMenu.addEventListener('mouseenter', () => {
        isHoveringButton = true;
        openMenu();
    });
    notificationsMenu.addEventListener('mouseleave', () => {
        isHoveringButton = false;
        if (!isHoveringContent) closeMenu();
    });

    // Hover content
    notificationsMenuContent.addEventListener('mouseenter', () => {
        isHoveringContent = true;
        openMenu();
    });
    notificationsMenuContent.addEventListener('mouseleave', () => {
        isHoveringContent = false;
        if (!isHoveringButton) closeMenu();
    });

    // Close on overlay click
    settingsOverlay?.addEventListener('click', closeMenu);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNotificationsMenu);
} else {
    initNotificationsMenu();
}
