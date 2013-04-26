/**
 * Created with JetBrains PhpStorm.
 * User: tux
 * Date: 21.04.13
 * Time: 17:14
 * To change this template use File | Settings | File Templates.
 */



jQuery(document).ready(function() {
	var viewportHeight = window.innerHeight;


	jQuery(window).scroll(function() {
		var currentTopPosition = jQuery(window).scrollTop(),
			currentBottomPossition = currentTopPosition + viewportHeight;

//		console.log('scrolling window height:', viewportHeight, ' top:', currentTopPosition, ' bottom:', currentBottomPossition);

		$(".content-page").each(function() {
			var startPosition = $(this).position().top,
				endPosition = startPosition + $(this).height(),
				paddingOffset = 8,
				paddingParalax = 50;

			// paralactic scrolling of on content pages
			if (currentBottomPossition >= startPosition && currentTopPosition <= endPosition)
			{
				var pageContent = $(this).children("article"),
					paddingCalculated = ((startPosition-currentTopPosition) / viewportHeight * paddingParalax) + paddingOffset;

				pageContent.css('padding-top', paddingCalculated + 'rem' );
			}

			// holding and scrolling page header navigation
			var pageNavigation = $(this).children("header");
			if (currentTopPosition < startPosition) //(currentTopPosition >= startPosition-100 && currentTopPosition < startPosition)
			{
				pageNavigation.removeClass('fixed');
				pageNavigation.css('top', '0px');
			}
			else if (currentTopPosition >= startPosition && endPosition >= (currentBottomPossition-(viewportHeight/3)))
			{
				pageNavigation.addClass('fixed');
				pageNavigation.css('top', '0px');
			}
			else if (endPosition < (currentBottomPossition-(viewportHeight/3)))
			{
				var top = (endPosition-startPosition-(viewportHeight/3*2));
				pageNavigation.removeClass('fixed');
				pageNavigation.css('top', top + 'px');
			}

		})

	});
});
