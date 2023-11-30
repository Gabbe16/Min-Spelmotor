import Enemy from "./Enemy";
import pumpkinImage from "./assets/sprites/pumpkinSprite.png"

export default class Pumpkin extends Enemy {
    constructor(game, x, y) {
        super(game)
        this.width = 64
        this.height = 64
        this.type = "pumpkin"
        this.x = x
        this.y = y

        // Pumpkin Sprite Image 
        const image = new Image()
        image.src = pumpkinImage
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

    draw(context) {

        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }

        context.drawImage(
            this.image,
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