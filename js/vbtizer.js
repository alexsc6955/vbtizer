;(function($, doc, win) {

	function Dorpdown(el, opts) {
		this.elmt = $(el);
		this.opts = opts;

		this.win = win;

		this.dropdown = this.elmt.find('.dropdown-togle');
		this.target = this.elmt.find('.dropdown-menu');

		this.init();
	}

	Dorpdown.prototype.init = function() {

		var self = this;

		$(win).on('click', function(e) {

			var target = $(e.target);

			if (target.hasClass('dropdown-togle') || target.parents().hasClass('dropdown-togle')) {
				e.preventDefault();
				self.target.toggle();
			} else {
				self.target.hide();
			}

		});

	};

	$.fn.widget = function(opts) {
		return this.each(function() {
			new Dorpdown(this, opts);
		});
	};

})(jQuery, document, window);

$('.dropdown').widget();