var b = document.body;
b.style.margin = 0;
b.style.background = '#113644';
var c = document.querySelector('canvas');
c.width = window.innerWidth;
c.height = window.innerHeight;
var t = c.getContext('2d');
t.fillStyle = '#869496';
t.strokeStyle = '#869496';
console.log('external');
console.log(t);
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
