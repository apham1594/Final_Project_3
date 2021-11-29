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

//Changing the position of the red dot

function move(distance){
    position= position + distance;
    draw()
}

//Moving the red dots with arrow keys

window.addEventListener('keydown', function (event) {
    event.preventDefault()

    if (event.key === 'ArrowRight') {
        move(10)
    }
    if (event.key === 'ArrowLeft') {
        move(-10)
    }
})

//Check to see who wins

function checkWinner(){
    if (position > middle){
        alert('Right Wins!')
    }
    if (position < middle){
        alert('Left Wins!')
    }
    if (position === middle){
        alert('Its a Tie!')
    }

}

setTimeout(checkWinner,10000)


