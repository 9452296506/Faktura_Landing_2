jQuery(document).ready(function ($) { 

  $(document).ready(function() {
    // Find all second-level submenu items
    $('.directions-menu .sub-menu ul').each(function() {
      var maxHeight = 0;

      // Calculate the maximum height among second-level items
      $(this).find('li').each(function() {
        var itemHeight = $(this).height();
        if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
        }
      });

      // Apply the maximum height to all second-level items
      $(this).find('li').css('min-height', maxHeight);
    });
  });
});