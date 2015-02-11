// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Top nav

$(document).ready(function() {
    var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
    $('#js-centered-navigation-menu').removeClass("show");

    menuToggle.on('click', function(e) {
        e.preventDefault();
        $('#js-centered-navigation-menu').slideToggle(function(){
            if($('#js-centered-navigation-menu').is(':hidden')) {
                $('#js-centered-navigation-menu').removeAttr('style');
            }
        });
    });
});

//scroll-on-page

(function (jQuery) {
    jQuery.mark = {
        jump: function (options) {
            var defaults = {
                selector: 'a.scroll-on-page-link'
            };
            if (typeof options == 'string') defaults.selector = options;
            var options = jQuery.extend(defaults, options);
            return jQuery(options.selector).click(function (e) {
                var jumpobj = jQuery(this);
                var target = jumpobj.attr('href');
                var thespeed = 1000;
                var offset = jQuery(target).offset().top;
                jQuery('html,body').animate({
                    scrollTop: offset
                }, thespeed, 'swing')
                e.preventDefault();
            })
        }
    }
})(jQuery);


jQuery(function(){
    jQuery.mark.jump();
});
