export default class Player {
    constructor(game) {
        this.game = game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 350

        this.speedX = 1
        this.speedY = 1
        this.maxSpeed = 4
        this.jumpHeight = -20
    }

    update(deltaTime) {
        if (this.game.keys.includes('ArrowLeft')) {
            this.speedX = -this.maxSpeed
        } else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed
        } else if (this.game.keys.includes('ArrowUp')) {
            this.speedY = this.jumpHeight
        } else {
            this.speedX = 0
            this.speedY = 0
            this.y = 350
        }
        
        this.y += this.speedY
        this.x += this.speedX
    }

    draw(context) {
        context.fillStyle = '#f00'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}