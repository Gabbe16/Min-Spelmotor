import Enemy from "./Enemy";

export default class Neighbour extends Enemy{
    constructor(game, x, y){
        super(game)
        this.width = 32
        this.height = 64
        this.x = x
        this.y = y
        this.watching = true
    }
}