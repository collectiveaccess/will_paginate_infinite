jQuery(function() {
  if ($('.infinite-pagination').size() > 0) {
    $(window).on('scroll', function() {
      var more_posts_url = $('.infinite-pagination a.next_page').attr('href');
      var bottom_distance = 20;

      if (more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - bottom_distance) {
        $('.infinite-pagination-message').html('<i class="fa fa-cog fa-spin fa-2x fa-fw"></i> Loading...');
        $.getScript(more_posts_url, function(e) {
        	$('.infinite-pagination-message').html('');
        });
      }
    });
  }
});
