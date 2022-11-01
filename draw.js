const pi = Math.PI;

function line (start_x, start_y, end_x, end_y) {
    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(end_x, end_y);
    ctx.stroke();
};

const x_to_pixel_x = x => (width / 2) + x;
const y_to_pixel_y = y => (height / 2) - y;

function cline (start_x, start_y, end_x, end_y) {
    line(x_to_pixel_x(start_x), y_to_pixel_y(start_y), x_to_pixel_x(end_x), y_to_pixel_y(end_y));
};

function point (x, y, r) {
    // ctx.fillRect(x, y, 10, 10);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, pi * 2, true);
    ctx.closePath();
    ctx.fill();
};

function cpoint (x, y, r) { point(x_to_pixel_x(x), y_to_pixel_y(y), r); }

function writeText (content, x, y) {
    ctx.font = "15px Verdana";
    ctx.fillText(content, x, y);
}

function cwriteText (content, x, y) { writeText(content, x_to_pixel_x(x), y_to_pixel_y(y), r); }


function drawState () {
    ctx.fillStyle = "#222222";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgb(200, 0, 0)';
    ctx.lineWidth = 10;
    ctx.fillStyle = "rgb(255, 255, 255)";

    x = r * Math.cos(v);
    y = r * Math.sin(v);


    // x = 100;
    // y = 100;

    cline(0, 0, x, y);
    // point(x, y, 10);
    cpoint(x, y, 10);
    cpoint(0, 0, 10);


    cwriteText(`${(v / pi % 2).toFixed(1)} * π`, 150, 0);

}






r = 100;
v = pi;


setInterval(() => {
    v += pi / 360;
    r = 200 * Math.abs(Math.cos(v + pi / 2));

    drawState();
}, 1);

// let w = 0;
// let h = 0;
// setInterval(() => {
//     if (w != width) w += 1;
//     else if (h != height) h += 1;


//     drawState();
// }, 1);