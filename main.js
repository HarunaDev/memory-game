document.addEventListener("DOMContentLoaded", () => {
  // Iterables (card-image options)
  const cardArray = [
    {
      name: "green hills",
      img: "img/green-hills.png"
    },
    {
      name: "green hills",
      img: "img/green-hills.png"
    },
    {
      name: "old house",
      img: "img/old-house.png"
    },
    {
      name: "old house",
      img: "img/old-house.png"
    },
    {
      name: "trees & moon",
      img: "img/trees-moon.png"
    },
    {
      name: "trees & moon",
      img: "img/trees-moon.png"
    },
    {
      name: "trees & sunset",
      img: "img/trees-sunset.png"
    },
    {
      name: "trees & sunset",
      img: "img/trees-sunset.png"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result")
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  

// create game board
function createBoard() {
  /* loop over the array and return an img element with the following attributes*/

  /* previous code
  cardArray.forEach(function(cards) {
    cards = document.createElement("img")
    cards.setAttribute("src", "img/blank.png")
    cards.setAttribute("data-id", issue)
    cards.addEventListener("click", flipCard)
    grid.appendChild(cards)
  }); */

  for(let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img")
    card.setAttribute("src", "img/blank.png")
    card.setAttribute("data-id", i)
    card.addEventListener("click", flipCard)
    grid.appendChild(card)
  }
};


// check for matches
function checkForMatch() {
  // select values from cardsChosen array
  const cards = document.querySelectorAll("img")
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]

  // check if cards match or not
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "img/blank.png")
    cards[optionTwoId].setAttribute("src", "img/blank.png")
    alert("You have clicked the same image!")
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert("You found a match")
    cards[optionOneId].setAttribute("src", "img/white-space.png")
    cards[optionTwoId].setAttribute("src", "img/white-space.png")
    cards[optionOneId].removeEventListener("click", flipCard)
    cards[optionTwoId].removeEventListener("click", flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute("src", "img/blank.png")
    cards[optionTwoId].setAttribute("src", "img/blank.png")
    alert("Sorry, try again")
  }

  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = `Congatulations! You got the right match`
  } 
}


//flip card function
function flipCard() {
  let cardId = this.getAttribute("data-id")
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute("src", cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard();

});

