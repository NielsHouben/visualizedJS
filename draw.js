
function drawState () {
    ctx.fillStyle = "#202124";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = 'rgb(0, 200, 0)';
    ctx.lineWidth = 5;
    ctx.fillStyle = "rgb(255, 255, 255)";

    x = r * Math.cos(v);
    y = r * Math.sin(v);

    // x = 100;
    // y = 100;

    line(0, 0, x, y);
    ctx.strokeStyle = 'rgb(200, 0, 0)';
    line(0, 0, x, 0);
    ctx.strokeStyle = 'rgb(0, 0, 200)';
    line(0, 0, 0, y);
    // point(x, y, 10);
    point(x, y, 8);
    point(0, 0, 8);

    ctx.fillStyle = "rgb(255, 255, 0)";

    writeText(`v = ${(v / Math.PI % 2).toFixed(1)} * π`, 300, 0);

    ctx.fillStyle = "rgb(0, 255, 0)";
    writeText(`r = ${r}`, 300, -15);

    ctx.fillStyle = "rgb(255, 0, 0)";
    writeText(`x = ${x.toFixed(0)}`, 300, -15 * 3);
    ctx.fillStyle = "rgb(0, 0, 255)";
    writeText(`y = ${y.toFixed(0)}`, 300, -15 * 4);


}






r = 100;
v = Math.PI;


setInterval(() => {
    v += Math.PI / 720;
    // r = 200 * Math.abs(Math.cos(v + Math.PI / 2));

    drawState();
}, 1);

// let w = 0;
// let h = 0;
// setInterval(() => {
//     if (w != width) w += 1;
//     else if (h != height) h += 1;


//     drawState();
// }, 1);