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

console.log(shuffleCards(cardList));



// var image = [];
// var imageId = [];
//
// for (var k = 0; k < totalCards; k++) {
//   image[k] = "image" + k;
//   imageId[k] = "card" + k;
// }
//
// console.log(image);
// console.log(imageId);
function activate() {

  var dataIndex = image1.getAttribute('data-index');
  var index = parseInt(dataIndex);
  console.log(index);
  cardList[index].active = true;
  console.log(cardList[index].active);
  image1.setAttribute('src', cardList[index].url);

  if (previousActiveCard === null) {
    previousActiveCard = image1;

  }
  else {
    
  }
}


var image1 = document.querySelector('#card1');
image1.addEventListener("click", activate);

// var image2 = document.querySelector(#card2);
// var image3 = document.querySelector(#card3);
// var image4 = document.querySelector(#card4);
// var image5 = document.querySelector(#card5);
// var image6 = document.querySelector(#card6);
// var image7 = document.querySelector(#card7);
// var image8 = document.querySelector(#card8);
// var image9 = document.querySelector(#card9);
// var image10 = document.querySelector(#card10);
// var image11 = document.querySelector(#card11);
// var image12 = document.querySelector(#card12);
//
//


// image1.addEventListener()
