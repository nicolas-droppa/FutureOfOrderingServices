function initProfileMenu() {
    const profileMenuBtn = document.getElementById('profileButton');
    const profileMenuContent = document.getElementById('profileMenuContent');
    const settingsOverlay = document.getElementById('settingsOverlay');

    // Hide notifications menu when settings is opened
    const notificationsMenu = document.getElementById('notificationsMenu');
    // Hide settings menu when settings is opened
    const settingsMenu = document.getElementById('settingsMenu');

    if (!profileMenuBtn || !profileMenuContent) {
        console.warn('Profile menu elements not found');
        return;
    }

    // Hover icon to show menu
    profileMenuBtn.addEventListener('mouseenter', () => {
        profileMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');

        // Hide other menus
        settingsMenu?.classList.add('hidden');
        notificationsMenu?.classList.add('hidden');
    });

    profileMenuContent.addEventListener('mouseenter', () => {
        profileMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');

        settingsMenu?.classList.add('hidden');
        notificationsMenu?.classList.add('hidden');
    });

    // Hide menu when mouse leaves
    profileMenuBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!profileMenuContent.matches(':hover')) {
                profileMenuContent.classList.add('hidden');
                settingsOverlay?.classList.add('hidden');

                settingsMenu?.classList.remove('hidden');
                notificationsMenu?.classList.remove('hidden');
            }
        }, 100);
    });

    profileMenuContent.addEventListener('mouseleave', () => {
        profileMenuContent.classList.add('hidden');
        settingsOverlay?.classList.add('hidden');
        
        settingsMenu?.classList.remove('hidden');
        notificationsMenu?.classList.remove('hidden');
    });

    // Close when clicking overlay
    if (settingsOverlay) {
        settingsOverlay.addEventListener('click', () => {
            profileMenuContent.classList.add('hidden');
            settingsOverlay.classList.add('hidden');

            settingsMenu?.classList.remove('hidden');
            notificationsMenu?.classList.remove('hidden');
        });
    }
}

// Init on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProfileMenu);
} else {
    initProfileMenu();
}
