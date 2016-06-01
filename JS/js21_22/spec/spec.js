
var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery");
global._ = require("lodash");

var test = require('../js/script.js');

;
    

describe("Test", function() {
  it("test get questions", function() {

      
      var questionTmpl = "",
          resultTmpl = "";
      

       $.ajax(
            {url: "https://github.com/RoNikA/Veronika.github.io/blob/master/JS/js21_22/templates.json",
            async: false,
            success: function(data) {
                     response = data;
              questionTmpl = data.questionTmpl; 
              resultTmpl = data.resultTmpl;
            }
            });
      
          
          secondQuestion = {id: 3,
                            title: "Какое название переменной верное с точки зрения общепринятого в javascript стиля названия переменных?",
                            answers: ["myvariable", "myVariable'", "MyVariable"],
                            correct: 1
                           };      
      
//      act
      test.initQestions("https://github.com/RoNikA/Veronika.github.io/blob/master/JS/js21_22/questions.json");
      var resultQuestion = test.questions[2];

      
//      assert
      
    expect(resultQuestion.title).toEqual(secondQuestion.title);
    expect(resultQuestion.correct).toEqual(secondQuestion.correct);
    expect(resultQuestion.answers).toEqual(secondQuestion.answers);
      
  });
    
      it("test get templates", function() {
               var questionTmpl = "";
      
//Сравниваю шаблоны
       $.ajax(
            {url: "https://github.com/RoNikA/Veronika.github.io/blob/master/JS/js21_22/templates.json",
            async: false,
            success: function(data) {
                     response = data;
              questionTmpl = data.questionTmpl; 
            }
            }); 
          
           test.initTemplate("https://github.com/RoNikA/Veronika.github.io/blob/master/JS/js21_22/templates.json");
           var resulTmplQuestion = test.questionTmpl;
           expect(resulTmplQuestion).toEqual(questionTmpl);
          
      });
});
