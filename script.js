
let number = document.getElementById('number');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

let counterValue = 0;

button1.addEventListener('click', function (event) {
    if(counterValue > 0) {
      counterValue -= 1;
      number.innerHTML = counterValue;
    }
  });

  button2.addEventListener('click', function (event) {
    if(counterValue <= 49) {
      counterValue += 1;
      number.innerHTML = counterValue;
    }
  });
  