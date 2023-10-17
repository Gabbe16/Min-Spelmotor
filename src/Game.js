import Slime from "./Slime.js"
import InputHandler from "./InputHandler.js"
import Platform from "./Platform.js"
import Player from "./Player.js"
import UserInterface from "./UserInterface.js"

export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.ui = new UserInterface(this)
    this.keys = []
    this.gameOver = false
    this.score = 0
    this.gravity = 1
    this.debug = false
    this.gameTime = 0

    this.enemies = []
    this.enemyTimer = 0
    this.enemyIntervall = 1000

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

    if (this.enemyTimer > this.enemyIntervall && !this.gameOver) {
      this.addEnemy()
      this.enemyTimer = 0
    } else {
      this.enemyTimer += deltaTime
    }

    this.enemies.forEach((enemy) => enemy.update(deltaTime))
    this.enemies = this.enemies.filter((enemy) => !enemy.markedForDeletion)
  }

  draw(context) {
    this.ui.draw(context)
    this.player.draw(context)
    this.platforms.forEach((platform) => platform.draw(context))
    this.enemies.forEach((enemy) => enemy.draw(context))
  }

  addEnemy() {
    this.enemies.push(new Slime(this, 340, 168))
  }
}
