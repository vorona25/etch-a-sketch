let color = "white";

function gridSize() {
    let user_input = prompt("What dimensions do you want the board to be?");

    if (user_input == ("")) {
        gridSize();
    }
    else if (user_input < 0 || user_input > 100) {
        gridSize();
    }

    return user_input;
}

function colorChoice(new_color) {

    color = new_color;
}

function divColor() {

    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;       
    }
    else if (color == "white") {
        this.style.backgroundColor = "white";
        let rgb = this.style.getPropertyValue("background-color");
        console.log(rgb);
    }
    else if (color == "gradient") {
        let rgb = this.style.getPropertyValue("background-color").split(",");
        if (rgb == "white") {
            this.style.backgroundColor = "white";
        }
        if (rgb == "black") {
            this.style.backgroundColor = "rgb(26, 26, 26)";
        }
        else {
            rgb0 = Number(rgb[0].split("(")[1]) + 26;
            rgb1 = Number(rgb[1]) + 26;
            rgb2 = Number(rgb[2].split(")")[0]) + 26;
            this.style.backgroundColor = `rgb(${rgb0}, ${rgb1}, ${rgb2})`;
        }
    }
}


function splitBoard(gridSize) {

    let board = document.querySelector(".grid");

    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    let totalDivs = gridSize*gridSize;
    // create divs for however many dimensions we want
    for (let i = 0; i < totalDivs; i++) {
        console.log(i);
        let div = document.createElement("div");
        div.classList.add('content');
        div.style.backgroundColor = "black";
        div.addEventListener("mouseover", divColor);
        board.insertAdjacentElement("beforeend", div);
    }
}

function resetBoard() {
    let divs = document.querySelectorAll(".content");
    divs.forEach((div) => div.style.backgroundColor = "black");
}

document.addEventListener("DOMContentLoaded", function() {

    splitBoard(16);

    // Set size of board
    let size_button = document.querySelector(".size");
    size_button.addEventListener("click", function() {
        let size = gridSize();
        splitBoard(size);
    })


    let reset_button = document.querySelector(".reset");
    reset_button.addEventListener("click", resetBoard);
})



