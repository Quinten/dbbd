// rotating square
var square = createClip({
  x: width/2,
  y: height/2
});
square.draw = function (time) {
    this.rotation = Math.sin(-time / 600) * Math.PI;
    context.fillRect(64, -8, 16, 16);
    //context.strokeRect(-8, -8, 32, 32);
};
clips.push(square);