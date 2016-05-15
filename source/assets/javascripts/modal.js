$(window).ready(function(){
  $('#exampleModal').on('show.bs.modal', function (event) {    
    var triggerDiv = $(event.relatedTarget); 
    var dataSrc = triggerDiv.data('image-src');
    var modal = $(this);
    modal.find('.modal-body img').attr('src', "assets/images/wf-full/" + dataSrc);
  });

});
