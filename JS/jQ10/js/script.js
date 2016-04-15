

$(function() {

   // menu

$('.dropdown').hover(
function(){
$(this).children('.submenu').slideDown(500,stop()); 
},
function(){
$(this).children('.submenu').slideUp(500,stop()); 
}
);
function stop(){
$('.submenu').stop(true, true);
}

//color

$('.submenu').hover(
function (){
    $('.submenu').animate({backgroundColor:'#1CBCF2'}, 500 );
},
function(){
    $('.submenu').animate({backgroundColor:'#000000'}, 500 );
});

});

//select
$(function(e) {
try {
$("body select").msDropDown();
} catch(e) {
alert(e.message);
}
});
//slider
$(function() {
   $(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 200,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: false,           // Boolean: Show pager, true or false
  nav: false,             // Boolean: Show navigation, true or false
  random: false,          // Boolean: Randomize the order of the slides, true or false
  pause: false,           // Boolean: Pause on hover, true or false
  pauseControls: true,    // Boolean: Pause when hovering controls, true or false
  prevText: "Previous",   // String: Text for the "previous" button
  nextText: "Next",       // String: Text for the "next" button
  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
  manualControls: "",     // Selector: Declare custom pager navigation
  namespace: "rslides",   // String: Change the default namespace used
  before: function(){},   // Function: Before callback
  after: function(){}     // Function: After callback
});

});

// cheks
$(function() {
   $('.jq_box').click(function() {
    changeCheck($(this));
   });
   $('.jq_box').each(function() {
    changeCheckStart($(this));
   });

   function changeCheck(el) {
    var el = el,
    input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
}
     else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    };
    if (input.attr("disabled")) {
      el.css("background-position","0 -17px");
    };
     return true;

   };
   function changeCheckStart(el) {
        var el = el,
        input = el.find("input").eq(0);
        if(input.attr("checked")) {
        el.css("background-position","0 -17px");
        };

        if (input.attr("disabled")) {
          el.css({
            background:"url(img/checkbox__dis.png) 0 -17px"
          });
        };

     return true;

   };
 });
