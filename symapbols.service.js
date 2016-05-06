(function() {
    'use strict';

    angular
        .module('symapbols')
        .service('$symapbols', Service);

    function Service() {
        this.opt = {};
        this.symbols = {
            'three-points': [{
                'type': 'rect',
                'x': '110',
                'y': '220',
                'width': '70',
                'height': '70'
            }, {
                'type': 'rect',
                'x': '110',
                'y': '110',
                'width': '70',
                'height': '70'
            }, {
                'type': 'rect',
                'x': '110',
                'width': '70',
                'height': '70'
            }]
        };


        this.svg = svg;
        this.setOptions = setOptions;


        // function setOptions(opt) {

        // }

        function svg(i) {
            var internal = [],
                data = symbols[i],
                svg = '<svg width="1.2em" height="1.2em" fill="#000" viewBox="0 0 300 300">';
            for (var i = data.length - 1; i >= 0; i--) {
                svg += '<' + data[i].type;
                svg += data[i].x ? ' x="' + data[i].x + '"' : '';
                svg += data[i].y ? ' y="' + data[i].y + '"' : '';
                svg += data[i].width ? ' width="' + data[i].width + '"' : '';
                svg += data[i].height ? ' height="' + data[i].height + '"' : '';
                svg += data[i].d ? ' d="' + data[i].d + '"' : '';
                svg += '/>'
            }
            svg += '</svg>';
            return svg;
        }
    }
})();
