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

    reset(){
        this.x = 50
        this.y = 50
        this.direction = {x:0.75, y:0.5}
    }

    update(delta){
        this.x = 5
        this.y = 15
    }
}