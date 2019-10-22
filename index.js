var b, c, t, w, h, p;

// b => body
b = document.body;

b.style.margin = 0;
b.style.background = '#113644';

// c => canvas
c = document.querySelector('canvas');

// w => width, h => height
window.addEventListener('resize', function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
});
window.dispatchEvent(new Event('resize'));

// t => context
t = c.getContext('2d');

t.fillStyle = '#869496';
t.strokeStyle = '#869496';

// documentation
console.log(t);

// p => clips
p = [];

function onF(time) {
    t.clearRect(0, 0, w, h);
    p.forEach(function(clip) {
        clip.render(time);
    });
    window.requestAnimationFrame(onF);
}
window.requestAnimationFrame(onF);

function createClip({
    x = 0,
    y = 0,
    r = 0
} = {}) {

    var clip = {x, y, r};

    clip.draw = function() {};

    clip.render = function(time) {
        t.save();
        t.translate(this.x, this.y);
        t.rotate(this.r);
        this.draw(time);
        t.restore();
    };

    return clip;
}

// rotating square
var square = createClip({x: w/2, y: h/2});
square.draw = function (time) {
    this.r += 0.05;
    t.strokeRect(-16, -16, 32, 32);
};
p.push(square);

// old code for ref
/*
var p = {
    x: c.width / 2,
    y: c.height / 2
};
var a = Math.random() * Math.PI * 2;
t.beginPath();
t.moveTo(p.x, p.y);
for (var i = 0; i < 7; i++) {
    p.x += (32 + Math.random() * 32) * Math.cos(a + i / 7);
    p.y += (32 + Math.random() * 32) * Math.sin(a + i / 7);
    t.lineTo(p.x, p.y);
}
t.stroke();
*/
