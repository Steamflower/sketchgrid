$(document).ready(function(){
var i;
var j;
i = 50;
j = (1000/i)-2;

/*creates grid based on input*/
$(function createGrid() {

    for (var x = 0; x < i; x++) {
        for (var y = 0; y < i; y++) {
            $("<div>").addClass("unit").appendTo(".grid");
                 }
             }
/*changes size of units dynamically*/
             $(function() {
             $(".unit").width(math.floor(j)).height(math.floor(j));
           });



});


$(document).on('mouseenter', '.unit', function() {
        $(this).addClass('hovered');
        });

$('.clear').click(function(){
  $('.unit').removeClass('hovered');
  $('.clear').toggleClass('pcolor');
});


});
