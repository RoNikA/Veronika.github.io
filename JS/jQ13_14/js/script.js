function Question() {
  var text = "";
  var answers = [];
  this.addAnswer = function(answer) {
    answers.push(answer);
  };
  this.getAnswers = function() {
    return answers;
  }
}

var questions = [];

questions[0] = new Question();
questions[0].text = 'Question №1';
questions[0].addAnswer("Answer №1");
questions[0].addAnswer("Answer №2");
questions[0].addAnswer("Answer №3");

questions[1]= new Question();
questions[1].text = 'Question №2';
questions[1].addAnswer("Answer №1");
questions[1].addAnswer("Answer №2");
questions[1].addAnswer("Answer №3");

questions[2]= new Question();
questions[2].text = 'Question №3';
questions[2].addAnswer("Answer №1");
questions[2].addAnswer("Answer №2");
questions[2].addAnswer("Answer №3");

var body = document.querySelector('body');
var form = document.createElement('form');
form.innerHTML='<div class="header">TEST</div>'
var olQestions = document.createElement('ol');

for(var i=0;i<questions.length;i++) {
  var liQuestion = document.createElement('li');
  liQuestion.innerHTML = questions[i].text;
  liQuestion.appendChild(getDOMAnswers(questions[i].getAnswers()));
  olQestions.appendChild(liQuestion);
}
form.appendChild(olQestions);
var btn = document.createElement('input');
btn.setAttribute("type", "submit");
btn.setAttribute('value', 'Check');
btn.classList.add('btn');
form.appendChild(btn);

body.appendChild(form);

function getDOMAnswers(answers){
  var ulAnswers = document.createElement('ul');
  for(var i=0; i<answers.length; i++) {
    var liAnswer = document.createElement('li');

    liAnswer.innerHTML =  '<input type="checkbox" name="answer' + i +'" id="">' + answers[i];
    
    ulAnswers.appendChild(liAnswer);
  }
  return ulAnswers;
}