import url from './assets/sounds/bgmusic.wav'

export default class Sound{
    constructor(game){
        this.game = game
        const a  = new Audio
        a.src = url
        this.backgroundMusic = a
    }

    playBackgroundMusic(){
        this.backgroundMusic.currentTime = 0
        this.backgroundMusic.play()
    }
}