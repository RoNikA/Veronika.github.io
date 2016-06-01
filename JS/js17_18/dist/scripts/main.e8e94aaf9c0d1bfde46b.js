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
console.log(questions),

$(function(){
	function resumeTest(){
		var a=localStorage.getItem("answers");
	if(null!==a){
		var b=JSON.parse(a);
		  b.forEach(function(a,b){
		  	if(a){
		  		var c=$('[name="questions['+b+']"][Value="'+a+'"]');
		  c.trigger("click")}
		})}}


		var testPassed=!0,
		  tmpl=$("#tmplQuestion").html(),
		  tmplFn=_.template(tmpl),
		  tmplResult=$("#tmplResult").html(),
		  tmplResultFn=_.template(tmplResult);


		questions.forEach(function(a,b){
			a.questionIndex=b;
		var c=tmplFn(a);
		$(".questions").append(c)}),

		$("#submitTest").click(function(e){
	var testResult=$("#test").serializeArray();


	e.preventDefault(),
			testResult.forEach(function(item){
			  var question=eval(item.name);

			  questions[question.questionIndex].result=question.correct==item.value}),



			 questions.forEach(function(a){
			switch(a.result){
			case void 0:
			  a.result='The question was not answered',
			  testPassed=!1;
			break;
			case!0:
			  a.result='Correctly';
			break;
			case!1:
			  a.result='Incorrectly',
			  testPassed=!1
			}

 var b = tmplResultFn(a);
	$("#resultModal .modal-body ol").append(b)
   });
			var html=testPassed?'<h3 class="result">The test has been passed successfully!</h3>':'<h3 class="result">The test was failed!</h3>';
			$("#resultModal .modal-footer").append(html),
			$("body").append('<div class="shadow"></div>'),
			$("#resultModal").show()
	}),
		$('[data-dismiss="modal"]').click(function(){
			$(".modal").hide(),
			location.reload(),
			localStorage.clear()}),

		$(".question input").change(function(e){
			var value=e.target.value,
			question=eval(e.target.name),
			i=question.questionIndex,
			answersStr=localStorage.getItem("answers"),
			answers=answersStr?JSON.parse(answersStr):[];

			answers[i]=value,
			console.log(answers),
			answersStr=JSON.stringify(answers),
			localStorage.setItem("answers",answersStr)
		}),
		resumeTest(),
		$("#test").submit(function(a){
			a.preventDefault()}
		)});

 
  