var cardList = [];

var totalCards = 12;
var uniqueCards = totalCards / 2;
var previousActiveCard = null;

for (var i = 1; i <= uniqueCards; i++) {
  var card = {
    id: i,
    active: false,
    url: "images/HP" + i + ".jpg"
  };

  cardList.push(card, card);
}


function shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.ceil(Math.random() * 11);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

shuffleCards(cardList);

var divCards = document.getElementById('cards-container');
var divCardsContent = "";

for (var i = 0; i < cardList.length; i++) {
  divCardsContent = divCardsContent + '<img src="images/cartas_reverso_harry_potter.png" data-index="' + i + '" class="card">';
}

divCards.innerHTML = divCardsContent;


function activate() {

  var dataIndex = this.getAttribute('data-index');
  var index = parseInt(dataIndex);
  cardList[index].active = true;
  this.setAttribute('src', cardList[index].url);

  if (previousActiveCard === null) {
    previousActiveCard = this;

  }
  else {

  }
}


var cardsElements = document.querySelectorAll('.card');
console.log(cardsElements);

for (var i = 0; i < cardsElements.length; i++) {
  cardsElements[i].addEventListener("click", activate);
}
// image1.addEventListener("click", activate);
