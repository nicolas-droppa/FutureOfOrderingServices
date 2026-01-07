function initProfileMenu() {
    const profileMenuBtn = document.getElementById('profileButton');
    const profileMenuContent = document.getElementById('profileMenuContent');
    const settingsOverlay = document.getElementById('settingsOverlay');
    const notificationsMenu = document.getElementById('notificationsMenu');

    // Animate profile menu appearance
    const profileInfo = document.getElementById('profileInfo');
    const profileIcon = document.getElementById('profileIcon');

    if (!profileMenuBtn || !profileMenuContent) {
        console.warn('Profile menu elements not found');
        return;
    }

    // Hover icon to show menu
    profileMenuBtn.addEventListener('mouseenter', () => {
        profileMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');

        profileInfo?.classList.add('profile-wanish');
        profileIcon?.classList.add('profile-move-icon');

        notificationsMenu?.classList.add('hidden');
    });

    // Hover icon to show menu
    profileMenuContent.addEventListener('mouseenter', () => {
        profileMenuContent.classList.remove('hidden');
        settingsOverlay?.classList.remove('hidden');

        profileInfo?.classList.add('profile-wanish');
        profileIcon?.classList.add('profile-move-icon');

        notificationsMenu?.classList.add('hidden');
    });

    // Hide menu when mouse leaves
    profileMenuBtn.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!profileMenuContent.matches(':hover')) {
                profileMenuContent.classList.add('hidden');
                settingsOverlay?.classList.add('hidden');

                profileInfo?.classList.remove('profile-wanish');
                profileIcon?.classList.remove('profile-move-icon');

                notificationsMenu?.classList.remove('hidden');
            }
        }, 100);
    });

    // Hide menu when mouse leaves
    profileMenuContent.addEventListener('mouseleave', () => {
        profileMenuContent.classList.add('hidden');
        settingsOverlay?.classList.add('hidden');

        profileInfo?.classList.remove('profile-wanish');
        profileIcon?.classList.remove('profile-move-icon');
        
        notificationsMenu?.classList.remove('hidden');
    });

    // Close when clicking overlay
    if (settingsOverlay) {
        settingsOverlay.addEventListener('click', () => {
            profileMenuContent.classList.add('hidden');
            settingsOverlay.classList.add('hidden');

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
