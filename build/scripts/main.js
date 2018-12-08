var LP = (function($){
    'use strict';

    return {
        init : function() {
            var $module = $('[data-id=module]');
            $module.click(function(e){
                var $element = $(e.currentTarget);
                console.log(e);
                $module.removeClass('active');
                $element.addClass('active');
            })
        }
    }
})(jQuery);


$(function() {
    LP.init();
});



