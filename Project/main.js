fetch("https://api.myjson.com/bins/zyv02")
  .then(function(resp) {
    console.log(resp);
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
    books = data["books"];
    addingCardDivs();
    addingFlipCards();
    addingFrontCards();
    addingBackCards();
    addingCovers();
  });

function addingCardDivs() {
  for (var i = 0; i < books.length; i++) {
    var newCard = document.createElement("div");
    newCard.id = "flip-card" + i;
    newCard.className = "flip-card";
    /* Second way to add class: newflip-card.classList.add("card");*/
    /* newflip-card.textContent = "flip-card" + (i + 1);*/
    document.getElementById("cards").appendChild(newCard);
  }
}

function addingFlipCards() {
  for (var i = 0; i < books.length; i++) {
    var idCardDiv = "flip-card" + i;
    var newFlipCard = document.createElement("div");
    newFlipCard.id = "flip-card-inner" + i;
    newFlipCard.className = "flip-card-inner";
    document.getElementById(idCardDiv).appendChild(newFlipCard);
  }
}

function addingFrontCards() {
  for (var i = 0; i < books.length; i++) {
    var idFlipCard = "flip-card-inner" + i;
    var newFrontCard = document.createElement("div");
    newFrontCard.id = "flip-card-front" + i;
    newFrontCard.className = "flip-card-front";
    document.getElementById(idFlipCard).appendChild(newFrontCard);
  }
}

function addingBackCards() {
  for (var i = 0; i < books.length; i++) {
    var idFlipCard = "flip-card-inner" + i;
    var newBackCard = document.createElement("div");
    newBackCard.id = "flip-card-back" + i;
    newBackCard.className = "flip-card-back";
    document.getElementById(idFlipCard).appendChild(newBackCard);
  }
}

function addingCovers() {
  for (var i = 0; i < books.length; i++) {
    var url = books[i].cover;
    document.getElementById("flip-card-front" + i).style.backgroundImage =
      "url(" + books[i].cover + ")";
  }
}
