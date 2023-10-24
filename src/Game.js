import Slime from "./Slime.js"
import InputHandler from "./InputHandler.js"
import Platform from "./Platform.js"
import Player from "./Player.js"
import UserInterface from "./UserInterface.js"
import Camera from "./Camera.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.ui = new UserInterface(this)
    this.input = new InputHandler(this)
    this.keys = []
    this.gameOver = false
    this.score = 0
    this.gravity = 1
    this.debug = false
    this.gameTime = 0
    
    this.enemies = [new Slime(this, 340, 370)]
    this.enemyTimer = 0
    this.enemyIntervall = 1000
    
    this.player = new Player(this)
    this.camera = new Camera(this, this.player.x, this.player.y, 0, 100)
    
    this.ground = this.height - 100
    
    this.platforms = [
      new Platform(this, 0, this.ground, this.width + 600, 200),
    ]
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.player.update(deltaTime)

    this.platforms.forEach((platform) => {
      if (this.checkPlatformCollision(this.player, platform)) {
        this.player.speedY = 0
        this.player.y = platform.y - this.player.height
        this.player.grounded = true
      }
      this.enemies.forEach((enemy) => {
        if (this.checkPlatformCollision(enemy, platform)) {
          enemy.speedY = 0
          enemy.y = platform.y - enemy.height
        }
      })
    })

    if (this.enemyTimer > this.enemyIntervall && !this.gameOver) {
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }

    this.enemies.forEach((enemy) => enemy.update(deltaTime))
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)

    this.camera.update(this.player)
  }

  draw(context) {
    this.ui.draw(context)
    this.camera.apply(context)
    this.player.draw(context, this.camera.x, this.camera.y)
    this.platforms.forEach((platform) => platform.draw(context))
    this.enemies.forEach((enemy) => enemy.draw(context, this.camera.x, this.camera.y))
    this.camera.reset(context)
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
}
