// jQuery(function() {
//   if ($('.infinite-pagination').length > 0) {
//     $('.results-pane').on('scroll', function() {
//       var more_posts_url = $(this).parent().find('.infinite-pagination a.next_page').attr('href');
//       var bottom_distance = 20;
//       
//       if (more_posts_url && $(this).scrollTop() > $(this).height() - $(this).height() - bottom_distance) {
//         $('.infinite-pagination').html('<div class="infinite-loading">Loading content</div>');
//         $('.infinite-pagination-message').html("<i class='fa fa-cog fa-spin fa-2x fa-fw'></i> Loading...");
//         $.getScript(more_posts_url, function(e) {
//         	$('.infinite-pagination-message').html("");
//         });
//       }
//     });
//   }
// });

function init_continuous_pagination(id) {
	let cid = id;
	if ($('#' + cid).parent().find('.infinite-pagination').length > 0) {
		$('#' + cid).on('scroll', function() {
			var more_posts_url = $(this).parent().find('.infinite-pagination a.next_page:first').attr('href');

			var scrollHeight = $(this).prop('scrollHeight');
			var scrollTop = $(this).scrollTop();
			var height = $(this).height();

			if (more_posts_url && ((height + scrollTop) >= scrollHeight)) {
				$(this).parent().find('.infinite-pagination a.next_page:first').remove();
				$('#' + cid).parent().find('.infinite-pagination-message').html('<i class="fa fa-cog fa-spin fa-2x fa-fw"></i> Loading...');
				$.getScript(more_posts_url, function(e) {
					$('#' + cid).parent().find(' .infinite-pagination-message').html('');
				});
			}
		});
	}
}