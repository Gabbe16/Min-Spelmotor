import Enemy from "./Enemy";
import enemyImage from "./assets/sprites/enemySprite.png"

export default class Neighbour extends Enemy{
    constructor(game, x, y){
        super(game)
        this.game = game
        console.log('Spawned new Neighbour')
        this.width = 128
        this.height = 128
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

         // Sprite animation
         this.frameX = 0
         this.frameY = 1
         this.maxFrame = 1
         this.fps = 20
         this.timer = 0
         this.interval = 1000 / this.fps
 
         // flip sprite
         this.flip = false
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

    draw(context) {
    
        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }


        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height
            )
            
            if (this.flip) {
                context.restore()
            }
        
    }
}