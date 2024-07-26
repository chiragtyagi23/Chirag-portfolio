// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-btn';
    menuButton.innerText = '☰';
    document.querySelector('nav').insertBefore(menuButton, document.querySelector('nav').firstChild);

    const navLinks = document.querySelector('nav ul');
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Hide menu on link click (for single-page applications)
    navLinks.addEventListener('click', function() {
        navLinks.classList.remove('show');
    });


});


document.addEventListener('DOMContentLoaded', function() {
    function updateBackgroundSize() {
        var headers = document.getElementsByClassName('headers');

        if (window.innerWidth < 768) {
            Array.prototype.forEach.call(headers, function(header) {
                header.style.backgroundSize = 'contain';
                header.style.backgroundRepeat = 'no-repeat';
                header.style.height = '40vh'; // Optional: adjust height for smaller screens
            });
        } else {
            Array.prototype.forEach.call(headers, function(header) {
                header.style.backgroundSize = 'cover';
                header.style.backgroundRepeat = 'no-repeat';
                header.style.height = '80vh'; // Reset height if needed
            });
        }
    }

    // Initial check
    updateBackgroundSize();

    // Check on resize
    window.addEventListener('resize', updateBackgroundSize);
});


