import Enemy from "./Enemy";
import pumpkinImage from "./assets/sprites/pumpkinSprite.png"

export default class Pumpkin extends Enemy {
    constructor(game, x, y) {
        super(game)
        this.width = 32
        this.height = 32
        this.type = "pumpkin"
        this.x = x
        this.y = y

        // Pumpkin Sprite Image 
        const image = new Image()
        image.src = pumpkinImage
        this.image = image
    }
}