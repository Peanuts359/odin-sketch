const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "#333333";

let size = DEFAULT_SIZE;

const grid = document.querySelector(".container");

const reset = document.querySelector("#reset");
const resize = document.querySelector("#resize");

reset.addEventListener("click", (event) => resetGrid());
resize.addEventListener("click", (event) => resizeGrid());

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

generateGrid(size);

function generateGrid(size) {
    for (let row = 0; row < size; row++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let pixel = 0; pixel < size; pixel++) {
            const gridElement = document.createElement("div");
            gridElement.classList.add("element");
            gridElement.addEventListener("mouseover", draw)
            row.appendChild(gridElement);
        }
        grid.appendChild(row);
    }
}

function resizeGrid() {
    console.log("resizing");
}

function resetGrid() {
    console.log("resetting");
}

function randomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function draw(e) {
    if (mouseDown) {
        e.target.style.backgroundColor = randomColor();
    }
}