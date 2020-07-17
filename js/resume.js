(function($) {

    'use strict';

    $('.resume .detail .nav').on('click', 'li', function() {
        var selectedNav = $(this);
        selectedNav.addClass('active');
        selectedNav.siblings().each(function() {
            $(this).removeClass('active');
        });
    });

})(Elements);