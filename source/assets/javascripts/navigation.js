$(window).ready(function(){
  $('.hamburger-wrapper').on('click', function(){
    $(this).parent().find('.link-container').toggleClass('show-mobile-nav');
  });

  $('#walk-in-trigger').on('click', function(e){
    e.preventDefault();
    $(this).parent().next().slideToggle();
  });
});