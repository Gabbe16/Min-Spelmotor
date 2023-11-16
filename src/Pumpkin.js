import Enemy from "./Enemy";

export default class Pumpkin extends Enemy {
    constructor(game, x, y) {
        super(game)
        this.width = 32
        this.height = 32
        this.type = "pumpkin"
        this.x = x
        this.y = y
    }
}