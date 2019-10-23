// rotating square
var square = createClip({x: w/2, y: h/2});
square.draw = function (time) {
    this.r = Math.sin(time / 600) * 2;
    if (Math.floor(time / 2400) % 2) {
        t.strokeRect(-8, -8, 16, 16);
    } else {
        t.fillRect(-8, -8, 16, 16);
    }
};
p.push(square);