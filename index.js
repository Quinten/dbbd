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
    this.r = Math.sin(time / 600) * 2;
    if (Math.floor(time / 2400) % 2) {
        t.strokeRect(-8, -8, 16, 16);
    } else {
        t.fillRect(-8, -8, 16, 16);
    }
};
p.push(square);

// growing square
square = createClip({x: w/2, y: h/4});
square.draw = function (time) {
    if (Math.floor(time / 2400) % 4) {
        t.strokeRect(Math.abs(Math.sin(time / 600)) * -48, -8, Math.abs(Math.sin(time / 600)) * 96, 16);
    } else {
        t.fillRect(Math.abs(Math.sin(time / 600)) * -48, -8, Math.abs(Math.sin(time / 600)) * 96, 16);
    }
};
p.push(square);

square = createClip({x: w/2, y: h*3/4});
square.draw = function (time) {
    if ((Math.floor(time / 2400) + 2) % 4) {
        t.strokeRect(Math.abs(Math.sin((time + 300) / 600)) * -48, -8, Math.abs(Math.sin((time + 300) / 600)) * 96, 16);
    } else {
        t.fillRect(Math.abs(Math.sin((time + 300) / 600)) * -48, -8, Math.abs(Math.sin((time + 300) / 600)) * 96, 16);
    }
};
p.push(square);

var line = createClip();
line.draw = function (time) {
    t.beginPath();
    t.moveTo(16, (Math.sin(time / 2400) > 0) ? (16 + (Math.abs(Math.sin(time / 2400)) * (h - 32))) : 16);
    t.lineTo(16, (Math.sin(time / 2400) < 0) ? (h - 16 - (Math.abs(Math.sin(time / 2400)) * (h - 32))) : h - 16);
    t.stroke();
};
p.push(line);


line = createClip();
line.draw = function (time) {
    t.beginPath();
    t.moveTo(w - 16, (Math.sin(time / 2400) < 0) ? (16 + (Math.abs(Math.sin(time / 2400)) * (h - 32))) : 16);
    t.lineTo(w - 16, (Math.sin(time / 2400) > 0) ? (h - 16 - (Math.abs(Math.sin(time / 2400)) * (h - 32))) : h - 16);
    t.stroke();
};
p.push(line);

line = createClip();
line.draw = function (time) {
    t.beginPath();
    t.moveTo((Math.cos(time / 2400) > 0) ? (16 + (Math.abs(Math.cos(time / 2400)) * (w - 32))) : 16, h - 16);
    t.lineTo((Math.cos(time / 2400) < 0) ? (w - 16 - (Math.abs(Math.cos(time / 2400)) * (w - 32))) : w - 16, h - 16);
    t.stroke();
};
p.push(line);

line = createClip();
line.draw = function (time) {
    t.beginPath();
    t.moveTo((Math.cos(time / 2400) < 0) ? (16 + (Math.abs(Math.cos(time / 2400)) * (w - 32))) : 16, 16);
    t.lineTo((Math.cos(time / 2400) > 0) ? (w - 16 - (Math.abs(Math.cos(time / 2400)) * (w - 32))) : w - 16, 16);
    t.stroke();
};
p.push(line);