
	function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min);
  rand = Math.round(rand);
  return rand;
}

$(function(){
  $('.carousel').carousel({backgroubdColor:'transparent'});
  search_button();
  search('default');
});
function search_button(){
  $('#submit').click(function(e)
  {
    e.preventDefault();
    search(encodeURIComponent($('#search_query').val()));
  }); 
}
function mansory_build(data)
{
    $('.item').each(function(i)
    {  
        $(this).css('backgroundImage', 'url('+_.map(data.hits, 'webformatURL')[i]+')');  
        console.log('i', i); 
       $('.item__text:nth-child('+i+')').html(data.hits[i].tags.split(',')[0]);
  });    
};
}