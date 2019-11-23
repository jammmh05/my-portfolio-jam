import { Component, OnInit } from '@angular/core';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.scss']
})
export class FrontLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.smooth_scroll();
  }

  smooth_scroll(): void
	{
		var sections = $('section')
		, nav = $('navbar-nav')
		, nav_height = nav.outerHeight();

		$(window).on('scroll', function () {
			var cur_pos = $(this).scrollTop();

			sections.each(function() {
				var top = $(this).offset().top - nav_height,
					bottom = top + $(this).outerHeight();

				if (cur_pos >= top && cur_pos <= bottom) {
					nav.find('a').removeClass('active');
					sections.removeClass('active');

					$(this).addClass('active');
					nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
				}
			});
    });

		// nav.find('a').on('click', function () {
		// 	var $el = $(this)
		// 		, id = $el.attr('href');

		// 	$('html, body').animate({
		// 		scrollTop: $(id).offset().top - nav_height
		// 	}, 1000);

		// 	return false;
		// });

		// Select all links with hashes
		$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function() {
					// Callback after animation
					// Must change focus!
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
					return false;
					} else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
					};
				});
				}
			}
		});
	}

}
