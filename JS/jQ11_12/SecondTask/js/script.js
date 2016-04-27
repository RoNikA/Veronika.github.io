$(function() {
 
var html = $('#task2').html();
var content = [ 
           {

               title:   'Veronika Barsuk',
               content: ['Last time my work lies in creating design of landing pages and logos. ',
                        'I want to study frontend because:',
                        'My telephone number:',
                        '+380983058912',
                        'My facebook profile:',
                        'My feedback:',
                        'I can create design for your website:)'
                         ]
            },

           {

           description: [' I want to realize themselves in IT;', 
                       'Тhis knowledge is useful for web designers' 
                        ]

            },

           {
   
              link: 'VeroNika Nika'
            }

             ];


 var display = tmpl(html, {
        data: content
    });
  
     $('body').append(display);

     $('a').attr('href', '#');

     $('img').attr('src', 'img/ava.png');

  
});
