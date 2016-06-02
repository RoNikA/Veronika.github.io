$(function () {
   
   //slider

    $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
  });
  
   //accordion

   function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp().removeClass('open');
    };
 
    $('.accordion-section-tittle').click(function(e) {
        e.preventDefault();
        var currentAttrValue = $(this).attr('href');
        var className = $(this).attr('class');
        var activeIndex = className.indexOf('active');

        close_accordion_section();

        if (activeIndex != -1) {
        close_accordion_section();
        }
        else {
            $(this).addClass('active');
            $('.accordion-section-tittle').not($(this)).removeClass('active');
            $('.accordion ' + currentAttrValue).slideDown().addClass('open');

       
        }
       });
 
        
 

})