import Projectile from "./Projectile"

export default class Player {
    constructor(game) {
        this.game = game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 350

        this.speedX = 0
        this.speedY = 0
        this.maxSpeed = 4
        this.jumpSpeed = 15
        this.grounded = false

        this.projectiles = []
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
    }

    draw(context) {
        context.fillStyle = '#f00'
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}