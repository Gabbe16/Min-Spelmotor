import Player from "./Player.js"
import InputHandler from "./InputHandler.js"
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.input = new InputHandler(this)
    this.keys = []

    this.platforms = [
      new Platform(this, 0, this.ground, this.width, 100),
      new Platform(this, this.width - 200, 280, 200, 20),
      new Platform(this, 200, 200, 300, 20),
    ]

    this.enemies = []
    this.gameOver = false
    this.gravity = 5
    this.debug = false

    this.player = new Player(this)

    this.ground = this.height - 100
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.player.update(deltaTime)
  }

  draw(context) {
    this.player.draw(context)
    this.platforms.forEach((platform) => platform.draw(context))
  }
}
