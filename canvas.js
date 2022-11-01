const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let w = canvas.width;
let h = canvas.height;
let grid_size = 50;

ctx.fillStyle = "#4d4d4d";
ctx.fillRect(0, 0, w, h);



const drawGrid = (size) => {
    ctx.strokeStyle = 'rgb(150, 150, 150)';
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgb(255, 255, 255)";

    //lines
    for (x = 0; x < w; x += size) {
        line(x, 0, x, h);
    }
    for (y = 0; y < h; y += size) {
        line(0, y, w, y);
    }

    //labels
    ctx.font = "15px Verdana";

    for (x = 1; x < w / size / 2; x++) {
        ctx.fillText(x, w / 2 + size * x - 5, h / 2 + 25);
    }
    for (x = -1; x > -w / size / 2; x--) {
        ctx.fillText(x, w / 2 + size * x - 11, h / 2 + 25);
    }
    for (y = 1; y < h / size / 2; y++) {
        ctx.fillText(y, w / 2 - 20, h / 2 - size * y + 4);
    };
    for (y = -1; y > -h / size / 2; y--) {
        ctx.fillText(y, w / 2 - 22, h / 2 - size * y + 4);
    };
    ctx.fillText(0, w / 2 - 16, h / 2 + 25);


    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = 5;

    line(0, h / 2, w, h / 2);
    line(w / 2, 0, w / 2, h);
};

drawGrid(grid_size);


ctx.fillStyle = "rgb(255, 0, 0)";
point(1, 1, 5);


