import InputHandler from "./InputHandler.js"
import Platform from "./Platform.js"
import Player from "./Player.js"
import UserInterface from "./UserInterface.js"
import Camera from "./Camera.js"
import Pumpkin from "./Pumpkin.js"
import Background from "./Background.js"
import Neighbour from "./Neighbour.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.ui = new UserInterface(this)
    this.input = new InputHandler(this)
    this.background = new Background(this)
    this.keys = []
    this.gameOver = false
    this.score = 0
    this.gravity = 1
    this.debug = false
    this.gameTime = 0
    this.speed = 1

    this.enemies = [
      new Pumpkin(this, 350, 370),
      new Pumpkin(this, 700, 370),
      new Pumpkin(this, 1050, 370),
      new Neighbour(this, 415, 370)
    ]

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
    this.background.update()
    
    this.player.update(deltaTime)

    this.enemies.forEach((enemy) => {
      if (this.checkPumpkinCollision(this.player, enemy)) {
        if (this.player.speedY > 0) {
          enemy.markedForDeletion = true
          this.player.speedY = -this.player.jumpSpeed
          this.score += 50
        }
      }
    })

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
    } else {
      this.enemyTimer += deltaTime
    }

    this.enemies.forEach((enemy) => enemy.update(deltaTime))
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)

    this.camera.update(this.player)
  }

  draw(context) {
    this.background.draw(context)
    this.ui.draw(context)
    this.camera.apply(context)
    this.player.draw(context, this.camera.x, this.camera.y)
    this.platforms.forEach((platform) => platform.draw(context))
    this.enemies.forEach((enemy) => enemy.draw(context, this.camera.x, this.camera.y))
    this.camera.reset(context)
  }

  checkPumpkinCollision(object1, object2) {
    return (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.height + object1.y > object2.y
    )
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
