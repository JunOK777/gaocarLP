$(function() {
    $('.nav-button').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.nav-button').removeClass('active');
        }
    });
});


$(function() {
    $('#open-button').on('click', function() {
    	$(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.nav-button').removeClass('active');
        }
    });
});
