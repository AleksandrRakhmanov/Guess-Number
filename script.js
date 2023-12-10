// первое число бинарного поиска
let a = 0;
// второе число бинарного поиска
let b = 1000;
// Количество попыток пользователя
let sum = 1;

let h1Title = document.querySelector("#h1Title");

let btnStart = document.querySelector("#btnStart");

let playBox = document.querySelector("#playBox");

let btnLess = document.querySelector("#btnLess");

let btnGreater = document.querySelector("#btnGreater");

let loseMessage = document.querySelector("#loseMessage");

// Нажатие на кнопку Начать
btnStart.addEventListener("click", function () {
  btnStart.style.display = "none";
  playBox.style.display = "block";
  instruction.style.display = "none";
  score.style.display = "block";
  reloadBtn.style.display = "block";
  score.innerText = "Количество попыток: " + sum;
  h1Title.innerHTML = "Ваше число: " + parseInt((a + b) / 2);
});

// Нажатие на кнопку Меньше
btnLess.addEventListener("click", function () {
  if (sum < 9) {
    b = parseInt((a + b) / 2);
    h1Title.innerHTML = "Ваше число: " + parseInt((a + b) / 2);
    sum++;
    score.innerText = "Количество попыток: " + sum;
  } else {
    b = parseInt((a + b) / 2);
    h1Title.innerHTML = "Ваше число: " + parseInt((a + b) / 2);
    sum++;
    score.innerText = "Количество попыток: " + sum;
    btnLess.setAttribute("disabled", "");
    btnGreater.setAttribute("disabled", "");
  }
});

// Нажатие на кнопку Больше
btnGreater.addEventListener("click", function () {
  if (sum < 9) {
    a = parseInt((a + b) / 2);
    h1Title.innerHTML = "Ваше число: " + parseInt((a + b) / 2);
    sum++;
    score.innerText = "Количество попыток: " + sum;
  } else {
    a = parseInt((a + b) / 2);
    h1Title.innerHTML = "Ваше число: " + parseInt((a + b) / 2);
    sum++;
    score.innerText = "Количество попыток: " + sum;
    btnLess.setAttribute("disabled", "");
    btnGreater.setAttribute("disabled", "");
  }
});

// Начало работы приложения путём нажатия на кнопку space или enter.
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13 || event.keyCode === 32) {
    document.getElementById("btnStart").click();
  }
});
