$(document).ready(function () {
  $(document).on("scroll", onScroll);

  var lastScrollTop = 0;

  $(window).on('scroll', function() {
    st = $(this).scrollTop();
    var timeline = $('#timeline.stuck');
    var timelineStatus = timeline.hasClass('show');

    if(st < lastScrollTop) {
      //show links
      if (timelineStatus){
        timeline.removeClass('show');
      }

    }
    else {
      //hide links
      timeline.addClass('show');
    }
    lastScrollTop = st;
  });    

  var inview = new Waypoint.Inview({
    element: $('#timeline')[0],
    entered: function(direction) {
      //collapse nav to original location
      $(this.element).removeClass('stuck');
    },
    exit: function(direction) {
      //expand to fixed position
      $(this.element).addClass('stuck');
    }
  })    
    
  //smoothscroll
  $('.timeline a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    $('.timeline a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
  
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
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