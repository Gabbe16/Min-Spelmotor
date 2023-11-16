import Enemy from "./Enemy";

export default class Neighbour extends Enemy{
    constructor(game, x, y){
        super(game)
        this.game = game
        console.log('Spawned new Neighbour')
        this.width = 32
        this.height = 64
        this.x = x
        this.y = y
        this.type = "neighbour"
        this.timer = 0
        // delete timer
        this.duration = 3000
        this.markedForDeletion = false
    }

    update(deltaTime) {
        if (this.timer > this.duration) {
            this.markedForDeletion = true
            this.game.activeNeighbours = false
            console.log(this.game.activeNeighbours)
        } else {
            this.timer += deltaTime
        }
    }
}