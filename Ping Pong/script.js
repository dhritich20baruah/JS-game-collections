import Ball from "./Ball.js";

const ball = new Ball(document.getElementById("ball"))

//update function to update the screen every time something changes in the screen

let lastTime
function update(time){
    if(lastTime != null){
        const delta = time - lastTime
        ball.update(delta)
    }
    lastTime = time
    // we will need to take this time and convert it to delta which the difference between the two changes in the screen.
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)
