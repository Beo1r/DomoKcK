/* Begin jQuery */ ;
(function ($) {

  // DOM ready
  $(function () {

    /* Navigation */

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function () {
      
      var navToggle = $('.nav-list').is(':visible'),
        navSlide = navToggle ? 'slideUp' : 'slideDown';
      $('.nav-list').velocity(navSlide, 200);
    });
    // Toggle active CSS class (X - close)
    document.querySelector("#nav-toggle").addEventListener("click", function () {
      this.classList.toggle("active");
    });
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li > a:not(:only-child)').on('click', function () {
      var isOpen = $(this).siblings('.nav-dropdown').is(':visible'),
        slideDir = isOpen ? 'slideUp' : 'slideDown'; //O slideIn.
        $(this).siblings('.nav-dropdown').velocity(slideDir, 200);
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      //stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      var isOpen = $('.nav-dropdown').is(':visible');
      if ( isOpen ){
        $('.nav-dropdown').velocity("slideUp", 200);
      }
    });

  });

})(jQuery);
