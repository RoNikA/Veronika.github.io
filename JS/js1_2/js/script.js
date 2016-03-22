
//firstTask


function pow(x, y) {
  var result = x;

  for (var i = 1; i < y; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Укажите число", '');
var y = prompt("Укажите степень", '');

if (y <= 1) {
  alert('Степень ' + y +
    'не корректнa, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, y) );
}

//secondTask


var arr = ['Андрей', 'Сергей', 'Артем', 'Олег', 'Дмитрий'];
for (var i = 0; i < 5; i++){
    arr.push(prompt('Введите имя'));
};

var flag;
var userName = prompt('Введите Ваше имя пользователя');
for (i = 0; i < arr.length; i++){
    if (arr[i] === userName){
        flag = true;
    }
};
if (flag == true) {
    alert('Вы успешно вошли, '+ userName );
} else
    {
        alert('Извините, но имя пользователя' + userName + ' не найдено')
    };


  


  


