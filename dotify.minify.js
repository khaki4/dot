!function(a,b){"use strict";b.fn.Dotify=function(a){return a=b.extend({addTxt:"...",limitNum:20},a||{}),this.each(function(c,d){var e=b(this);if(!(e.text().length>a.limitNum))return!1;var f=e.text().slice(0,a.limitNum);e.text(f+a.addTxt)})}}(window,jQuery);