$(document).ready(function() {
    const $dropdownToggle = $('.dropdown-toggle');
    const $dropdown = $('.dropdown');

    $dropdownToggle.on('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        $dropdown.toggleClass('active');
    });

    // Close the dropdown if the user clicks outside of it
    $(window).on('click', function(event) {
        if (!$dropdown.is(event.target) && $dropdown.has(event.target).length === 0) {
            $dropdown.removeClass('active');
        }
    });
});

// <!--시도 중-->
$(document).ready(function() {
    $(".dropdown-toggle").click(function() {
        $(".dropdown-menu").toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown-menu").hide();
        }
    });
});