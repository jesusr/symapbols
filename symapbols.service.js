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


    this.get = get;
    this.setOptions = setOptions;


    // function setOptions(opt) {

    // }

    function get(i) {
      return symbols[i];
    }
  }
})();

