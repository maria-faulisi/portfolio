$(window).ready(function(){
  $('.mobile-nav-trigger').click(function(e){
    e.preventDefault();
    $('.navigation').toggleClass('mobile-show');
  });
});
