$(document).ready(function () {
    // Intercept form submission
    $('#reservationForm').submit(function (e) {
        // Prevent the default form submission
        e.preventDefault();

        var formData = $(this).serialize();

        // AJAX request
        $.ajax({
            type: 'POST',
            url: '../data/reservation.php',
            data: formData,
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    });
});