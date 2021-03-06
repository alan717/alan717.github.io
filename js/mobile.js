(function($) {
    'use strict';
    if (window.matchMedia && $('.mobile-nav').length) {
        var mq = window.matchMedia('(max-width: 999px)');
        if (mq.matches) {
            $('.mobile-nav__cover, .mobile-nav__toggle').handle('click', function() {
                $('body').scroll().toggleClass('js-nav-open');
            });
            $('.mobile-nav__sheet').find('a').on('click', function() {
                $('body').removeClass('js-nav-open');
            });
        }
    }
}
)(u);
