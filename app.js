//Variables for the Tug Of War

var canvas= document.querySelector('canvas')
var ctx= canvas.getContext('2d')
var middle= 250
var position= middle

//Line

function draw () {
    ctx.clearRect (0,0,500,100);

    ctx.beginPath ();
    ctx.moveTo(middle,0);
    ctx.lineTo(middle,100);
    ctx.stroke();

//Red Dot
    ctx.beginPath();
    ctx.fillStyle='red';
    ctx.arc(position, 50,5,0,Math.PI*2);
    ctx.fill()

}

draw()


