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

//fetch('index.js').then((resp) => { return resp.text() }).then((text) => console.log(text) );
