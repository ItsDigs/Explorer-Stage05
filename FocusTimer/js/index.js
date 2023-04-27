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

const sounds = Sounds()

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    btnPause, 
    btnPlay,
    btnMinus,
    btnPlus,
    kitchenTimer: sounds.kitchenTimer
})

Events({
    btnCloud,
    btnFire,
    btnForest,
    btnPause,
    btnPlay,
    btnStop,
    btnStore,
    timer,
    sounds
})