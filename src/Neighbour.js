import Enemy from "./Enemy";

export default class Neighbour extends Enemy{
    constructor(game, x, y){
        super(game)
        console.log('spawnade ny neighbour')
        this.width = 32
        this.height = 64
        this.x = x
        this.y = y
        this.watching = true
        this.timer = 0
        // delete timer
        this.duration = 3000
        this.markedForDeletion = false
    }

    update(deltaTime) {
        if (this.timer > this.duration) {
            this.markedForDeletion = true
        } else {
            this.timer += deltaTime
        }
    }
}