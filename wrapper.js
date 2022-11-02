const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let sizeFraction = 0.8;

let width = Math.floor(window.innerWidth * sizeFraction);
let height = Math.floor(window.innerHeight * sizeFraction);

if (width / 2 % 2 == 0) width -= 1;
if (height / 2 % 2 == 0) height -= 1;

canvas.width = width;
canvas.height = height;

drawState();


function resize () {
    width = window.innerWidth;
    height = window.innerHeight;

    if (width / 2 % 2 == 0) width -= 1;
    if (height / 2 % 2 == 0) height -= 1;

    canvas.width = width;
    canvas.height = height;

    drawState();
}

window.addEventListener("resize", resize);
