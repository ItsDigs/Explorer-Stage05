
export default function() {

const forestAudio = new Audio('https://github.com/ItsDigs/Explorer-Stage05/blob/main/FocusTimer/sounds/Floresta.wav?raw=true')
const cloudAudio = new Audio("https://github.com/ItsDigs/Explorer-Stage05/blob/main/FocusTimer/sounds/Chuva.wav?raw=true")
const storeAudio = new Audio("https://github.com/ItsDigs/Explorer-Stage05/blob/main/FocusTimer/sounds/Cafeteria.wav?raw=true")
const fireAudio = new Audio("https://github.com/ItsDigs/Explorer-Stage05/blob/main/FocusTimer/sounds/Lareira.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
forestAudio.loop = true
cloudAudio.loop = true
storeAudio.loop = true
fireAudio.loop = true

function audioButtons (button, audio){
    if (audio.paused){
        audio.play()
    }else {
        audio.pause()
    }
    button.classList.toggle('active')
}

function soundControl(slider, audio){
    audio.volume = slider.value/100

}

return {
audioButtons,
soundControl,
forestAudio,
cloudAudio,
storeAudio,
fireAudio,
kitchenTimer
}
}