jQuery(document).ready(function() {
    $(function() {
        $('#defaultCountdown').countdown({ until: new Date(2024, 12, 31, 8) }); // year, month, date, hour
    });
});