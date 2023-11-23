import playerImage from './assets/sprites/playerSprite.png'

export default class Player {
    constructor(game) {
        this.game = game
        this.width = 64
        this.height = 64
        this.x = 50
        this.y = 350

        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 3
        this.jumpSpeed = 14
        this.grounded = false

        // Sprite image
        const image = new Image()
        image.src = playerImage
        this.image = image

        // Sprite animation
        this.frameX = 0
        this.frameY = 1
        this.maxFrame = 4
        this.fps = 20
        this.timer = 0
        this.interval = 1000 / this.fps

        // flip sprite
        this.flip = false
    }

    update(deltaTime) {
        if (this.game.keys.includes('ArrowLeft')) {
            this.speedX = -this.maxSpeed
        } else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed
        } else {
            this.speedX = 0
        }

        if (this.game.keys.includes('ArrowUp') && this.grounded) {
            this.speedY = -this.jumpSpeed
            this.grounded = false
        }

        if (this.grounded) {
            this.speedY = 0
        } else {
            this.speedY += this.game.gravity
        }

        this.y += this.speedY
        this.x += this.speedX

        if (this.speedX < 0) {
            this.flip = true
        } else if (this.speedX > 0) {
            this.flip = false
        }

        if (this.timer > this.interval) {
            this.frameX++
            this.timer = 0
        } else {
            this.timer += deltaTime
        }

        if (this.frameX >= this.maxFrame) {
            this.frameX = 0
        }
    }

    draw(context) {
        // context.fillStyle = '#f00'
        // context.fillRect(this.x, this.y, this.width, this.height)

        if (this.flip) {
            context.save()
            context.scale(-1, 1)
        }

        context.drawImage(
            this.image,
            this.frameX * this.width,
            this.frameY * this.height - 14,
            this.width,
            this.height,
            this.flip ? this.x * -1 - this.width : this.x,
            this.y,
            this.width,
            this.height
        )

        context.restore()
    }
}