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
  var newCard = document.createElement("div");
  newCard.id = "flip-card" + i;
  newCard.className = "flip-card";
  /* Second way to add class: newflip-card.classList.add("card");*/
  /* newflip-card.textContent = "flip-card" + (i + 1);*/
  document.getElementById("cards").appendChild(newCard);
}

function addingFlipCards() {
  var idCardDiv = "flip-card" + i;
  var newFlipCard = document.createElement("div");
  newFlipCard.id = "flip-card-inner" + i;
  newFlipCard.className = "flip-card-inner";
  document.getElementById(idCardDiv).appendChild(newFlipCard);
}

function addingFrontCards() {
  var idFlipCard = "flip-card-inner" + i;
  var newFrontCard = document.createElement("div");
  newFrontCard.id = "flip-card-front" + i;
  newFrontCard.className = "flip-card-front";
  document.getElementById(idFlipCard).appendChild(newFrontCard);
}

function addingBackCards() {
  var idFlipCard = "flip-card-inner" + i;
  var newBackCard = document.createElement("div");
  newBackCard.id = "flip-card-back" + i;
  newBackCard.className = "flip-card-back";
  document.getElementById(idFlipCard).appendChild(newBackCard);
}

function addingCovers(element) {
  var urlCover = element;
  document.getElementById("flip-card-front" + i).style.backgroundImage =
    "url(" + urlCover + ")";
}

function addingContentToBackCards(title, description, detail) {
  var idBackCard = "flip-card-back" + i;

  /* adding title */
  var displayTitle = document.createElement("h4");
  displayTitle.className = "title";
  displayTitle.innerHTML = title;

  /* adding description */
  var displayDescription = document.createElement("p");
  displayDescription.className = "description";
  displayDescription.innerHTML = description;

  /* adding button */
  var createA = document.createElement("a");
  createA.setAttribute("href", detail);
  createA.setAttribute("data-lightbox", "mygallery");
  createA.className = "button";
  createA.innerHTML = "More info";
  document.getElementById(idBackCard).appendChild(displayTitle);
  document.getElementById(idBackCard).appendChild(displayDescription);
  document.getElementById(idBackCard).appendChild(createA);
}

/* calling each function to create flip cards */
var i = 0;
function displayContent() {
  for (i; i < books.length; i++) {
    var book = books[i].cover;
    var titleSource = books[i].title;
    var descriptionSource = books[i].description;
    var detail = books[i].detail;
    addingCardDivs();
    addingFlipCards();
    addingFrontCards();
    addingBackCards();
    addingCovers(book);
    addingContentToBackCards(titleSource, descriptionSource, detail);
  }
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
