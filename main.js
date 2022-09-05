document.addEventListener("DOMContentLoaded", () => {
  // card-image options
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
  for(let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img")
    card.setAttribute("src", "img/blank.png")
    card.setAttribute("data-id", 1)
    grid.appendChild(card)
  }
}

createBoard()
})

