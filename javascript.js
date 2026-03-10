

const container_grid = document.querySelector("#container-grid");
let no = 16;
function createGrid(b) {
    for (let i = 0; i < no * no; i++) {

        const square = document.createElement("div");
        square.classList.add("square");
        container_grid.append(square);

        let size = 500 / no;
        square.style.height = size + "px";
        square.style.width = size + "px";


    }
}

createGrid();

//colorPicker 
const colorPicker = document.querySelector("#colorPicker");

let color = "black";
colorPicker.addEventListener("input", () => {
    color = colorPicker.value;
});

//mouseover and color

const squareColor = document.querySelectorAll(".square");
function changeColor() {

    // if (!mouseDown) {
    //     return;
    // }

    // let random = randomColor();
    if (color === "random") {
        this.style.background = randomColor();
    }
    // else if(color==="white")
    else {
        this.style.background = color;

    }


    // let current = Number(this.style.opacity);
    // this.style.opacity = current + 0.1;
}

for (let square of squareColor) {

    square.addEventListener("mouseover", changeColor);
    // square.addEventListener("mouseDown", changeColor)


}

//grid asking for prompt
const gridNo = document.querySelector("#gridNo");
// let no;
gridNo.addEventListener("click", () => {
    no = Number(prompt("Enter No of grids (n*n):"));
    if (isNaN(no)) {
        alert("please enter number");
    }
    if (no >= 100) {
        alert("please write less than 100")
    }
    else {
        changeGrid();

    }
});


function changeGrid() {

    const container_grid = document.querySelector("#container-grid");
    container_grid.textContent = "";
    for (let i = 0; i < no * no; i++) {

        const square = document.createElement("div");
        square.classList.add("square");



        container_grid.append(square);
        square.addEventListener("mouseover", changeColor);
        // square.addEventListener("touchmove", changeColor);   
        let size = 500 / no;
        square.style.height = size + "px";
        square.style.width = size + "px";
    }
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

const randomclr = document.querySelector("#random");
randomclr.addEventListener("click", () => {
    color = "random";
});

const eraser = document.querySelector("#eraser");

eraser.addEventListener("click", () => color = "white");

let mouseDown = false;


// document.addEventListener("mousedown", () => mouseDown = true);
// document.addEventListener("mouseup", () => mouseDown = false);



