import Timer from './timer.js'
import Events from './events.js'
import Sounds from './sounds.js'

//HTML elements and variables
let secondsDisplay = document.querySelector('#seconds')
let minutesDisplay = document.querySelector('#minutes')

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const btnPlus = document.querySelector('.plus')
const btnMinus = document.querySelector('.minus')

const btnForest = document.querySelector('.forest')
const btnCloud = document.querySelector('.cloud')
const btnStore = document.querySelector('.store')
const btnFire = document.querySelector('.fire')

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    btnPause, 
    btnPlay
})


Events({
    btnCloud,
    btnFire,
    btnForest,
    btnMinus,
    btnPause,
    btnPlay,
    btnPlus,
    btnStop,
    btnStore,
    audioButtons: Sounds.audioButtons,
    timer,
})

btnPlus.addEventListener('click', () => {
    timer.minutes += 5
    timer.updateDisplay(String(minutes),)
})

btnMinus.addEventListener('click', () => {
    timer.minutes -= 5
    if (minutes <= 0){minutes = 0}
    timer.updateDisplay(String(minutes),)
    
})