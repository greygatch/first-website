//Makes images change size when cursor hovers over 'em.
$(document).ready(function() {
    $(".panel").mouseenter(function() {
        $(this).animate({
            height: '+=3px',
            width: '+=3px'
        }, "fast");
    });

    $(".panel").mouseleave(function() {
        $(this).animate( {
            height: '-=3px',
            width: '-=3px'
        }, "fast");
    });
});
