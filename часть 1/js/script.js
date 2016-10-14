 // alert ('this is script.js file');
$(function () {
    var $tabs = $('.tab a');
    $tabs.on('click', function(e) {
        e.preventDefault();
        $('.tabs-menu .first').removeClass('first');
        $(this).addClass('first');
        var tab = $(this).attr('href');
        $('.tab-text').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
});
