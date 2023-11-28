import Enemy from "./Enemy";
import enemyImage from "./assets/sprites/enemySprite.png"

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

        // Enemy Sprite image
        const image = new Image()
        image.src = enemyImage
        this.image = image
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