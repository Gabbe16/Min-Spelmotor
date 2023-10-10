import Projectile from "./Projectile"

export default class Player {
    constructor(game) {
        this.projectiles = []

        this.game = game
        this.width = 32
        this.height = 64
        this.x = 50
        this.y = 200

        this.speedX = 1
        this.speedY = 1
        this.maxSpeed = 4
    }

    update(deltaTime) {
        if (this.game.keys.includes('ArrowLeft')) {
            this.speedX = -this.maxSpeed
        } else if (this.game.keys.includes('ArrowRight')) {
            this.speedX = this.maxSpeed
        } else if (this.game.keys.includes('ArrowUp')) {
            this.speedY = -this.maxSpeed
        } else if (this.game.keys.includes('ArrowDown')) {
            this.speedY = this.maxSpeed
        } else {
            this.speedX = 0
            this.speedY = 0
        }

        this.y += this.speedY
        this.x += this.speedX

        this.projectiles.forEach((projectile) => {
            projectile.update()
        })
        this.projectiles = this.projectiles.filter(
            (projectile) => !projectile.markedForDeletion
        )
    }


    draw(context) {
        context.fillStyle = '#f00'
        context.fillRect(this.x, this.y, this.width, this.height)
        this.projectiles.forEach((projectile) => {
            projectile.draw(context)
        })
    }

    shoot() {
        this.projectiles.push(
            new Projectile(this.game, this.x + this.width, this.y + this.height / 2)
        )
    }
}