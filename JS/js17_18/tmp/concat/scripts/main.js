var questions = [{
    title: 'Зачем используется ключевое слово var?',
    answers: [
    'Для выполнения написанного выше кода',
    'Для создания новой переменной',
    'Для вывода сообщения в отдельном окне',
    'Для вывода результатов программы на экран'
    
  ],
    correct: 1
},
  {
    title: 'Правильный вариант комментариев в javascript',
    answers: [
    '/*закомментированный текст*/',
    'верны варианты //закомментированный текст и /*закомментированный текст*/',
    '*закомментированный текст',
    '//закомментированный текст'
  ],
    correct: 1
},
  {
    title: 'Какое название переменной верное с точки зрения общепринятого в javascript стиля названия переменных?',
    answers: [
    
    'myvariable',
    'myVariable',
    'MyVariable'
  ],
    correct: 1,

}];

console.log(questions);;"use strict";


$(function () {
  var testPassed = true;
  var tmpl = $('#tmplQuestion').html();
  var tmplFn = _.template(tmpl);
  var tmplResult = $('#tmplResult').html();
  var tmplResultFn = _.template(tmplResult);


  //  заполняем DOM
  questions.forEach(function (item, i) {
    item.questionIndex = i;
    var html = tmplFn(item);
    $('.questions').append(html);
    
  })

  

  $('#submitTest').click(function (e) {
    var testResult = $('#test').serializeArray();

    //  Проверка ответов
    e.preventDefault();
    testResult.forEach(function (item, i) {
      var question = eval(item.name);
      questions[question.questionIndex].result = (question.correct == item.value) ? true : false;
    });

    //    модальное окно

    questions.forEach(function (item, index) {
      switch (item.result) {
      case undefined:
        item.result = 'The question was not answered';
        testPassed = false;
        break
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

  $('[data-dismiss="modal"]').click(function () {
    $('.modal').hide();
    location.reload();
    localStorage.clear();
  });

  

  // localstorage варианты ответов 
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

  // подсчет
  function resumeTest() {
    var answersStr = localStorage.getItem('answers');
    if (answersStr == null)
      return
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

