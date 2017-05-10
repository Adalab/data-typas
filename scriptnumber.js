var randomNumber = Math.round(Math.random() * 100);
var inputNumber = document.querySelector('#box-number');
var guesses = 0;

function divination() {
  guesses++;
  if (randomNumber === Number(inputNumber.value)) {
    document.getElementById("feedback-divination").innerHTML = "You won! You tried " + guesses + " times";
  }
  else if (randomNumber < Number(inputNumber.value)) {
    document.getElementById("feedback-divination").innerHTML = "Try a lower number...";
  }
  else if (randomNumber > Number(inputNumber.value)) {
    document.getElementById("feedback-divination").innerHTML = "Try a higher number...";
  }
}

inputNumber.value = "";
button.addEventListener("click", divination);

function reset() {
  inputNumber.value = "";
  randomNumber = Math.round(Math.random() * 100);
  guesses = 0;
}

var resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", reset);
