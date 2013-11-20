// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
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

// Place any jQuery/helper plugins in here.
$(document).bind('pagechange', function(e, data){

    // se inicia cada vez que aparece una página

    var activePage = $('div.ui-page-active'),
        fromPage = data.options.fromPage || $(),
        idPage = '#' + activePage.attr('id'),
        link = data.options.link;


    if ( idPage === '#gallery-page' ) {
        $('#owl-slider').owlCarousel();
    }

    if ( idPage === '#location-page' ) {
        var canvas = document.getElementById('map-canvas');
        var options = {
            center: new google.maps.LatLng(21.013368,-89.634104),
            navigationControl: true,
            mapTypeControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 16
        };
        var map = new google.maps.Map( canvas, options  );
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(21.013368,-89.634104),
            map: map,
            title: 'Cocina de Michi'
        });
    }

});