document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    // Function to toggle the menu
    function toggleMenu() {
        if (menuLinks && hamburgerIcon) {
            menuLinks.classList.toggle('open');      // Toggles the visibility of the menu links
            hamburgerIcon.classList.toggle('open');  // Toggles the hamburger icon to an "X"
        }
    }

    // Add event listener to the hamburger icon
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleMenu);
    }

    // Close the menu when a link is clicked (useful for one-page sites)
    if (menuLinks) {
        menuLinks.addEventListener('click', function (event) {
            if (event.target.tagName === 'A') {
                menuLinks.classList.remove('open');     // Hide the menu
                hamburgerIcon.classList.remove('open'); // Return the hamburger icon to its default state
            }
        });
    }
});

    
            
        