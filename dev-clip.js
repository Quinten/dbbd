// rotating square
var square = createClip({x: w/2, y: h/2});
square.draw = function (time) {
    this.r = Math.sin(time / 600) * 2;
    t.fillRect(-8, -8, 16, 16);
    //t.strokeRect(-8, -8, 32, 32);
};
p.push(square);