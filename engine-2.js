var body, canvas, context, width, height, clips;

body = document.body;

body.style.margin = 0;
body.style.background = '#113644';

canvas = document.querySelector('canvas');

context = canvas.getContext('2d');

// documentation
console.log(context);

window.addEventListener('resize', function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    context.fillStyle = '#869496';
    context.strokeStyle = '#869496';
});
window.dispatchEvent(new Event('resize'));

clips = [];

function onF(time) {
    context.clearRect(0, 0, width, height);
    clips.forEach(function(clip) {
        clip.render(time);
    });
    window.requestAnimationFrame(onF);
}
window.requestAnimationFrame(onF);

function createClip({
    x = 0,
    y = 0,
    rotation = 0
} = {}) {

    var clip = {x, y, rotation};

    clip.draw = function() {};

    clip.render = function(time) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.rotation);
        this.draw(time);
        context.restore();
    };

    return clip;
}