import Player from "./Player.js"
import InputHandler from "./InputHandler.js"
import UserInterface from "./UserInterface.js"
import Platform from "./Platform.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.UI = new UserInterface(this)
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.debug = false
    this.gravity = 1
    this.gameTime = 0
    this.score = 0
    this.ground = this.height - 100

    this.player = new Player(this)

    this.platforms = [
      new Platform(this, this.width - 200, 280, 200, 20),
      new Platform(this, 200, 200, 300, 20)
    ]
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.player.update(deltaTime)

    this.platforms.forEach((enemy) => {
      if (this.checkPlatformCollision(this.player, Platform)) {
        this.player.speedY = 0
        this.player.y = this.platform.y - this.player.height
        this.player.grounded = true
      }
      this.enemies.forEach(() => {
        if (this.checkPlatformCollision(enemy, platform)) {
          enemy.speedY = 0
          enemy.y = platform.y - enemy.height
        }
      })
    })
  }

  checkPlatformCollision(object, platform) {
    if (
      object.y + object.height >= platform.y &&
      object.y < platform.y &&
      object.x + object.width >= platform.x &&
      object.x <= platform.x + platform.width
    ) {
      if (object.grounded && object.y + object.height > platform.y) {
        object.speedY = 0
        object.y = platform.y - object.height
        object.grounded = true
      }
      return true
    } else {
      if (object.grounded && object.y + object.height < platform.y) {
        object.grounded = false
      }
      return false
    }
  }


  draw(context) {
    this.UI.draw(context)
    this.player.draw(context)
    this.platforms.forEach((platform) => platform.draw(context))
  }
}
