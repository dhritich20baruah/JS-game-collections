const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001

export default class Ball{
    constructor(ballElem){
        this.ballElem = ballElem
        this.reset()
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'))
        //The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element. Gets the property value of x from the css style sheet and parse it to a float.
    }

    set x(value){
        this.ballElem.style.setProperty("--x", value)
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'))
        //The Window.getComputedStyle() method returns an object containing the values of all CSS properties of an element. Gets the property value of x from the css style sheet and parse it to a float.
    }

    set y(value){
        this.ballElem.style.setProperty("--y", value)
    }

    rect(){
        return this.ballElem.getBoundingClientRect()
    }
    reset(){
        this.x = 50
        this.y = 50
        this.direction = {x:0} //default value of x direction
        //To find the direction
        while(
            Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9  //Checking that the ball doesnot move in horizontal or vertical direction only
        ){
            const heading = randomNumberBetween(0, 2 * Math.PI)//in radian
            this.direction =  { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta){
        this.x += this.direction.x * this.velocity*delta
        this.y += this.direction.x * this.velocity*delta
        this.velocity += VELOCITY_INCREASE * delta
        const rect = this.rect()

        if(rect.bottom >= window.innerHeight || rect.top <= 0){
            this.direction.y *= -1
        }

        if(rect.right >= window.innerWidth || rect.left <= 0){
            this.direction.x *= -1
        }
    }
}

function randomNumberBetween(min, max){
    return Math.random() * (max - min) + min //takes in a random number multiply it by the number within our range and add to it the minimum
}