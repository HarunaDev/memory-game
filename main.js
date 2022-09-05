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

  const grid = document.querySelector(".grid");

// create game board
function createBoard() {
  /* loop over the array and return an img element with the following attributes*/
  cardArray.forEach(function(cards) {
    cards = document.createElement("img")
    cards.setAttribute("src", "img/blank.png")
    cards.setAttribute("data-id", 1)
    grid.appendChild(cards)
  });
};

createBoard();

});

