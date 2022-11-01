/**
 * Draws a line
 * @param  {number} start_x x cordinate of starting position
 * @param  {number} start_y y cordinate of starting position
 * @param  {number} end_x y cordinate of end position
 * @param  {number} end_y y cordinate of end position
 * @param  {string} [origin] cordinate plane center
 */
function line (start_x, start_y, end_x, end_y, origin = "center") {
    if (origin = "center") {
        start_x = (width / 2) + start_x;
        end_x = (width / 2) + end_x;
        start_y = (height / 2) - start_y;
        end_y = (height / 2) - end_y;
    }

    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(end_x, end_y);
    ctx.stroke();
};


/**
 * Draws a point
 * @param  {number} x x cordinate of point
 * @param  {number} y y cordinate of point
 * @param  {number} r radius of point
 * @param  {string} [origin] cordinate plane center
 */
function point (x, y, r, origin = "center") {
    if (origin = "center") {
        x = (width / 2) + x;
        y = (height / 2) - y;
    }
    // ctx.fillRect(x, y, 10, 10);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
};

/**
 * Draws an arc
 * @param  {number} x x cordinate of arc center
 * @param  {number} y y cordinate of arc center
 * @param  {number} r radius of arc
 * @param  {number} start start angle
 * @param  {number} end end angle
 * @param  {string} [origin] cordinate plane center
 */
function arc (x, y, r, start, end, origin = "center") {
    if (origin = "center") {
        x = (width / 2) + x;
        y = (height / 2) - y;
    }
    // ctx.fillRect(x, y, 10, 10);
    ctx.beginPath();
    ctx.arc(x, y, r, start, end);
    ctx.stroke();
};


/**
 * Writes text
 * @param  {string} content content
 * @param  {number} x x cordinate of bottom left
 * @param  {number} y y cordinate of bottom left
 * @param  {string} [origin] cordinate plane center
 */
function writeText (content, x, y, origin = "center") {
    if (origin = "center") {
        x = (width / 2) + x;
        y = (height / 2) - y;
    }
    ctx.font = "15px Verdana";
    ctx.fillText(content, x, y);
}

