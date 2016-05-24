'use strict';
$(function () {

  var cx = '000049086616001690147:yc4tt9tzlxy',
  gcse = document.createElement('script');
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByClassName('googleSearch')[0];
  s.parentNode.insertBefore(gcse, s);


  function Human() {
    this.name = 'Anna';
    this.age = '25';
    this.sex = 'female';
    this.growth = '170';
    this.weight = '48';
  }

  function Worker() {
    this.company = 'DFG';
    this.salary = '';
  }
  Worker.prototype = new Human();
  Worker.prototype.work = function () {
  console.log("I'm worker");
  };

  function Student() {
    this.education = 'UniHeadelberg';
    this.stipend = '';
  }
  Student.prototype = new Human();
  Student.prototype.watchTV = function () {
  console.log("I'm watching TV");
  };

  var newStudent = new Student(),
      newWorker = new Worker();
  
  console.log(newWorker);
  console.log(newStudent);
});

