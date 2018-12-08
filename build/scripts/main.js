var LP = (function($){
    'use strict';

    return {
        init : function() {
            var $module = $('[data-id="module"]');
            var $body = $('[data-id="container"]');
            var $bgClick = $('[data-id="bg"]');
            $bgClick.click(function(e) {
                e.preventDefault();
                $body.toggleClass('lp');
            });
            $module.click(function(e){
                var $element = $(e.currentTarget);
                $module.removeClass('active');
                $element.addClass('active');
            });
        }
    }
})(jQuery);


$(function() {
    LP.init();
});



