$(function(){

var $tabs_1 = $('.tabs_1');
var $t1 = $('.t1');
var $tabs_2 = $('.tabs_2');
var $t2 = $('.t2');
var $tabs_3 = $('.tabs_3');
var $t3 = $('.t3');

$tabs_1.on('click', function() {
    $tabs_1.attr('id', 'active');
    $t1.attr('id', 'active');
    $tabs_2.removeAttr('id', 'active');
    $t2.removeAttr('id', 'active');
    $tabs_3.removeAttr('id', 'active');
    $t3.removeAttr('id', 'active');
});


$tabs_2.on('click', function() {
    $tabs_1.removeAttr('id', 'active');
    $t1.removeAttr('id', 'active');
    $tabs_2.attr('id', 'active');
    $t2.attr('id', 'active');
    $tabs_3.removeAttr('id', 'active');
    $t3.removeAttr('id', 'active');
});

$tabs_3.on('click', function() {
    $tabs_1.removeAttr('id', 'active');
    $t1.removeAttr('id', 'active');
    $tabs_2.removeAttr('id', 'active');
    $t2.removeAttr('id', 'active');
    $tabs_3.attr('id', 'active');
    $t3.attr('id', 'active');
   });
});


var $firstName = $('.input-1');
var $lastName = $('.input-2');
var $adress = $('.input-3');
var $button = $('button');

$firstName.hover(function(){$('.appear-text1').css({
    opacity: 1,
    visibility:'visible'
})}, 


function() {$('.appear-text1').css({
    opacity: 0,
    visibility:'hidden'
})});


$lastName.hover(function(){$('.appear-text2').css({
    opacity: 1,
    visibility:'visible'
})}, 


function() {$('.appear-text2').css({
    opacity: 0,
    visibility:'hidden'
})});


$adress.hover(function(){$('.appear-text3').css({
    opacity: 1,
    visibility:'visible'
})}, 


function() {$('.appear-text3').css({
    opacity: 0,
    visibility:'hidden'
})});


$('button').on('click', function () {

  $('.appear-text1').css({
      opacity: 1,
      visibility:'visible'
    });

  $('.appear-text2').css({
      opacity: 1,
      visibility:'visible'
    });

  $('.appear-text3').css({
      opacity: 1,
      visibility:'visible'   
    });
});


   
  
	 
   



