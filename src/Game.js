import Player from "./Player.js"
export default class Game {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.keys = []
    this.enemies = []
    this.gameOver = false
    this.gravity = 1
    this.debug = false

    this.Player = new Player(this)
  }

  update(deltaTime) {
    if (!this.gameOver) {
      this.gameTime += deltaTime
    }
    this.Player.update(deltaTime)
  }

  draw(context) {
    this.Player.draw(context)
  }
}
