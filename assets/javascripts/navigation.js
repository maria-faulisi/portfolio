$(window).ready(function(){
  $('.hamburger-wrapper').on('click', function(){
    $(this).parent().find('.link-container').toggleClass('show-mobile-nav');
  });
});
