const grid = document.getElementById("grid");
const sizeText = document.getElementById("size");
const scrollbar = document.getElementById("scrollbar");
const clearBtn = document.getElementById("clear-btn");
const tools = document.querySelectorAll(".tool");
let gridCells = document.querySelectorAll(".grid-cell, .grid-cell-small");

let size = 32;
let color = "black";
let isMouseDown = false;

document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

function changeSize(event) {
  grid.innerHTML = "";

  size = scrollbar.value;
  sizeText.textContent = `Size: ${size}`;

  for (let i = 0; i < size; i++) {
    const gridRow = document.createElement("div")
    gridRow.classList.add("grid-row");
    grid.appendChild(gridRow);
    for (let j = 0; j < size; j++) {
      const gridCell = document.createElement("button");
      if (size < 50) {
        gridCell.classList.add("grid-cell");
      }
      else {
        gridCell.classList.add("grid-cell-small");
      }
      gridRow.appendChild(gridCell);

      gridCell.addEventListener("mouseover", () => {
        if(!isMouseDown) {
          return
        }
        if (color === "rainbow") {
          gridCell.style.animationName = "rainbow";
          gridCell.style.animationDuration = "3s";
          gridCell.style.animationIterationCount = "infinite";
        }
        if (color === "none") {
          gridCell.removeAttribute("style");
        }
        gridCell.style.backgroundColor = color;
        gridCell.style.borderColor = color;
      });

      gridCell.addEventListener("mousedown", () => {
        if (color === "rainbow") {
          gridCell.style.animationName = "rainbow";
          gridCell.style.animationDuration = "3s";
          gridCell.style.animationIterationCount = "infinite";
        }
        if (color === "none") {
          gridCell.removeAttribute("style");
        }
        gridCell.style.backgroundColor = color;
        gridCell.style.borderColor = color;
      });
    }
  }
  gridCells = document.querySelectorAll(".grid-cell, .grid-cell-small");
}

changeSize();


scrollbar.addEventListener("input", changeSize);

clearBtn.addEventListener("click", () => {
    gridCells.forEach((gridCell) => {
        gridCell.removeAttribute("style");
    })
});

tools.forEach((tool) => {
  tool.addEventListener("click", (e) => {
    color = e.target.value;
  })
});