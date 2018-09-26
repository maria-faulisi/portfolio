$(window).ready(function(){
  $('.mobile-nav-trigger').click(function(e){
    e.preventDefault();
    $('.navigation').toggleClass('mobile-show');
  });
});
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('.timeline a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);    
    $(document).off("scroll");
    
    $('.timeline a').each(function () {
      $(this).removeClass('active');
    })

    $(this).addClass('active');
  
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
    $('#timeline').removeClass('stuck');
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  var bodyClass = document.body.className;
  $('.timeline a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.timeline a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}
;


