$(function() {

    var leftArrow = $('.carousel-arrow-left');
    var rightArrow = $('.carousel-arrow-right');
    var elementsList = $('.carousel-list');
    var pixelsOffset = 210;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var miniOffset = - ((elementsCount - 5) * pixelsOffset);
    var maxiOffset = 0;
 

    leftArrow.click(function() {
    	 if (currentLeftValue != maxiOffset) {
        currentLeftValue += 210;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
         } 
    });
 
    rightArrow.click(function() {
    	 if (currentLeftValue != miniOffset) {
        currentLeftValue -= 210;
        elementsList.animate({ left : currentLeftValue + "px"}, 500);
          }   
    });
  });