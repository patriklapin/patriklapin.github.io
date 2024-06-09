function toggleMenu() {
    var menu = document.getElementById('menu-list');
    menu.classList.toggle('collapsed');
}

$(document).ready(function () {
    // Smooth scrolling for internal links with offset
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - $('nav').outerHeight()
            }, 1000);

            // Close the menu after clicking a link (for smaller screens)
            var menu = document.getElementById('menu-list');
            menu.classList.add('collapsed');
        }
    });

    // Toggle the menu when clicking the menu icon
    $('.menu-icon').on('click', function() {
        toggleMenu();
    });
});
