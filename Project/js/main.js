fetch("https://api.myjson.com/bins/zyv02")
  .then(function(resp) {
    console.log(resp);
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
    books = data["books"];
    showPage();
    displayContent();
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

function addingContentToBackCards() {
  for (var i = 0; i < books.length; i++) {
    var idBackCard = "flip-card-back" + i;

    /* adding title */
    var titleSource = books[i].title;
    var descriptionSource = books[i].description;
    var title = document.createElement("h4");
    title.className = "title";
    title.innerHTML = titleSource;

    /* adding description */
    var description = document.createElement("p");
    description.className = "description";
    description.innerHTML = descriptionSource;

    /* adding button */
    var createA = document.createElement("a");
    var detail = books[i].detail;
    createA.setAttribute("href", detail);
    createA.setAttribute("data-lightbox", "mygallery");
    createA.className = "button";
    createA.innerHTML = "More info";
    document.getElementById(idBackCard).appendChild(title);
    document.getElementById(idBackCard).appendChild(description);
    document.getElementById(idBackCard).appendChild(createA);
  }
}

/* calling each function to create flip cards */

function displayContent() {
  addingCardDivs();
  addingFlipCards();
  addingFrontCards();
  addingBackCards();
  addingCovers();
  addingContentToBackCards();
}

function searchFunction() {
  var query = document.getElementById("mySelect").value;
  var filter = query.toUpperCase();
  for (var i = 0; i < books.length; i++) {
    var idCardDiv = "flip-card" + i;
    var title = books[i].title;
    var description = books[i].description;
    if (
      title.toUpperCase().includes(filter) ||
      description.toUpperCase().includes(filter)
    ) {
      document.getElementById(idCardDiv).style.display = "";
    } else {
      document.getElementById(idCardDiv).style.display = "none";
    }
  }
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("cards").style.display = "";
}
