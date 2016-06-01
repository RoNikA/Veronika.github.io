'use strict';
const urlQuestions = "http://Veronika.github.io/JS/js21_22/questions.json";
const urlTemplates = "http://Veronika.github.io/JS/js21_22/templates.json";

var questions = {};


class Question {
    constructor (data) {
        this.id = data.id;
        this.title = data.title;
        this.answers = data.answers;
        this.correct = data.correct;
    }
    check (answerID) {
        return ( answerID == this.correct );
    }
}

class Test {
    constructor () {
        this.questionTmpl;
        this.resutlTmpl;
        this.questions = [];
        this.passed = true;
    }
    initQestions (url) {
        let response;
        $.ajax(
            {url: url,
            async: false,
            success: function(data) {
                     response = data;}
            });

        this.questions = _.map(response, item => new Question (item));
        
    }
    initTemplate (url) {
       
        let response;
        $.ajax(
            {url: url,
            async: false,
            success: function(data) {
                     response = data;}
            });
        this.questionTmpl = response.questionTmpl; 
        this.resultTmpl = response.resultTmpl;
    }
}

var test = new Test();
try {
module.exports = test;
} catch (err) {}


$(function () {
  var testPassed = true;
  

    
test.initQestions(urlQuestions);
test.initTemplate(urlTemplates);
    debugger;
questions = test.questions;
  var tmplFn = _.template(test.questionTmpl);
  var tmplResultFn = _.template(test.resultTmpl);

    
  // Заполняем DOM. 
 //нечего рефакторить
  questions.forEach(function (item, i) {
    item.questionIndex = i;
    var html = tmplFn(item);
    $('.questions').append(html);
  });

//     рефакторить
  $('#submitTest').click(function (e) {
        var testResult = $('#test').serializeArray();
        e.preventDefault();

    //  Проверка ответов

    testResult.forEach(function (item, i) {
            var question = eval(item.name);
            questions[question.questionIndex].result = (question.correct == item.value) ? true : false;
    });

    //   body  модального окна
     
    questions.forEach(function (item, index) {
      switch (item.result) {
      case undefined:
        item.result = 'The question was not answered';
        testPassed = false;
        break;
      case true:
        item.result = 'Correctly';
        break
      case false:
        item.result = 'Incorrectly';
        testPassed = false;
        break
      }

      var html = tmplResultFn(item);
      $('#resultModal .modal-body ol').append(html);
    })

    var html = (testPassed) ? '<h3 class="result">The test has been passed successfully!</h3>' : '<h3 class="result">The test was failed!</h3>'
    $('#resultModal .modal-footer').append(html);
    $('body').append('<div class="shadow"></div>');
    $('#resultModal').show();

  });

  //  Закрыть модальное окно
  
  $('[data-dismiss="modal"]').click(function () {
    $('.modal').hide();
    location.reload();
    localStorage.clear();
  });

 

  //  ответы в локальное хранилище
 
    $('.question input').change(function (e) {
    var value = e.target.value;
    var question = eval(e.target.name);
    var i = question.questionIndex;
    var answersStr = localStorage.getItem('answers');
    var answers = (answersStr) ? JSON.parse(answersStr) : [];

    answers[i] = value;
    console.log(answers);
    answersStr = JSON.stringify(answers);
    localStorage.setItem('answers', answersStr);
  })


    
  function resumeTest() {
    var answersStr = localStorage.getItem('answers');
    if (answersStr == null)
      return;
    var answers = JSON.parse(answersStr);
    answers.forEach(function (item, i) {
      if (!item) return;
      var $question = $('[name="questions[' + i + ']"][Value="' + item + '"]');
      $question.trigger('click');
    })
  };
  resumeTest();
    
  
  $('#test').submit(function (e) {
    e.preventDefault();
  });
})


