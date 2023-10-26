import Layer from "./Layer";
import skyImage from './assets/layers/sky_layer.png'

export default class{
    constructor(game){
        this.game = game
        const background = new Image()
        background.src = skyImage
        this.skyLayer = new Layer(this.game, background, 1708, 500, 0,2)
        this.layers = [
            this.skyLayer
        ]
    }
}