(function (window, $) {
			"use strict";

			$.fn.Dotify = function (opts) {

				// @extend : merge default and user parameters
				opts = $.extend( {addTxt : "...", limitNum : 20}, opts || {} ) ;

				// @each   : traverse all nodes
				// @return : allow jQuery chaining
				return this.each(function (value, index) {

					var $el = $(this);

					if( $el.text().length > opts.limitNum ) {

						var inputTxt = $el.text().slice(0, opts.limitNum);

						$el.text(inputTxt + opts.addTxt);
					} else {
						
						return false;
					}
				}); 
			};
		}(window, jQuery));
