/*
 * Dropdown Plugin
 */

import plugin from '../core/plugin';

export default class Dropdown {

	constructor(element, options) {

		const $element = $(element);
		const $target = $element.find('.dropdown-menu');

		$(window).on('click', event => {

			let eventTarget = $(event.target);
			let dropdownMenu = $element.find('.dropdown-menu');

			if (eventTarget.hasClass('dropdown-toggle') || eventTarget.parents().hasClass('dropdown-toggle')) {
				event.preventDefault();
				$target.toggle();
			} else {
				$target.hide();
			}
		});
	}
}

Dropdown.DEFAULTS = {};

plugin('Dropdown', Dropdown);