$(window).ready(function(){
  $('.hamburger-wrapper').on('click', function(){
    $(this).parent().find('.link-container').toggleClass('show-mobile-nav');
  });

  $('#walk-in-trigger').on('click', function(e){
    e.preventDefault();
    $this = $(this);
    $parent = $this.parent();
    $estWait = $('.estimated-wait');
    $inputValue = $parent.find('input').val();
    
    if ($inputValue == '') {
      $estWait.append().html('<h3>Estimated wait time for a new party of 3: <span>22 Minutes</span></h3>');  
    }else{
      $estWait.append().html('<h3>Estimated wait time for a new party of ' + $inputValue + ' : <span>22 Minutes</span></h3>');
    }
    $parent.next().slideToggle();
  });

});
