$(document).ready(function(){

$(function() {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            $("<div>").addClass("unit").appendTo(".grid");
                 }
             }
         });

$(document).on('mouseenter', '.unit', function() {
        $(this).addClass('hovered');
        });

$('.clear').click(function(){
  $('.unit').removeClass('hovered');
  $('.clear').toggleClass('pcolor');
});



});
